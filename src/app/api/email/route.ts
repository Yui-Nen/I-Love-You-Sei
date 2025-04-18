import { EmailTemplate } from '@/components/email/email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  
  try {
    const body = await req.json();
    const message = body.message || 'No message';

    console.log(message);
    
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['yuuuuuiiiii.nen@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ message })  as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}