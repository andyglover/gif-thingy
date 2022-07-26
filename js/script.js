const baseURL = "./gifs"
const gifLinks = document.querySelectorAll('#gifLink');
const gifContainer = document.querySelector('#gifContainer');
const gifForm = document.querySelector('#gifForm');
const gifInput = document.querySelector("#gifInput");

function updateImgSrc(gifName) {
    console.log(gifName);
    gifContainer.setAttribute('src', `${baseURL}/${gifName}.gif`);
}

gifLinks.forEach((gifLink) => {
    gifLink.addEventListener(
        'click', () => {
            updateImgSrc(gifLink.innerText);
        }
    );
});

gifForm.addEventListener('submit',(e) => {
    e.preventDefault();
    updateImgSrc(gifInput.value);
});