const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  ler: ["01-01", "01-02", "01-06"],
  dormi: ["01-04", "01-05"],
  agua: ["01-01", "01-02"],
}

nlwSetup.setData(data)
nlwSetup.load()
