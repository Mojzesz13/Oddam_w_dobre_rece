const foundations = [
    {
        _id:"1",
        name: "fundacja 1",
        mission:"misja 1",
        items: "item1, item2"
    },
    {
        _id:"2",
        name: "fundacja 2",
        mission:"misja 2",
        items: "item1, item1, item2"
    },
    {
        _id:"3",
        name: "fundacja 3",
        mission:"misja 3",
        items: "item1, item2, item1, item2"
    },
    {
        _id:"4",
        name: "fundacja 4",
        mission:"misja 4",
        items: "item1, item2,item1, item2, item1, item2"
    },
    {
        _id:"5",
        name: "fundacja 5",
        mission:"misja 5",
        items: "item1, item2"
    },
    {
        _id:"6",
        name: "fundacja 6",
        mission:"misja 6",
        items: "item1, item1, item2"
    },
    {
        _id:"7",
        name: "fundacja 7",
        mission:"misja 7",
        items: "item1, item2, item1, item2"
    },
    {
        _id:"8",
        name: "fundacja 8",
        mission:"misja 8",
        items: "item1, item2,item1, item2, item1, item2"
    },
];

export function getFundations() {
    return foundations;
}
export function getFundation(id) {
    return foundations.find(f => f._id === id);
}

// export function saveFoundation(foundation) {
//     let foundationInDb = foundations.find(f => f._id === foundation._id) || {};
//     foundationInDb.name = foundation.name;
//     foundationInDb.mission = foundation.mission;
//     foundationInDb.items = foundation.items;
//
// }