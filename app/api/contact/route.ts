import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Verificar si la clave de Resend está configurada
    if (!RESEND_API_KEY || RESEND_API_KEY === 'tu_api_key_aqui') {
      return NextResponse.json(
        {
          success: false,
          message: 'Configuración de email incompleta. Configura RESEND_API_KEY en .env.local',
          emailSent: false,
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { nombre, apellido, email, telefono, edad, categoria, mensaje } = body;

    // Validación básica
    if (!nombre || !apellido || !email || !telefono || !edad || !categoria) {
      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben estar completos' },
        { status: 400 }
      );
    }

    // Formato de email
    const emailContent = `
      Nueva Inscripción - Club Deportivo Barkley
      
      Datos del Jugador:
      - Nombre: ${nombre} ${apellido}
      - Email: ${email}
      - Teléfono: ${telefono}
      - Edad: ${edad} años
      - Categoría de Interés: ${categoria}
      
      Mensaje:
      ${mensaje || 'Sin mensaje adicional'}
      
      ---
      Enviado desde el formulario web de Club Deportivo Barkley
    `;

    // Enviar email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Barkley Academy <onboarding@resend.dev>',
      to: [process.env.TEAM_EMAIL!],
      subject: `Nueva Inscripción: ${nombre} ${apellido}`,
      text: emailContent,
    });

    if (error) {
      console.error('Error al enviar email via Resend:', error);

      return NextResponse.json(
        {
          error: 'No fue posible enviar la inscripción. Intenta nuevamente más tarde.',
          emailSent: false,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Formulario recibido correctamente. Nos pondremos en contacto pronto.',
        emailSent: !error
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error al procesar el formulario:', error);
    return NextResponse.json(
      { error: 'Error al procesar el formulario' },
      { status: 500 }
    );
  }
}