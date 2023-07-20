const filterCalc = (position, num, gender) => {
    if (num === 3 || num === 4) {
        if (gender === 'M') {
            return [position[num - 1].m]
        } else if (gender === 'W')
            return [position[num - 1].w]
    }
    return position.filter(e => e.value === num)
}
const filterCalcLite = (position, num) => {
    return position.filter(e => e.value === num)
}


export default filterCalcLite && filterCalc