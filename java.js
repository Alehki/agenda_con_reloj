const list = document.getElementById(`list`)
const task = document.getElementById(`task`)
const color = document.getElementById(`color`)
const date = document.getElementById(`date`)

const deleted = document.getElementById(`deleted`)

const setDate = (task, color, date) =>{
    const objecto = {
        id: Math.random(1, 100),
        task,
        color,
        date,
    }

    localStorage.setItem(objecto.id, JSON.stringify(objecto))
    // location.href = `http://127.0.0.1:5500/index.html`
    location.href = `/`
}


const getDate = () =>{
    const keys = Object.keys(localStorage)
    const fragment = document.createDocumentFragment()

    for(const key of keys){
        const individuo = JSON.parse(localStorage.getItem(key))
        const li = document.createElement(`LI`)
        const msj = document.createElement(`SPAN`)
        const reloj = document.createElement(`SPAN`)
        const deleted = document.createElement(`I`)

        li.classList.add(`item`)
        msj.classList.add(`msj`)
        reloj.classList.add(`reloj`)
        reloj.setAttribute(`id`, individuo.id)

        msj.textContent = individuo.task

        // Deberiamos meter el contenido en otro lugar tal vez.. Por el bucle, no
        // parece tan descabellado ya que posterior a esto tendriamos todas las etiquetas faltando
        // definir solo el contenido.
        // reloj.textContent = individuo.date
        // deleted.innerHTML = `<i class="far fa-trash-alt"></i>`

        deleted.classList.add("far")
        deleted.classList.add("fa-trash-alt")

        li.appendChild(msj)
        li.appendChild(reloj)
        li.appendChild(deleted)
        li.style.backgroundColor = individuo.color

        fragment.appendChild(li)


    }

    list.appendChild(fragment)

}


deleted.addEventListener(`click`, ()=>{
    const signo = new Date(date.value) - new Date()

    if(task.value!=`` && signo>0){
        setDate(task.value, color.value, date.value)
    }else if(task.value==``){
        text.textContent = `La tarea es oblogatoria`
        setTimeout(() => {
            text.textContent = ``
        }, 1000);
    }else if(date.value==``){
        const text = document.getElementById(`text`)
        text.textContent = `La fecha es oblogatoria`
        setTimeout(() => {
            text.textContent = ``
        }, 1000);
    }else if(signo<=0){
        const text = document.getElementById(`text`)
        text.textContent = `La fecha establecida carece de sentido`
        setTimeout(() => {
            text.textContent = ``
        }, 1000);
    } 

})


const horas = () =>{
    const keys = Object.keys(localStorage)
    
    for(const key of keys){
        
        const objeto = JSON.parse(localStorage.getItem(key))
        const relojList = document.querySelectorAll(`.reloj`)
        
        for(const f of relojList){
            if(f.id==key){
                cb(objeto.date, f)
            }
        }
    }
}





getDate()

horas()


list.addEventListener(`click`, (e)=>{
    const deletedList = document.querySelectorAll(`.far`)
        
    for(const f of deletedList){
        if(e.target==f){
            f.parentElement.parentElement.removeChild(f.parentElement)
            localStorage.removeItem(f.parentElement.children[1].id)
        }}
})