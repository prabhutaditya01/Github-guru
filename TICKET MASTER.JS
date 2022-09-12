console.log('travel advento');
let login = document.getElementById('loginpopup');
let popupbutton = document.getElementById("loginhead");
let crossbutton = document.getElementById("redcross");
let wholebody = document.querySelector('body')

function popup() {
        if (login.style.display = 'none') {
                login.style.display = 'inline-block';
        }
        else {
                login.style.display = 'none';
        }
}
setTimeout(popup, 7000);
crossbutton.addEventListener('click', function () {
        login.style.display = 'none';
});
popupbutton.addEventListener('click', function () {
        login.style.display = 'inline-block';
});


