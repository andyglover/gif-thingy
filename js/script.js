let baseurl = "http://www.andyglover.dev/gifs"
let gifname;

const gifLink = document.querySelector('#gifLink');
const gifContainer = document.querySelector('#gifContainer');

function updateImgSrc(baseurl,gifname) {
    gifContainer.setAttribute('src', `${baseurl}/${gifname}.gif`);
}

gifLink.addEventListener('click', updateImgSrc(baseurl,gifname));