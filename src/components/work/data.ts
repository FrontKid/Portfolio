//assets
import shelter from '../../assets/shelter.png'
import nothing from '../../assets/portfolioNothing.png';
import portfolioTodo from '../../assets/portfolioTodo.png';
import portfolioGoodsShop from '../../assets/portfolioGoodsShop.png';
import colorized from '../../assets/colorized.jpg'
import aim from '../../assets/aim-training.jpg'

//types
import { IProjectNav, IProjectsData } from '../../features/works/types'



export const projectsData: IProjectsData[] = [
  {
    id: 0,
    image: shelter,
    title: 'Shelter',
    category: 'web',
    gitHub: 'https://github.com/FrontKid/shelter',
    demo: 'https://rolling-scopes-school.github.io/frontkid-JSFE2023Q1/shelter/index.html',
  },
  {
    id: 1,
    image: nothing,
    title: 'Nothing',
    category: 'web',
    gitHub: 'https://github.com/FrontKid/layout_landing-page/tree/develop',
    demo: 'https://frontkid.github.io/layout_landing-page/',
  },
  {
    id: 2,
    image: portfolioTodo,
    title: 'Task Master',
    category: 'app',
    gitHub: 'https://github.com/FrontKid/TaskMaster',
    demo: 'https://frontkid.github.io/react_todo-app-with-api/',
  },
  {
    id: 3,
    image: portfolioGoodsShop,
    title: 'Goods Shop',
    category: 'app',
    gitHub: 'https://github.com/fe-jul23-LGTM/catalog',
    demo: 'https://fe-jul23-lgtm.github.io/catalog',
  },
  {
    id: 4,
    image: colorized,
    title: 'Rainbow',
    category: 'game',
    gitHub: 'https://github.com/FrontKid/colorize-board',
    demo: 'https://superb-puffpuff-72d499.netlify.app',
  },
  {
    id: 5,
    image: aim,
    title: 'Aim training',
    category: 'game',
    gitHub: 'https://github.com/FrontKid/aim-helper',
    demo: 'https://kaleidoscopic-dieffenbachia-7c3133.netlify.app/',
  },
]


export const projectsNav: IProjectNav[] = [
  { name: 'all' },
  { name: 'web' },
  { name: 'app' },
  { name: 'game' },
]