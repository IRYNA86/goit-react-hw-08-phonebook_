import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'components/store/auth';
import s from '../UserMenu/UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <div className={s.userMenu}>
      <p className={s.titleUserMenu}>{name}</p>
      <button
        className={s.buttonUserMenu}
        onClick={() => dispatch(authOperations.logOut())}
        type="button"
      >
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
