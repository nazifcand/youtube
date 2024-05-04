import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainLayout = () => {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
