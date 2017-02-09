export const generateId = () => Math.floor(Math.random*100000);

export const findById = (list, id) => list.find(item => item.id === id);

export const toggleEdu = (todo) => ({...todo, participate: !todo.participate});

export const updateEdu = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id);
  return {
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex+1)
  }
}

export const filterTodoList = (list, searchText) => {
    var filteredList = list;
    var searchText = searchText.toLowerCase();
    //console.log(stringLo);
    var filteredList= filteredList.filter((item) => {
    //const itemNameLo = item.name.toLowerCase();
    //console.log('itemName:', itemNameLo)
            const itemName = item.name.toLowerCase();
            return searchText.length=== 0 || itemName.indexOf(searchText)> -1
        }
    )
    return filteredList;
}
