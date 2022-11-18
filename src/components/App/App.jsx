import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('../../pages/Home/Home'));
const Login = lazy(() => import('../../pages/Login/Login'));
const Register = lazy(() => import('../../pages/Register/Register'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />}>
//           <Route path="mission" element={<Mission />} />
//           <Route path="team" element={<Team />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         <Route path="products" element={<Products />} />
//         <Route path="products/:id" element={<ProductDetails />} />
//       </Route>
//     </Routes>
//   );
// };