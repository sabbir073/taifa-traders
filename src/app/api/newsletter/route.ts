import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Create transporter with your SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'mail.taifatraders.com',
      port: 465,
      secure: true, // SSL/TLS
      auth: {
        user: 'admin@taifatraders.com',
        pass: '^oefg32bo!;AsbQk'
      },
      tls: {
        rejectUnauthorized: false // For self-signed certificates if needed
      }
    })

    // Email content
    const mailOptions = {
      from: 'admin@taifatraders.com',
      to: 'info@taifatraders.com',
      subject: 'New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #142355; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">
            New Newsletter Subscription
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #142355; margin-top: 0;">Subscriber Information</h3>
            <p><strong>Email Address:</strong> ${email}</p>
            <p><strong>Subscribed on:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #e8f4fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #142355; margin-top: 0;">Next Steps</h4>
            <ul style="color: #666;">
              <li>Add this email to your newsletter mailing list</li>
              <li>Send a welcome email to the subscriber</li>
              <li>Include them in future trade insights and market updates</li>
            </ul>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f1f3f4; border-radius: 8px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              This email was generated from the Taifa Traders website newsletter subscription form.
            </p>
          </div>
        </div>
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Newsletter subscription successful' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    )
  }
}