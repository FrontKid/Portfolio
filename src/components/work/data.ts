import lampStore from '../../assets/portfolioLamp.jpg'
import todoList from '../../assets/portfolioTodo.jpg'
import pizza from '../../assets/portfolioPizza.jpg'

type TProjectsData = {
  id: number,
  image: string,
  title: string,
  category: string,
}

export const projectsData: TProjectsData[] = [
  {
    id: 0,
    image: lampStore,
    title: 'Lamp store',
    category: 'web'
  },
  {
    id: 1,
    image: todoList,
    title: 'Todo',
    category: 'app'
  },
  {
    id: 2,
    image: pizza,
    title: 'Pizza',
    category: 'app'
  },
]


export const projectsNav: { name: string }[] = [
  { name: 'all' },
  { name: 'web' },
  { name: 'app' },
]