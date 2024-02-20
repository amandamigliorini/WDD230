const popup = document.querySelector('.pop-up');

const weekDay = new Date().getDay();


if (weekDay == 1 || weekDay == 2 || weekDay == 3){
    const button = document.createElement('button');
    button.textContent = '❌';
    const img = document.createElement('img');
    img.setAttribute('src', 'images/networking.webp');
    img.setAttribute('alt', 'Meet and Greet Image');
    const invitation = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = `Chamber of Commerces's Meet and Greet. Wednesday at 7:00 p.m.`;
    const callToAction = document.createElement('h3')
    callToAction.innerHTML = `<a href='https://wa.me/+5500000000'>Confirm Your Presence Here!</a>`
    popup.appendChild(button);
    popup.appendChild(img);
    invitation.appendChild(title);
    invitation.appendChild(callToAction);
    popup.appendChild(invitation);
    button.addEventListener('click', () =>{
        popup.classList.add('closed-popup')
    })
}