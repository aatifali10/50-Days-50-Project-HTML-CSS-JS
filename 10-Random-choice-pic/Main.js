const tagsEl = document.getElementById("tags")
const textarea = document.getElementById("textarea")

textarea.focus()

textarea.addEventListener("keyup", (e) =>{
    createTags(e.target.value)

    if(e.key === "Enter"){
        setTimeout(()=>{
            e.target.value = ""
        },10)
        randomSelect()
    }
})

function createTags(input){
    const tags = input.split(",").filter(tag=> tag.trim()!== "").map(tag => tag.trim())
    
    tagsEl.innerHTML=""

    tags.forEach(tag =>{
        const tagEl= document.createElement("span")
        tagEl.classList.add("tag")
        tagEl.innerText=tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect(){
    const times = 30

    const interval = setInterval(() =>{
        const randomTag = picRandomTag()

        highlight(randomTag)

        setTimeout(() =>{
            unHighlight(randomTag)
        }, 100)
    }, 100)

    setTimeout(() =>{
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = picRandomTag()

            highlight(randomTag)
        }, 100)
    }, times * 100)
}

function picRandomTag(){
    const tags = document.querySelectorAll(".tag")
    return tags [Math.floor(Math.random()* tags.length)]
}

function highlight(tag){
    tag.classList.add("highlight")
}

function unHighlight(tag){
    tag.classList.remove("highlight")
}
