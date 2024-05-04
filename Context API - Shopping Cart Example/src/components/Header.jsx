import { Link } from 'react-router-dom';
import CartList from './CartList';

const Header = () => {

  return (
    <header className="fixed top-0 left-0 w-full h-[60px] shadow-md flex items-center bg-slate-200 border-b border-slate-300">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src='https://placehold.co/120x40/aaa/222?text=LOGO' />
        </Link>

        <CartList />
      </div>
    </header>
  );
};

export default Header;
