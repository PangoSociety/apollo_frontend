import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LoginRoute from '@/modules/educational/presentation/login/LoginRoute.tsx';

function ApolloRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ApolloRouter;
