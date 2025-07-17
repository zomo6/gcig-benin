// app/api/send-devis/route.ts
import emailjs from '@emailjs/browser';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.json();

  try {
    // Configuration EmailJS
    // await emailjs.send(
    //   process.env.EMAILJS_SERVICE_ID!,
    //   process.env.EMAILJS_TEMPLATE_ID!,
    //   {
    //     nom: formData.nom,
    //     email: formData.email,
    //     telephone: formData.telephone,
    //     service: formData.service,
    //     message: formData.message,
    //     date: new Date().toLocaleDateString('fr-FR')
    //   },
    //   {
    //     publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    //     privateKey: process.env.EMAILJS_PRIVATE_KEY!,
    //   }
    // );

    // return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur EmailJS:', error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" },
      { status: 500 }
    );
  }
}
