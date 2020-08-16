import {fetchData} from "./service.js"

(async function createWidget() {
  const data = await fetchData()
  let celsius = getRelevantData(data)
  createHtml(celsius)
}())

function getRelevantData(data) {
  const celsius = data.timeSeries[1].parameters[1].values[0]
  return celsius
}

function createHtml(data) {
  let html = `
            <div class="frame">
              <span>Idag är det:</span>
              <div id="today">${data}°c</div>
              <div id="week">
                  <div></div>
              </div>
            </div>`
  let a = document.getElementById("weatherWidget")
  a.innerHTML = html
}