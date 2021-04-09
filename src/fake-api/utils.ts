export const generateId = () => {
  let ids: number[] = Object.entries(localStorage).map(entry => {
    let id: number = Number(JSON.parse(entry[0]));
    return id
  })
  
  const sortedIds: number[] = ids.sort((n1,n2) => n1 - n2);
  const availableId: string = (sortedIds.pop() + 1).toString()
  console.log('availableId')
  
  return availableId
}

export const populateLocalStorage = () => {
  const initialTodos = [
    {
      id: '1',
      name: 'Todo Name',
      description: 'Todo Description',
      status: 'Ready',
      urgent: true,
      targetCompletionDate: '2023-01-12',
      completionDate: null,
      active: false
    },
    {
      id: '2',
      name: 'Todo Form',
      description: 'Make a reusable form for editing and adding items',
      status: 'Done',
      urgent: false,
      targetCompletionDate: '2021-03-30',
      completionDate: '2021-03-21',
      active: false
    },
    {
      id: '3',
      name: 'Database',
      description: 'Hook up a mini database to this app',
      status: 'Ready',
      urgent: true,
      targetCompletionDate: '2021-04-07',
      completionDate: null,
      active: false
    } 
  ]
  for (const t of initialTodos) {
    window.localStorage.setItem(t.id, JSON.stringify(t));

  }
}