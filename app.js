

function redirectToWhatsApp() {
    // Define the WhatsApp number and message
    var phoneNumber = '+21277680782'; // Your WhatsApp number
    var message = 'Hello, I would like to chat with you.'; // Default message

    // Construct the WhatsApp URL
    var url = 'https://api.whatsapp.com/send?phone=' + encodeURIComponent(phoneNumber) + '&text=' + encodeURIComponent(message);

    // Redirect to WhatsApp
    window.location.href = url;
}
