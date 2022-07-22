import { IMailtrapMail, IMessage } from './IMailtrapMail';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';


export class MailtrapMail implements IMailtrapMail {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: '7618da334575c0',
                pass: '53e14bb87f9207'
            }
        });
    }

    
    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        });
    }
}