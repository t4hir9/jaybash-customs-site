import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, serviceType, details, wrapTypes, detailingOptions, colors, customizations, carModel, originalColor, wrapExtent, specialRequest, date } = req.body;

  // Configure transporter (using environment variables for security)
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Define recipients (add jaybashcustoms email)
  const recipients = [
    email, // Original recipient (user's email)
    'abdultahir779@gmail.com', // Additional recipient for admin
  ];

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipients.join('abdultahir779@gmail.com'), // Combine multiple recipients
    subject: `New Booking from ${name}`,
    text: `
      Booking Details:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Service Type: ${serviceType}
      Details: ${details || 'N/A'}
      Wrap Types: ${wrapTypes.join(', ') || 'N/A'}
      Detailing Options: ${detailingOptions.join(', ') || 'N/A'}
      Colors: ${colors.join(', ') || 'N/A'}
      Customizations: ${customizations.join(', ') || 'N/A'}
      Car Model: ${carModel || 'N/A'}
      Original Color: ${originalColor || 'N/A'}
      Wrap Extent: ${wrapExtent || 'N/A'}
      Special Request: ${specialRequest || 'N/A'}
      Date: ${date}
    `,
    attachments: [], // Add attachments if needed (e.g., PDF generation)
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Booking details sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send booking details' });
  }
}