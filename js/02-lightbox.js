
import { galleryItems } from "./gallery-items.js"
// Change code below this line
const gallery = document.querySelector(".gallery")

function createMarkup(arr) {
  const galleryArray = arr
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    })
    .join("")

  return galleryArray
}

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems))

let lightbox = new SimpleLightbox(".gallery a", {
  captionData: "${description}",
  captionPosition: "bottom",
  captionDelay: 250,
})

                                                    
	






