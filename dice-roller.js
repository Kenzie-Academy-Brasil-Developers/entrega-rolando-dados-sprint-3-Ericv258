// caso seja necessário tem como ajustar quantos lados tem
//  o dado devido as 2 contants max e min
const max = 6
const min = 1
let graphItemHeight = 2

function findIndexArr(arr, x){
    if(arr.length==false){
        return false
    }
    for(let i=0;i<arr.length;i++){
        const index = arr[i].indexOf(x)                    
        if(index == 0){            
            return i
        }            
    }
    return false
} 

let count = []
function diceRolls(n){
    for(let i=0;i<n;i++){
        const dice1 = Math.floor(Math.random()*(max-min+1)+min)
        const dice2 = Math.floor(Math.random()*(max-min+1)+min)        
        const diceResult = dice1 + dice2             
        if(count.length==false){
            count.push([diceResult,1])            
        } else if(findIndexArr(count, diceResult)===0){                        
            count[0][1] += 1 
        } else if(findIndexArr(count, diceResult)==false){
            count.push([diceResult,1])
        } else{            
            count[findIndexArr(count, diceResult)][1] += 1           
        }        
    }        
} diceRolls(1000)

const rollTexto = document.getElementById("rollTexto")

for(let i=0;i<count.length;i++){
    const diceResultText = document.createElement("p")
    diceResultText.innerText = count[i].join(":") + " --> equivale a " +i + " no grafico"
    rollTexto.appendChild(diceResultText)
    
}

const boxGrafico = document.getElementById("box-grafico")


function findGraphItemWidth(arr){
    for(let i=0;i<arr.length;i++){
        const divGraphItems = document.createElement("div")
        divGraphItems.id = "divGraphItem"+i
        boxGrafico.appendChild(divGraphItems)        
        const currentDivGraphItems = document.getElementById("divGraphItem"+i)        
        divGraphItems.style.backgroundColor = "yellow"       
        divGraphItems.style.height = (arr[i][1]*2)+"px"
        divGraphItems.style.width = "20px"  
        divGraphItems.style.display = "flex"
        divGraphItems.style.flexFlow = "collum wrap"
        divGraphItems.style.justifyContent = "center"
        divGraphItems.style.alignItems = "flex-end"      
        const legendaGraph = document.createElement("p")
        legendaGraph.innerText = i        
        legendaGraph.style.width = "fit-content"        
        currentDivGraphItems.appendChild(legendaGraph)
    }      
}  findGraphItemWidth(count)