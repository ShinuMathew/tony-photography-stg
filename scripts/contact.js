/*document.querySelector('#form').addEventListener('submit', function (e) {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let message = document.querySelector('#description').value;

    sendEmail(name, email, phone, message);
})

function sendEmail(name, email, phone, message) {
    Email.send({
        HOST: "smtp.gmail.com",
        Username: 'shinuautotest123@gmail.com',
        Password: 'shinz9474',
        To: 'mathewshinu9474@gmail.com',
        From: 'shinuautotest123@gmail.com',
        Subject: `${name} - Contacted you from portfolio`,
        Body: `Name: ${name}<br/> Email: ${email} <br/> Phone: ${phone} <br/> Message: ${message}`
    }).then((message) => {
        console.log("Mail sent successfully")
        alert("Mail sent successfully")
    }).catch((err) => {
        console.log(`Mail sent successfully: ${err}`)
    })
}*/
const responseContainer = document.querySelector('.response-container')
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('shinu123', 'template_my21kmf', this)
            .then(function () {
                console.log('SUCCESS!');
                document.getElementById('response').style.display = "block"
                console.log(document.getElementById('close-btn'))
                document.getElementById('close-btn').addEventListener('click', (e) => {
                    document.getElementById('response').style.display = "none"
                    window.location.reload()
                })                
            }, function (error) {
                console.log('FAILED...', error);                
            });
    });
}