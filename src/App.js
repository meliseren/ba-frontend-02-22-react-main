import { BrowserRouter, Route, Routes } from "react-router-dom";

//style
import './App.scss';

//components
import Header from "./component/shared/header/Header";
import StudentProvider from './context/student/StudentContext';
import StudentFormView from './view/app/student-form/StudentFormView';
import LoginView from './view/auth/login/LoginView';
import StudentList from "./component/app/student/student-list/StudentList";
import NotFoundView from "./view/shared/not-found/NotFoundView";
import SignupView from "./view/auth/sign-up/SignupView";
import AuthProvider from "./context/auth/AuthContext";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <StudentProvider>
          <div className="app">
            <Header
              headerTitle="Student Manager"
              navbarItems={["Home", "Profile", "Logout"]}
            />
            <Routes>
              <Route path="/" element={<StudentList />} />
              <Route path="/login" element={<LoginView />} />
              <Route path="/sign-up" element={<SignupView />} />
              <Route path="/add-student" element={<StudentFormView />} />
              <Route path="*" element={<NotFoundView />} />
            </Routes>
          </div>
        </StudentProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;