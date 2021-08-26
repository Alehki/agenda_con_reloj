const getFecha = (fecha) =>{
    const time = (new Date(fecha) - new Date() + 1000) / 1000

    const seconds = (`0` + Math.floor(time % 60)).slice(-2)
    const minutes = Math.floor((time / 60) % 60)
    const hours = Math.floor((time / 3600) % 24)
    const days = Math.floor(time / (3600 * 24))

    return timer = {
        time,
        days,
        hours,
        minutes,
        seconds
    }
}

const cb = (fecha, f) =>{
    const tiempo = setInterval(() => {
        const datos = getFecha(fecha)
        f.innerHTML = `${datos.days}D ${datos.hours}H - ${datos.minutes}Min - ${datos.seconds}Seg`
        if(datos.time <= 60){
            f.classList.add(`reloj__seconds`)
        }
        if(datos.time<=1){
            clearInterval(tiempo)
            f.innerHTML = `Tiempo cumplido`
        } 
    }, 1000);
}
