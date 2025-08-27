import { Resend } from 'resend'

if (!process.env.RESEND_API_KEY) {
  console.warn('RESEND_API_KEY is not set. Email functionality will be disabled.')
}

const resend = new Resend(process.env.RESEND_API_KEY)

export interface EmailTemplate {
  to: string
  subject: string
  html: string
  text?: string
}

// Email templates
export const emailTemplates = {
  ebookDownload: (email: string, downloadUrl: string, name?: string) => ({
    to: email,
    subject: '🎉 Tu Ebook está listo para descargar - CodeMentor Pro',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Descarga tu Ebook</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #10b981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
            .feature { margin: 15px 0; padding-left: 25px; position: relative; }
            .feature:before { content: "✅"; position: absolute; left: 0; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 ¡Tu Ebook está listo!</h1>
              <p>Gracias por confiar en CodeMentor Pro para acelerar tu carrera tech</p>
            </div>
            
            <div class="content">
              <p>Hola ${name || 'futuro developer'},</p>
              
              <p>¡Felicidades por dar este paso hacia tu carrera tech! Tu ebook "Guía Completa del Programador Moderno" ya está disponible para descarga.</p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${downloadUrl}" class="button">📚 Descargar Ebook Ahora</a>
              </div>
              
              <h3>¿Qué incluye tu ebook?</h3>
              <div class="feature">Fundamentos sólidos de JavaScript, TypeScript y PHP</div>
              <div class="feature">Proyectos prácticos con código fuente completo</div>
              <div class="feature">Guía paso a paso para tu primer empleo tech</div>
              <div class="feature">Estrategias de pricing para trabajos freelance</div>
              <div class="feature">Templates profesionales de CV y portfolio</div>
              <div class="feature">Acceso a comunidad privada de Discord</div>
              
              <h3>🚀 Próximos pasos:</h3>
              <ol>
                <li><strong>Descarga el ebook</strong> usando el botón de arriba</li>
                <li><strong>Únete a Discord:</strong> <a href="https://discord.gg/codementor">discord.gg/codementor</a></li>
                <li><strong>Síguenos en redes:</strong> recibirás tips y actualizaciones</li>
                <li><strong>¡Comienza a aprender!</strong> Tu carrera tech empieza ahora</li>
              </ol>
              
              <p><strong>Recuerda:</strong> Este ebook se actualiza automáticamente. Te notificaremos cuando haya nuevas versiones disponibles.</p>
              
              <div style="background: #fee2e2; border: 1px solid #fecaca; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>⚠️ Importante:</strong> Guarda el enlace de descarga en un lugar seguro. Puedes descargar el ebook las veces que necesites.</p>
              </div>
              
              <p>¿Preguntas? Responde a este email y te ayudamos.</p>
              
              <p>¡Éxito en tu carrera tech!</p>
              <p><strong>El equipo de CodeMentor Pro</strong></p>
            </div>
            
            <div class="footer">
              <p>CodeMentor Pro | Acelera tu carrera tech</p>
              <p>Si no solicitaste este ebook, puedes ignorar este email.</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
¡Tu Ebook está listo!

Hola ${name || 'futuro developer'},

Gracias por confiar en CodeMentor Pro. Tu ebook "Guía Completa del Programador Moderno" está disponible para descarga.

Descarga aquí: ${downloadUrl}

¿Qué incluye?
✅ Fundamentos de JavaScript, TypeScript y PHP
✅ Proyectos prácticos con código fuente
✅ Guía para conseguir tu primer empleo tech
✅ Estrategias de pricing freelance
✅ Templates de CV y portfolio
✅ Acceso a comunidad Discord

Próximos pasos:
1. Descarga el ebook
2. Únete a Discord: discord.gg/codementor
3. ¡Comienza tu carrera tech!

¿Preguntas? Responde a este email.

¡Éxito!
El equipo de CodeMentor Pro
    `
  }),

  welcome: (email: string, name?: string) => ({
    to: email,
    subject: '👋 Bienvenido a CodeMentor Pro - Tu carrera tech empieza aquí',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Bienvenido a CodeMentor Pro</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #2563eb; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 10px; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>👋 ¡Bienvenido a CodeMentor Pro!</h1>
              <p>Tu carrera tech empieza aquí</p>
            </div>
            
            <div class="content">
              <p>Hola ${name || 'futuro developer'},</p>
              
              <p>¡Bienvenido a la comunidad más grande de desarrolladores en español! Estamos emocionados de acompañarte en tu viaje hacia una carrera tech exitosa.</p>
              
              <h3>🚀 Empieza explorando:</h3>
              <div style="text-align: center; margin: 20px 0;">
                <a href="https://codementorpro.com/tutorials" class="button">📚 Microtutoriales</a>
                <a href="https://codementorpro.com/training" class="button">🎯 Series de Entrenamiento</a>
                <a href="https://codementorpro.com/career" class="button">💼 Guías de Carrera</a>
              </div>
              
              <h3>💡 Recursos recomendados para empezar:</h3>
              <ul>
                <li><strong>Si eres principiante:</strong> Comienza con nuestra serie "Frontend Developer"</li>
                <li><strong>Si buscas empleo:</strong> Descarga nuestra guía de CV y portfolio</li>
                <li><strong>Si quieres proyectos:</strong> Explora nuestros microtutoriales prácticos</li>
              </ul>
              
              <div style="background: #dbeafe; border: 1px solid #93c5fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>🎁 Regalo de bienvenida:</strong> Nuestro ebook "Guía Completa del Programador Moderno" está en oferta por tiempo limitado. <a href="https://codementorpro.com/ebook">¡No te lo pierdas!</a></p>
              </div>
              
              <p>Si tienes preguntas, responde a este email. Estamos aquí para ayudarte.</p>
              
              <p>¡Bienvenido a bordo!</p>
              <p><strong>El equipo de CodeMentor Pro</strong></p>
            </div>
            
            <div class="footer">
              <p>CodeMentor Pro | Acelera tu carrera tech</p>
              <p><a href="#">Actualizar preferencias</a> | <a href="#">Darse de baja</a></p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
¡Bienvenido a CodeMentor Pro!

Hola ${name || 'futuro developer'},

Bienvenido a la comunidad más grande de desarrolladores en español.

Recursos para empezar:
- Microtutoriales: https://codementorpro.com/tutorials
- Series de Entrenamiento: https://codementorpro.com/training
- Guías de Carrera: https://codementorpro.com/career

🎁 Regalo: Nuestro ebook está en oferta por tiempo limitado.

¿Preguntas? Responde a este email.

¡Bienvenido!
El equipo de CodeMentor Pro
    `
  }),

  newsletterWeekly: (email: string, name?: string, tutorials: any[] = []) => ({
    to: email,
    subject: '📚 Nuevos tutoriales de la semana - CodeMentor Pro',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Tutoriales de la semana</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .tutorial { background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin: 15px 0; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📚 Tutoriales de la Semana</h1>
              <p>Nuevos microtutoriales para acelerar tu aprendizaje</p>
            </div>
            
            <div class="content">
              <p>Hola ${name || 'developer'},</p>
              
              <p>Esta semana hemos publicado ${tutorials.length} nuevos microtutoriales que te ayudarán a seguir creciendo como developer.</p>
              
              ${tutorials.map(tutorial => `
                <div class="tutorial">
                  <h3>${tutorial.title}</h3>
                  <p>${tutorial.description}</p>
                  <p><strong>Nivel:</strong> ${tutorial.level} | <strong>Duración:</strong> ${tutorial.duration}</p>
                  <a href="https://codementorpro.com/tutorials/${tutorial.id}" style="color: #2563eb;">Leer tutorial →</a>
                </div>
              `).join('')}
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://codementorpro.com/tutorials" style="display: inline-block; background: #2563eb; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">Ver Todos los Tutoriales</a>
              </div>
              
              <p>¡Sigue aprendiendo!</p>
              <p><strong>El equipo de CodeMentor Pro</strong></p>
            </div>
            
            <div class="footer">
              <p>CodeMentor Pro | Acelera tu carrera tech</p>
              <p><a href="#">Actualizar preferencias</a> | <a href="#">Darse de baja</a></p>
            </div>
          </div>
        </body>
      </html>
    `
  })
}

// Send email function
export async function sendEmail(template: EmailTemplate) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('Email not sent: RESEND_API_KEY not configured')
    return { success: false, error: 'Email service not configured' }
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'CodeMentor Pro <noreply@codementorpro.com>',
      to: [template.to],
      subject: template.subject,
      html: template.html,
      text: template.text,
    })

    if (error) {
      console.error('Email sending error:', error)
      return { success: false, error: error.message }
    }

    console.log('Email sent successfully:', data?.id)
    return { success: true, id: data?.id }
  } catch (error) {
    console.error('Email service error:', error)
    return { success: false, error: 'Failed to send email' }
  }
}

// Convenience functions
export const sendEbookDownloadEmail = (email: string, downloadUrl: string, name?: string) =>
  sendEmail(emailTemplates.ebookDownload(email, downloadUrl, name))

export const sendWelcomeEmail = (email: string, name?: string) =>
  sendEmail(emailTemplates.welcome(email, name))

export const sendWeeklyNewsletter = (email: string, name?: string, tutorials: any[] = []) =>
  sendEmail(emailTemplates.newsletterWeekly(email, name, tutorials))

export default { sendEmail, emailTemplates }
