import { ClientComments, EatOption, TopMenu, ServiceList } from '../models/fav';

export const TOP_MENU: TopMenu[] = [
  {imageSrc: 'assets/carousal/main-1.png', id: 1, alt: 'test1', footersrc: 'assets/svg/Group1390.svg'},
  {imageSrc: 'assets/carousal/main-1.png', id: 2, alt: 'test1', footersrc: 'assets/svg/Group1390.svg'},
  {imageSrc: 'assets/carousal/main-1.png', id: 3, alt: 'test1', footersrc: 'assets/svg/Group1390.svg'},
  {imageSrc: 'assets/carousal/main-1.png', id: 4, alt: 'test1', footersrc: 'assets/svg/Group1390.svg'},
];

export const EAT_OPTION: EatOption[] =  [
  {src: 'Group4', name: 'Burger', isSelected: false },
  {src: 'Group 1413', name: 'Pizza', isSelected: false },
  {src: 'fries', name: 'Fries', isSelected: true },
  {src: 'Group 1403', name: 'Cupcake', isSelected: false },
  {src: 'Group2', name: 'Sandwitch', isSelected: false },
  {src: 'Group3', name: 'Spaghetti', isSelected: false }
];

export const SER_LIST: ServiceList[] = [
  {src: 'Group 1415', name: 'Free shipping on first order', desc: 'Sign up for updates and get free shipping'    },
  {src: 'Group 1416', name: '30 minutes delivery', desc: 'Everything you order will be quickly delivered to your door.'  },
  {src: 'Group 1417', name: 'Best quality guarantee', desc: 'Sign up for updates and get free shipping'  },
  {src: 'Group 1418', name: 'Variety of dishes', desc: 'In our menu you’ll find a wide variety of dishes, desserts, and drinks.'  }
];

export const CMTS_LIST: ClientComments[] = [
  {clientName: 'Nina Margaret', company: 'Abc Company', position: 'CEO', desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'},
];
