const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Ja foi registrado")
    return
  }
  alert("Adicionado com sucesso")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("pepe@", JSON.stringify(nlwSetup.data))
  localStorage.getItem("pepe@")
  JSON.parse(localStorage.getItem("pepe@"))
}
const data = JSON.parse(localStorage.getItem("pepe@")) || {}
nlwSetup.setData(data)
nlwSetup.load()
