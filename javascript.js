const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  ler: ["01-01", "01-02", "01-06"],
  dormi: ["01-04", "01-05"],
  agua: ["01-01", "01-02"],
  chorei: ["1-3", "1-9"],
  estudando: ["1-6", "1-3"],
}

nlwSetup.setData(data)
nlwSetup.load()
