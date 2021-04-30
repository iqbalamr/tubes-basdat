import Home from'./components/pages/Home/Home';
import ShowBook from './components/pages/ShowBook/ShowBook';
import Borrow from './components/pages/Borrow/Borrow';
import BorrowForm from './components/pages/BorrowCard/BorrowForm';
import ReturnForm from './components/pages/ReturnCard/ReturnForm';
import ManageBook from './components/pages/ManageBook/ManageBook';
import OurTeam from './components/pages/OurTeam/OurTeam';

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/showbook',
    component: ShowBook,
  },
  {
    path: '/borrow',
    component: Borrow,
    routes: [
      {
        path:'/borrow/borrow-form',
        component: BorrowForm,
      },
      {
        path: '/borrow/return-form',
        component: ReturnForm,
      }
    ]
  },
  {
    path: '/manage-book',
    component: ManageBook,
  },
  {
    path: '/our-team',
    component: OurTeam,
  },
];

export default routes;