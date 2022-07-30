import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from '../HomePage/HomePage.module.css'

function HomePage() {
  return (
    <div className={s.homePage}>
      <h1 className={s.title}>PhoneBook</h1>
      <p>You can save, find or delete some name and phonenumber.</p>
      <p>But the first you must login or register <FontAwesomeIcon icon={faPencil} /></p>
    </div>
  );
}
export default HomePage;
