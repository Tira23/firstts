function rand (min = 0, max = 100):number {
    if(min > max){
        [max, min] = [min, max]
    }
    const current = Math.round(Math.random() * max)
    return (current >= min && current <= max) ? current : rand(min,max)
}

export default rand
