import { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, service, date } = req.body;

  // Generate PDF
  const doc = new PDFDocument();
  const pdfPath = `/tmp/booking-${Date.now()}.pdf`;
  doc.pipe(fs.createWriteStream(pdfPath));
  doc.fontSize(16).text('Jaybash Customs Booking Confirmation', { align: 'center' });
  doc.moveDown();
  doc.fontSize(12).text(`Name: ${name}`);
  doc.text(`Email: ${email}`);
  doc.text(`Phone: ${phone}`);
  doc.text(`Service: ${service}`);
  doc.text(`Date: ${date}`);
  doc.end();

  // Email configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service (e.g., Gmail, replace with your provider)
    auth: {
      user: 'your-email@gmail.com', // Replace with your email
      pass: 'your-app-password', // Use an app-specific password for Gmail
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Your Jaybash Customs Booking Confirmation',
    text: `Dear ${name}, your booking for ${service} on ${date} has been confirmed. Please find the PDF attachment.`,
    attachments: [{ filename: `booking-${Date.now()}.pdf`, path: pdfPath }],
  };

  try {
    await transporter.sendMail(mailOptions);
    fs.unlinkSync(pdfPath); // Clean up temporary file
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    fs.unlinkSync(pdfPath); // Clean up on error
    res.status(500).json({ message: 'Failed to send email' });
  }
}