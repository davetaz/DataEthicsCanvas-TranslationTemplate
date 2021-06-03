//CHANGE CODE BELOW 
let apiUrl = './theNameOfTheJsonFile.json';

async function getJson(url) {
  return await fetch(url).then(response => response.json()).then(json => json);
}

const bubble = ["NA"]

for(let i = 1; i<16; i++){
  bubble.push(document.getElementById(`container-${i}`))
}

function main(collection) {
  getJson(collection).then(data => {

    for (let i = 0; i < 15; i++) {
      let div = document.createElement('div')
      div.id = `data-container${i+1}`

      let listContainer = document.createElement('ul')
      listContainer.setAttribute("class", "list-container")
//Storing Data
      let newArr = Object.values(data)
//Printing Titles
      let h3 = document.createElement('h3')
      let titles = newArr[i].title
      h3.innerHTML = titles
      div.appendChild(h3)
//Printing Questions
      let questions = newArr[i].questions
      questions.map((props) => {
        let li = document.createElement('li')
        li.innerHTML = props
        listContainer.appendChild(li)
        div.appendChild(listContainer)
        document.body.appendChild(div)
      })
    }

    let dataContainer = ["NA"]

    for(let i = 1; i<16; i++){
      dataContainer.push(document.getElementById(`data-container${i}`))
    }
   

//CHANGE CODE HERE
    // bubble[BUBBLE POSITION].appendChild(dataContainer[CONTAINER POSITION IN YOUR CANVAS JSON])
   

    return data;
  });
}

main(apiUrl);