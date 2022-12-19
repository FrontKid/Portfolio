//assets
import lampStore from '../../assets/portfolioLamp.jpg'
import todoList from '../../assets/portfolioTodo.jpg'
import pizza from '../../assets/portfolioPizza.jpg'

//types
import { IProjectNav, IProjectsData } from '../../features/works/types'



export const projectsData: IProjectsData[] = [
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
    gitHub: 'https://github.com/FrontKid/Pizza',
    demo: 'https://whimsical-creponne-fb9548.netlify.app/',
  },
]


export const projectsNav: IProjectNav[] = [
  { name: 'all' },
  { name: 'web' },
  { name: 'app' },
]