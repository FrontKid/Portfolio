import lampStore from '../../assets/portfolioLamp.jpg'
import todoList from '../../assets/portfolioTodo.jpg'
import pizza from '../../assets/portfolioPizza.jpg'

type TProjectsData = {
  id: number,
  image: string,
  title: string,
  category: string,
  gitHub: string,
  demo: string
}

export const projectsData: TProjectsData[] = [
  {
    id: 0,
    image: lampStore,
    title: 'Lamp store',
    category: 'web',
    gitHub: 'https://github.com/FrontKid/lamp',
    demo: 'https://effulgent-cucurucho-a5b736.netlify.app/index.html',
  },
  {
    id: 1,
    image: todoList,
    title: 'Todo',
    category: 'app',
    gitHub: 'https://github.com/FrontKid/react-todo',
    demo: 'https://glittering-cuchufli-4e439d.netlify.app/',
  },
  {
    id: 2,
    image: pizza,
    title: 'Pizza',
    category: 'app',
    gitHub: '',
    demo: '',
  },
]


export const projectsNav: { name: string }[] = [
  { name: 'all' },
  { name: 'web' },
  { name: 'app' },
]