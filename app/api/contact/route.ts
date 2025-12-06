import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, apellido, email, telefono, edad, categoria, mensaje } = body;

    // Validación básica
    if (!nombre || !apellido || !email || !telefono || !edad || !categoria) {
      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben estar completos' },
        { status: 400 }
      );
    }

    // Aquí puedes usar diferentes servicios para enviar emails:
    // 1. Nodemailer con tu servidor SMTP
    // 2. SendGrid
    // 3. Resend
    // 4. EmailJS
    
    // Por ahora, lo simularemos con un log
    console.log('Datos del formulario recibidos:', {
      nombre,
      apellido,
      email,
      telefono,
      edad,
      categoria,
      mensaje
    });

    // Ejemplo con formato para email
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

    console.log('Email a enviar:', emailContent);

    // TODO: Aquí integrar el servicio de email que prefieras
    // Por ejemplo con Resend:
    // const { data, error } = await resend.emails.send({
    //   from: 'Barkley Academy <noreply@barkleyacademy.com>',
    //   to: ['info@barkleyacademy.com'],
    //   subject: `Nueva Inscripción: ${nombre} ${apellido}`,
    //   text: emailContent,
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Formulario recibido correctamente. Nos pondremos en contacto pronto.' 
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
