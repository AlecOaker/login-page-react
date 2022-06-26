import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Context } from '.';
import AccRegister from './components/AccRegister';
import AppRouter from './components/AppRouter';
import Loader from './components/Loader';
import {CREATE_ROUTE} from './components/utils/consts'

const App = () => {
	const {auth} = useContext(Context)
	const [user, loading, error] = useAuthState(auth);
	
	if (loading) {
		return <Loader/>
	}

  return (
      
    <BrowserRouter>
		  <AppRouter />
		  {/* <Routes>
			  <Route path={CREATE_ROUTE} element={<AccRegister/>}/>
		  </Routes> */}
    </BrowserRouter>
	
  );
}

export default App;
