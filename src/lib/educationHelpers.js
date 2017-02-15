export const generateId = () => Math.floor(Math.random*100000);

export const findById = (list, id) => list.find(item => item.id === id);

export const toggleEdu = (edu) => ({...edu, participate: !edu.participate});

export const updateEdu = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id);
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex+1)
    ]
}

export const removeEdu = (list, id) => {
    const removeIndex = list.findIndex(item => item.id === id)
    return [
        ...list.slice(0, removeIndex),
        ...list.slice(removeIndex+1)
    ]
}

export const filterTodoList = (list, searchText) => {
    var filteredList = list;
    var searchText = searchText.toLowerCase();
    var filteredList= filteredList.filter((item) => {
            const itemName = item.name.toLowerCase();
            return searchText.length=== 0 || itemName.indexOf(searchText)> -1
        }
    )
    return filteredList;
}
