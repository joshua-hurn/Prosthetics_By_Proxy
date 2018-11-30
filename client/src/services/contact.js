import * as baseService from './base';

function sendContactEmail(name, email, message) {
    return baseService.post('/api/contact', {
        name,
        email,
        message
    });
}

export { sendContactEmail }