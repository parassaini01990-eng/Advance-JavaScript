let country = document.getElementById("country")
let center = document.querySelector(".center")
let second = document.querySelector(".second")

function generateData(key, value) {
  let div = document.createElement("div")

  let keyDiv = document.createElement("div")
  keyDiv.innerHTML = key
  
  let ValueDiv = document.createElement("div")
  if (key == "flags") {
    let img = document.createElement("img")
    img.src = value
    ValueDiv.appendChild(img)
    ValueDiv.innerHTML = value
  }
  else if (key === "maps") {
    let a = document.createElement("a")
    a.href = value
    a.innerHTML = "click to open Google Map"

    div.appendChild(keyDiv)
    DataViewv.appendChild(ValueDiv)
    second.appendChild(div)
    center.appendChild(second)
  }
  else
    ValueDiv.innerHTML = value
  div.appendChild(keyDiv)
  div.appendChild(ValueDiv)
  second.appendChild(div)
  center.appendChild(second)
}
function getAPIData() {
  let request = new XMLHttpRequest()//to create XMLHttpRequest

  let name = "bharat"
  if (country.value)
    name = country.value

  request.open("get", "https://restcountries.com/v3.1/name/bharat")//
  request.send()//to send request
  request.addEventListener("load", () => {
    center.removeChild(second)
    second = document.createElement("div")
    second.classList.add(second)
    center.appendChild(second)
    JSON.parse(request.responseText).forEach(item => {
      console.log(item.name.official)
      console.log(item.capital)
      console.log(item.area)
      console.log(item.continents)
      console.log(item.capital)
      console.log(item.region)
      console.log(item.subregion)
      console.log(item.flags.png)
      console.log(item.currencies)
      console.log(item.independent)
      console.log(item.maps.googleMaps)
      console.log(item.unMember)
      console.log(item.population)
      console.log(item.timezones)
      console.log(item.startOfWeek)
      console.log(item.landlocked)
      console.log(item.languages)
      console.log(item.postalCode)

    })
  }
  )
} getAPIData()