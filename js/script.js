const baseurl = "http://www.andyglover.dev/gifs"
const gifLink = document.querySelector('#gifLink');
const gifname = gifLink.innerText;
const gifContainer = document.querySelector('#gifContainer');

function updateImgSrc(baseurl,gifname) {
    gifContainer.setAttribute('src', `${baseurl}/${gifname}.gif`);
}

gifLink.addEventListener('click', updateImgSrc(baseurl,gifname));