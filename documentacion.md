# Guía de Despliegue Continuo con GitHub Actions (Servidor Sistella)

Esta guía documenta el paso a paso para desplegar automáticamente cualquier proyecto web estático o SPA (Vite / React / HTML) desde un repositorio de **GitHub** hacia el servidor de **Virtualmin / Ubuntu** mediante **Rsync sobre SSH**.

---

## 1. Datos del Servidor

* **Hostname / IP:** `212.28.179.48` (`key.sistella.com.mx`)
* **Puerto SSH:** `9338` *(Importante: no es el puerto 22 predeterminado)*
* **Usuario habitual:** `sistella` *(o el usuario del dominio correspondiente en Virtualmin)*
* **Ruta base de dominios:** `/home/<USUARIO>/domains/<DOMINIO>/public_html/<SUBDIRECTORIO>/`

---

## 2. Preparación en el Servidor (Terminal SSH)

> [!NOTE]
> Si el nuevo proyecto pertenece al mismo usuario `sistella` y usas la misma llave privada ya configurada en GitHub Secrets, **puedes saltar directo al Paso 2.3**.

### 2.1 Habilitar consola (Shell) al usuario en Virtualmin
Por seguridad, Virtualmin suele crear a los usuarios web sin acceso a consola (`/bin/false`). Para que Rsync/SSH funcione, debes darle shell `/bin/bash`:
```bash
sudo chsh -s /bin/bash <USUARIO>
# Ejemplo:
sudo chsh -s /bin/bash sistella
```

### 2.2 Configurar la llave SSH (si es un usuario nuevo o llave nueva)
1. **Generar un par de llaves en el servidor (o en tu máquina local):**
   ```bash
   ssh-keygen -t ed25519 -C "github-actions-<PROYECTO>" -f /tmp/deploy_key -N ""
   ```

2. **Instalar la llave pública en el usuario correspondiente y fijar permisos estrictos:**
   ```bash
   # Crear directorio .ssh si no existe
   sudo mkdir -p /home/<USUARIO>/.ssh

   # Agregar la llave pública
   sudo cat /tmp/deploy_key.pub | sudo tee -a /home/<USUARIO>/.ssh/authorized_keys

   # Permisos estrictos exigidos por OpenSSH (OBLIGATORIO)
   sudo chmod 700 /home/<USUARIO>/.ssh
   sudo chmod 600 /home/<USUARIO>/.ssh/authorized_keys
   sudo chown -R <USUARIO>:<USUARIO> /home/<USUARIO>/.ssh
   sudo chmod 750 /home/<USUARIO>
   ```

3. **Copiar la llave privada para GitHub y limpiar temporales:**
   ```bash
   cat /tmp/deploy_key
   ```
   *(Copia todo el bloque, desde `-----BEGIN OPENSSH PRIVATE KEY-----` hasta `-----END OPENSSH PRIVATE KEY-----`)*.
   Luego bórrala del servidor:
   ```bash
   rm /tmp/deploy_key /tmp/deploy_key.pub
   ```

### 2.3 Crear la carpeta destino del proyecto
Crea la carpeta donde se alojará el sitio y asegúrate de que pertenezca al usuario del sitio web:
```bash
sudo mkdir -p /home/sistella/domains/lab.sistella.com.mx/public_html/<NOMBRE_PROYECTO>
sudo chown -R sistella:sistella /home/sistella/domains/lab.sistella.com.mx/public_html/<NOMBRE_PROYECTO>
```

---

## 3. Configuración en GitHub

### 3.1 Secrets del Repositorio
En GitHub, ve a **Settings** > **Secrets and variables** > **Actions** y define:
* `SSH_PRIVATE_KEY`: Contenido exacto de la llave privada (incluyendo cabecera y pie).
* `SERVER_IP`: `212.28.179.48`

*(Si el repositorio pertenece a una organización, puedes definir estos secretos a nivel de Organización para compartirlos en todos tus proyectos).*

### 3.2 Crear el Workflow de Despliegue
Crea el archivo `.github/workflows/deploy.yml` con la siguiente plantilla:

```yaml
name: Deploy a Servidor

env:
  FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout Code
      uses: actions/checkout@v4

    - name: Deploy via Rsync
      env:
        SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
        SERVER_IP: ${{ secrets.SERVER_IP }}
      run: |
        mkdir -p ~/.ssh
        echo "$SSH_PRIVATE_KEY" > ~/.ssh/deploy_key
        chmod 600 ~/.ssh/deploy_key
        
        # Sincronizar public_html hacia el servidor
        rsync -avz --exclude='.git' --exclude='.github' --exclude='cgi-bin' --exclude='.DS_Store' --delete \
          -e "ssh -i ~/.ssh/deploy_key -p 9338 -o StrictHostKeyChecking=no" \
          public_html/ sistella@$SERVER_IP:/home/sistella/domains/lab.sistella.com.mx/public_html/<NOMBRE_PROYECTO>/
```

> [!IMPORTANT]
> **Atención a la barra diagonal `/` al final de `public_html/` y de la ruta destino:**
> - `public_html/` (con slash al final) copia el **contenido** de la carpeta directamente dentro del destino.
> - Si omites el slash (`public_html`), creará una subcarpeta no deseada (`<NOMBRE_PROYECTO>/public_html/`).

---

## 4. Configuración del Proyecto Web (Vite / React / Estático)

Si el proyecto se va a servir en una subruta (ejemplo: `lab.sistella.com.mx/<NOMBRE_PROYECTO>/`), debes asegurar 3 cosas antes de compilar:

### 4.1 En `vite.config.ts`
Configura la propiedad `base`:
```typescript
export default defineConfig({
  base: '/<NOMBRE_PROYECTO>/',
  // ... resto de plugins
});
```

### 4.2 En el Router o Enrutamiento SPA (si aplica)
Asegura que tu router reconozca la ruta base para que los enlaces no apunten a la raíz del dominio principal:
```typescript
// En React Router:
<BrowserRouter basename="/<NOMBRE_PROYECTO>">
```

### 4.3 Archivo `.htaccess` para Apache
Crea un archivo `public_html/.htaccess` para que las rutas internas de la SPA no den error 404 al refrescar la página:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /<NOMBRE_PROYECTO>/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /<NOMBRE_PROYECTO>/index.html [L]
</IfModule>
```

### 4.4 Estructura del Repositorio
Coloca los archivos finales construidos (`index.html`, `.htaccess`, carpeta `assets/`) directamente dentro de la carpeta `public_html/`:
```text
mi-proyecto/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public_html/
│   ├── .htaccess
│   ├── index.html
│   └── assets/
│       ├── index-XXXX.js
│       ├── index-XXXX.css
│       └── imagenes/
└── README.md
```

---

## 5. Checklist Rápido para Nuevos Proyectos

- [ ] ¿El usuario en el servidor tiene shell `/bin/bash`? (`sudo chsh -s /bin/bash <usuario>`)
- [ ] ¿La llave pública está en `/home/<usuario>/.ssh/authorized_keys` con permisos `600`?
- [ ] ¿La carpeta destino existe y pertenece a `<usuario>:<usuario>`?
- [ ] ¿Los secretos `SSH_PRIVATE_KEY` y `SERVER_IP` están agregados en GitHub?
- [ ] ¿El archivo `deploy.yml` tiene el puerto `-p 9338` y la ruta destino correcta?
- [ ] ¿El `base` de Vite y el `.htaccess` tienen `/<NOMBRE_PROYECTO>/`?
- [ ] Hacer `git push origin main` y verificar la pestaña **Actions** en GitHub.

---

## 6. Solución de Problemas Frecuentes

| Error | Causa | Solución |
|---|---|---|
| `Permission denied (publickey,password)` | Permisos incorrectos en `.ssh` o la llave privada no coincide con `authorized_keys`. | Ejecutar `chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys` y asegurar que el dueño sea el usuario (no `root`). Verificar que el usuario tenga shell `/bin/bash`. |
| Conexión colgada / timeout | Se intentó conectar al puerto 22 en lugar de 9338. | Revisar que el comando SSH en `deploy.yml` tenga `-p 9338`. |
| 404 al recargar ruta interna (SPA) | Apache no está redirigiendo las peticiones a `index.html`. | Verificar que exista `.htaccess` con `RewriteBase /<NOMBRE_PROYECTO>/` y que Apache tenga activo `AllowOverride All` o `mod_rewrite`. |
| Se crea carpeta duplicada (`/proyecto/public_html`) | Falta la barra diagonal `/` al final de `public_html/` en `rsync`. | Usar siempre `public_html/` (con slash final) en el comando Rsync. |
