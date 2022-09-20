import emailjs from "emailjs-com";

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const apiKey = process.env.REACT_APP_USER_ID;

export async function sendEmail(e) {
  return await emailjs.sendForm(serviceId, templateId, e.target, apiKey);
}
