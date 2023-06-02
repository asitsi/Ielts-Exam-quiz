import './App.css';
import "./pages/page.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Preloader from './components/preloader/Preloader';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = lazy(() => import('./components/navbar/navbar'))
const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Signup = lazy(() => import('./pages/Auth/Signup'));
const QuestionList = lazy(() => import('./components/questionanswer/QuestionList'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const Dashboard = lazy(() => import('./pages/Quiz/Deshboard'));
const VoiceRecorder=lazy(()=>import('./components/audioRecorder/RecordingVoice'));


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Preloader />}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/:list' element={<QuestionList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/voicerecorder' element={<VoiceRecorder/>}/>
          {/* Test */}
          <Route path='/home/:list/quiz' element={<Dashboard />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
