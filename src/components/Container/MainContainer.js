import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { MainContainer } from './MainContainer.styled';
import { Header } from 'components/Header/Header';
import 'react-toastify/dist/ReactToastify.css';

export const Container = () => {
  return (
    <div>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
