import {fetchData} from "./service.js"

(async function createWidget() {
  const data = await fetchData()
  let celsius = getRelevantData(data)
  createHtml(celsius)
}())

function getRelevantData(data) {
  const tempParameter = data.timeSeries[0].parameters.filter( obj => obj.name == "t" )
  const celsius = tempParameter[0].values[0]
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