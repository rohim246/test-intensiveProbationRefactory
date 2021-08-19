const json = require('./data.json')

const findItemsInMeetingRoom = () => {
    const result = json.filter((data) => {
        return data.placement.name === 'Meeting Room'
    })
    return result
}
console.log(findItemsInMeetingRoom());


const findElectronicsDevices = () => {
    const result = json.filter((data) => {
        return data.type === 'electronic'
    })
    return result
}
console.log(findElectronicsDevices());


const findAllFurniture = () => {
    const result = json.filter((data) => {
        return data.type === 'furniture'
    })
    return result
}
console.log(findAllFurniture());


const findItemsWithBrownColor = () => {
    const result = json.filter((data) => {
        return data.tags.includes('brown')
    })
    return result
}
console.log(findItemsWithBrownColor());


const findItemsWerePurchasedOn16Januari2020 = () => {
    const result = json.filter((data) => {
        const purchasedDate = data.purchased_at
        const changeDate = new Date(purchasedDate * 1000)
        return changeDate.toDateString().includes('Jan 16 2020')
    })
    return result
}
console.log(findItemsWerePurchasedOn16Januari2020());