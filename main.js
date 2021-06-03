//CHANGE CODE BELOW
let apiUrl = './YourTranslation.json';

async function getJson(url) {
  return await fetch(url).then(response => response.json()).then(json => json);
}

let container1 = document.getElementById('container-1')
let container2 = document.getElementById('container-2')
let container3 = document.getElementById('container-3')
let container4 = document.getElementById('container-4')
let container5 = document.getElementById('container-5')
let container6 = document.getElementById('container-6')
let container7 = document.getElementById('container-7')
let container8 = document.getElementById('container-8')
let container9 = document.getElementById('container-9')
let container10 = document.getElementById('container-10')
let container11 = document.getElementById('container-11')
let container12 = document.getElementById('container-12')
let container13 = document.getElementById('container-13')
let container14 = document.getElementById('container-14')
let container15 = document.getElementById('container-15')

function main(collection) {
  getJson(collection).then(data => {
    console.log("Json data", data);

    for (let i = 0; i < 15; i++) {
      let div = document.createElement('div')
      div.id = `data-container${i+1}`

      let listContainer = document.createElement('ul')
      listContainer.setAttribute("class", "list-container")
      let newArr = Object.values(data)
      let h3 = document.createElement('h3')
      let titles = newArr[i].title
      h3.innerHTML = titles
      div.appendChild(h3)
      let questions = newArr[i].questions

      questions.forEach((props) => {
        let li = document.createElement('li')
        li.innerHTML = props
        listContainer.appendChild(li)
        div.appendChild(listContainer)
        document.body.appendChild(div)
      })
    }

    let dataContainer1 = document.getElementById("data-container1")
    let dataContainer2 = document.getElementById("data-container2")
    let dataContainer3 = document.getElementById("data-container3")
    let dataContainer4 = document.getElementById("data-container4")
    let dataContainer5 = document.getElementById("data-container5")
    let dataContainer6 = document.getElementById("data-container6")
    let dataContainer7 = document.getElementById("data-container7")
    let dataContainer8 = document.getElementById("data-container8")
    let dataContainer9 = document.getElementById("data-container9")
    let dataContainer10 = document.getElementById("data-container10")
    let dataContainer11 = document.getElementById("data-container11")
    let dataContainer12 = document.getElementById("data-container12")
    let dataContainer13 = document.getElementById("data-container13")
    let dataContainer14 = document.getElementById("data-container14")
    let dataContainer15 = document.getElementById("data-container15")

//CHANGE CODE HERE
//example.appendChild(example)
   

    return data;
  });
}

main(apiUrl);