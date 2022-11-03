export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector("#btnClose"),

  open() {
    Modal.wrapper.classList.add("open")
  },
  close() {
    Modal.wrapper.classList.remove("open")
  },
}

modalBtnClose.onclick = () => {
  Modal.close()
}

window.addEventListener("keydown", handleKeydown)

function handleKeydown(event) {
  if (event.key === "Escape") {
    Modal.close()
  }
}
