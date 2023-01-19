const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  ler: ["01-01", "01-02", "01-06"],
  dormi: ["01-04", "01-05"],
  agua: ["01-01", "01-02"],
  chorei: ["01-03", "01-09"],
  estudando: ["01-06", "01-03"],
}

nlwSetup.setData(data)
nlwSetup.load()
