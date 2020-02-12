function setImage(id,url){
    const img = document.getElementById(id)
    img.src = url
}

setImage('image-1','https://api.time.com/wp-content/uploads/2018/06/dinosaurs-jurassic-world-fact-check-3.jpg')
setImage('image-2','https://i2-prod.mirror.co.uk/incoming/article21473970.ece/ALTERNATES/s615/0_Thanatotheristes_low-rez_illustration-by-Julius-Csotonyi.jpg')
setImage('image-3','https://thenypost.files.wordpress.com/2019/12/dinosaur-feature.jpg?quality=80&strip=all&w=618&h=410&crop=1')

function lineThrough(){
    const line = document.querySelector('#arguments li:first-child')
    line.style.textDecoration = 'line-through'
}
lineThrough()

function removeLine(){
    const list = document.querySelector('#arguments')
    list.removeChild(list.lastElementChild)
}
removeLine()
removeLine()

function node(child){
    const list = document.querySelector('#arguments')
    list.appendChild(child)
}

const x = document.createElement('img')
x.src = 'https://thumbs-prod.si-cdn.com/xOGhBOJwR-V_h7S7BzDaTaAuk9g=/fit-in/1600x0/https://public-media.si-cdn.com/filer/c5/bb/c5bb28e9-efd8-45b7-8e9c-118d890bfe81/patagotitan.jpg'
node(x)

function height(image){
    image.height = '30'
}
const shrink = document.querySelector('#image-1')
height(shrink)

function makeInvisible(element){
    element.className = 'invisible'
}
makeInvisible(x)

function changeText(font,id){
    const text = document.getElementById(id)
    text.style.fontSize = font
}
changeText('300px','heading')

function newLine(text){
    const line = document.createElement('li')
    line.innerText = text
    return line
}
const newLi = newLine('new line')
node(newLi)

function changeHeader(size,text){
    const newHead = document.createElement('h'+size)
    newHead.innerText = text
    return newHead
}
const newLi2 = changeHeader('1','final line!')
node(newLi2)