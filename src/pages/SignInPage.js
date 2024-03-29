import { ToastContainer, toast } from 'react-toastify';
import '../style.css';
import Navbar from '../components/Navbar';
import ErrorFooter from '../components/ErrorFooter';
import Footer from '../components/Footer';
import SignInForm from '../components/SignInForm';


function SignInPage() {

  return (

      <div className="sign-in-block-main">
        <Navbar />

        <SignInForm />

      </div>

  );
}

export default SignInPage;
