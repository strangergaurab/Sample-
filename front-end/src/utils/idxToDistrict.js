export const arrDistrict = [
    'chitwan',
    'pokhara',
    'kathmandu',
    'birjung',
    'lalitpur',
    'bhaktpur'
]

export const continentToIdx = (district) => {
    return arrDistrict.findIndex((cont) => cont.toLowerCase() === district.toLowerCase())

}

export const idxToContinent = (idx) => {
    return (arrDistrict.filter((_, index) => index === Number(idx)))[0]
}