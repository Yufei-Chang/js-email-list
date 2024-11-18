const mailElem = document.getElementById("user-mail");
const buttonElem = document.getElementById("button");

let mails = () => {
for (let i = 0; i < 10; i++) {
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {
        mails = `<li>${resp.data.response}</li>`;
        mailElem.innerHTML += mails;
        console.log(mails)
    })
};
}

buttonElem.addEventListener("click", mails);