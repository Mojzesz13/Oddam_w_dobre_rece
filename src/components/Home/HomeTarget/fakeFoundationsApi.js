

const foundations = [
    {
        _id:"1",
        name: "fundacja 1",
        mission:"misja 1",
        items: "I1, I2, "
    },
    {
        _id:"2",
        name: "fundacja 2",
        mission:"misja 2",
        items: "I1, I1, I2,  "
    },
    {
        _id:"3",
        name: "fundacja 3",
        mission:"misja 3",
        items: "I1, I2,I1, I2,  "
    },
    {
        _id:"4",
        name: "fundacja 4",
        mission:"misja 4",
        items: "I1, I2,I1, I2, I1, I2,  "
    },
];

export function getFundations() {
    return foundations;
}
export function getFundation(id) {
    return foundations.find(f => f._id === id);
}

export function saveFoundation(foundation) {
    let foundationInDb = foundations.find(f => f._id === foundation._id) || {};
    foundationInDb.name = foundation.name;
    foundationInDb.mission = foundation.mission;
    foundationInDb.items = foundation.items;

}