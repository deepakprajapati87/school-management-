import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { Contact } from './components/pages/Contact';
import { Sidebar } from './components/sidebar/sidebar';
import { Header } from './components/Header/Header';
import { Students } from './components/pages/students';
import { Parents } from './components/pages/Parents';
import { Teacher } from './components/pages/Teacher';
import { Dashboard } from './components/pages/Admin';
import { AllStudents } from './components/pages/AllStudents';
import { AdmissionForm } from './components/pages/AdmissionForm';
import { Allteachers } from './components/pages/Allteachers';
import { AllParents } from './components/pages/AllParents';

const App = () => {
  return (
    <>
      <div className=''>
        <div className='container-fluid'>
          <div className='row'>
            <BrowserRouter>
              <div className='col-md-2'>
                <Sidebar />
              </div>
              <div className='col-md-10'>
                <Header />
                <div className='left-bg'>
                  <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/admin' element={<Dashboard />} />
                    <Route path='/students' element={<Students />} />
                    <Route path='/parents' element={<Parents />} />teacher
                    <Route path='/teachers' element={<Teacher />} />
                    <Route path='/all-student' element={<AllStudents />} />
                    <Route path='/admission-form' element={<AdmissionForm />} />
                    <Route path='/admission-form' element={<AdmissionForm />} />
                    <Route path='/allteacher' element={<Allteachers/>} />
                    <Route path='/allparents' element={<AllParents/>} />
                    <Route path='/contact' element={<Contact />} />
                  </Routes>
                </div>

              </div>

            </BrowserRouter>
          </div>

        </div>
      </div>



    </>
  )
}
export default App;