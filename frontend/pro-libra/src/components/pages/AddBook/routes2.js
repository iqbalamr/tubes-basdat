import BorrowerList from '../BorrowerList/BorrowerList';
import LibraryFines from '../LibraryFines/LibraryFines';
import RemoveBook from '../RemoveBook/RemoveBook';

const routes2 = [
  {
    path: '/remove-book',
    component: RemoveBook,
  },
  {
    path: '/borrower-list',
    component: BorrowerList,
  },
  {
    path: '/library-fines',
    component: LibraryFines,
  },
]

export default routes2;