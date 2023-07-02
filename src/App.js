import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/page/MainPage';
import NotFound from './components/page/NotFound';
import LoginPage from './components/page/LoginPage';
import SignUpPage from './components/page/SignUpPage';
import Header from './components/page/Header';
import MyPage from './components/page/MyPage/MyPage';
import ProblemPage from './components/page/ProblemPage';
import LogoutPage from './components/page/LogoutPage';
import PostProblemPage from './components/page/PostProblemPage';


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/sign-up' element={<SignUpPage></SignUpPage>}></Route>
        <Route path='/my-page' element={<MyPage></MyPage>}></Route>
        <Route path='/problem' element={<ProblemPage></ProblemPage>}></Route>
        <Route path='/logout' element={<LogoutPage></LogoutPage>}></Route>
        <Route path='/post/problem' element={<PostProblemPage></PostProblemPage>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
