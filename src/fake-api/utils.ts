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
      name: 'Watch Cat Videos',
      description: 'Need to watch several cat videos on YouTube later today',
      status: 'Ready',
      urgent: true,
      targetCompletionDate: '2023-04-09',
      completionDate: null,
      active: false
    },
    {
      id: '2',
      name: 'Study Microbiology',
      description: 'Complete OnlineMedEd Microbiology Lessons',
      status: 'Done',
      urgent: false,
      targetCompletionDate: '2021-03-30',
      completionDate: '2021-03-21',
      active: false
    },
    {
      id: '3',
      name: 'Coaching',
      description: 'Sign up for OnlineMeded Coaching',
      status: 'Ready',
      urgent: true,
      targetCompletionDate: '2021-04-15',
      completionDate: null,
      active: false
    },
    {
      id: '4',
      name: 'Drink Coffee',
      description: "It's always time to drink more coffee",
      status: 'Ready',
      urgent: true,
      targetCompletionDate: '2021-04-09',
      completionDate: null,
      active: false
    }  
  ]
  for (const t of initialTodos) {
    window.localStorage.setItem(t.id, JSON.stringify(t));

  }
}