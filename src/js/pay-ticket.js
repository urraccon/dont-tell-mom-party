// import { SMTPClient } from '../../node_modules/emailjs/email';

// const userAccount = new SMTPClient({
//   user: 'tickets@donttellmomparty.ro',
//   password: 'pant03etsdOlltem17tickmOrty',
//   host: 'smtp.donttellmomparty.ro',
//   ssl: true,
// });

// function createMail(email, message, subject) {
//   const recipientName = email.slice(0, email.indexOf('@'));
//   const mailBody = {
//     text: `${message}`,
//     from: `Don't tell mom party bilete <tickets@donttellmomparty.ro>`,
//     to: `${recipientName} <${email}>`,
//     cc: `Don't tell mom party <office@donttellmomparty.ro>`,
//     subject: `${subject}`,
//   };
//   userAccount.send(mailBody, function (reject, approved) {
//     console.log(reject || approved);
//   });
// }

const purchaseTicketForm = document.querySelector('form.purchase-ticket');
// const clientEmailInput = document.querySelector('input.client-email');
// const eventNameField = document.querySelector(
//   '.purchase-ticket .event-name .small-text'
// );
// const eventDateField = document.querySelector(
//   '.purchase-ticket .event-date .small-text'
// );
// const eventPriceField = document.querySelector(
//   '.purchase-ticket .event-price .small-text'
// );

// console.dir(purchaseTicketForm);
// console.log(clientEmailElem);
// console.dir(eventNameField);
// console.dir(eventDateField);
// console.dir(eventPriceField);

// const eventName = eventNameField.textContent;
// const eventDate = eventDateField.textContent;
// const eventPrice = eventPriceField.textContent;

// console.log(eventName);
// console.log(eventDate);
// console.log(eventPrice);

// const DTMPEmail = 'office@donttellmomparty.ro';
// const messageMailClient = `
// Heyo!

// Ne bucuram ca vei fi prezent la petrecerea ${eventName} care se va tine in data de ${eventDate}.
// Pretul intrarii la petrecere este de ${eventPrice}.
// Acesta este QR Code-ul tau pentru a-ti plati intrarea la petrecere.

// Love you,
// Don't tell mom party Team`;
// const subjectMailClient = `Plata intrare petrecere ${eventName}`;
// const subjectMailDTMP = `Un nou participant la petrecerea ${eventName}`;

purchaseTicketForm.addEventListener('submit', paymentRequest);

function paymentRequest(paymentDetails) {
  // debugger;
  paymentDetails.preventDefault();
  // windows
  window.open('https://epl.ro/q/NTB22qgyeYtRpArUP9He6V-ko*Of-Ko=');
  // console.dir(paymentDetails);
  // const clientEmail = paymentDetails.target[0].value;
  // console.log(clientEmail);
  // createMail(clientEmail, messageMailClient, subjectMailClient);
  // const messageMailDTMP = `
  // Heyo!

  // ${clientEmail} va fi prezent la petrecerea ${eventName}!

  // Love you,
  // Don't tell mom party Team`;
  // createMail(DTMPEmail, messageMailDTMP, subjectMailDTMP);
}
