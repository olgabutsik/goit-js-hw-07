import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

function createMarkup(arr) {
    const galleryArray = arr.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join("");

    return galleryArray
}

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems))


gallery.addEventListener('click', onClickImage);

function onClickImage(e) {
    e.preventDefault()
    if (e.target.nodeName !== 'IMG') {
        return
    }
    const { src } = e.target;
    const instance = basicLightbox.create(
      `
	<img
      class="gallery__image"
      src="${e.target.dataset.source}"
    />
`,
      {
        
        onShow: (instance) => {document.addEventListener("keydown", onClickEscape)},
        
        onClose: (instance) => {document.removeEventListener("keydown", onClickEscape)},
      }
    )

    instance.show();
    
    function onClickEscape(e) {
        if (e.code === 'Escape') {
            instance.close();
        }
    }
}


