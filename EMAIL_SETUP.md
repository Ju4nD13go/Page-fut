# 📧 Configuración de Email para Formulario de Inscripción

El formulario actualmente registra los datos en la consola. Para enviar emails reales, necesitas configurar un servicio de email.

## Opciones Recomendadas:

### 1. **Resend** (Recomendado - Más Simple)
```bash
pnpm install resend
```

En `.env.local`:
```
RESEND_API_KEY=tu_api_key
TEAM_EMAIL=info@barkleyacademy.com
```

En `app/api/contact/route.ts`, descomenta y usa:
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

const { data, error } = await resend.emails.send({
  from: 'Barkley Academy <noreply@barkleyacademy.com>',
  to: [process.env.TEAM_EMAIL!],
  subject: `Nueva Inscripción: ${nombre} ${apellido}`,
  text: emailContent,
});
```

### 2. **SendGrid**
```bash
pnpm install @sendgrid/mail
```

### 3. **Nodemailer** (Gmail, Outlook, etc.)
```bash
pnpm install nodemailer
```

## Cómo Obtener API Key de Resend:
1. Ve a [resend.com](https://resend.com)
2. Crea una cuenta gratis (100 emails/día)
3. Genera una API Key
4. Verifica tu dominio (o usa el dominio de prueba)
5. Copia la API Key a `.env.local`

## Testing:
1. Llena el formulario en http://localhost:3000
2. Verifica la consola del servidor para ver los datos
3. Una vez configurado el servicio, verifica tu bandeja de entrada

## Seguridad:
- ✅ `.env.local` está en `.gitignore` (no se sube a GitHub)
- ✅ Las API keys nunca se exponen al cliente
- ✅ Validación de datos en el servidor
