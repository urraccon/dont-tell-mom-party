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

const paymentWelcomeWindowOpeningBtn = document.querySelector(
  'form.purchase-ticket'
);
const paymentWelcomeWindowClosingBtn =
  document.querySelector('button.close-btn');
const paymentWelcomeWindow = document.querySelector(
  'div.payment-welcome-window'
);
const paymentPlatformBtn = document.querySelector(
  'button.payment-platform-btn'
);

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

paymentWelcomeWindowOpeningBtn.addEventListener(
  'submit',
  openPaymentWelcomeWindow
);

function openPaymentWelcomeWindow(openingWindow) {
  // debugger;
  openingWindow.preventDefault();
  paymentWelcomeWindow.classList.remove('hidden-window');
  // windows
  // window.open('https://epl.ro/q/NTB22qgyeYtRpArUP9He6V-ko*Of-Ko=');
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

paymentWelcomeWindowClosingBtn.addEventListener(
  'click',
  closePaymentWelcomeWindow
);

function closePaymentWelcomeWindow(closingWindow) {
  // closingWindow.preventDefault();
  paymentWelcomeWindow.classList.add('hidden-window');
}

paymentPlatformBtn.addEventListener('click', openPaymentPlatform);

function openPaymentPlatform(accessLink) {
  accessLink.preventDefault();
  window.open('https://epl.ro/q/NTB22qgyeYtRpArUP9He6V-ko*Of-Ko=');
}
