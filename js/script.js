import { Modal } from "./modal.js"
import { alertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js"

//variávies
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHightIsNotANumber) {
    alertError.open()
    return
  }

  alertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)

  resetInputValues()
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`
  Modal.message.innerText = message
  Modal.open()
}

function resetInputValues() {
  inputHeight.value = ""
  inputWeight.value = ""
}

inputHeight.oninput = () => alertError.close()
inputWeight.oninput = () => alertError.close()
