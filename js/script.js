const baseURL = "./gifs"
const gifLinks = document.querySelectorAll('#gifLink');
const gifContainer = document.querySelector('#gifContainer');


function updateImgSrc() {
    const gifname = this.innerText;
    gifContainer.setAttribute('src', `${baseURL}/${gifname}.gif`);
}

gifLinks.forEach((gifLink) => {
    gifLink.addEventListener('click', updateImgSrc);
});