// need findbyid
export function findById(array, id){
    for (let item of array)
        if (item.id === id)
            return item;
}

// export function findById(array, id){
//     return array.find(item => item.idd === id);
// }