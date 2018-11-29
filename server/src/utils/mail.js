import mailgunLoader from 'mailgun-js';
import { config } from '../config';

let mailgun = mailgunLoader({
    apiKey: config.MAILGUN_API_KEY,
    domain: config.MAILGUN_DOMAIN
});

const sendEmail = (to, from, subject, content) => {
    let data = {
        to,
        from,
        subject,
        text: content //or html: content
    };
    return mailgun.messages().send(data);
};

export { sendEmail };