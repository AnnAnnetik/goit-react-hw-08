import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

export const UserMenu = () => {
  const dispetch = useDispatch();
  const onLogout = () => {
    dispetch(logOut());
  };
  const user = useSelector(selectUser);
  return (
    <div>
      <p>W{user}</p>
      <button onClick={onLogout} type="button">
        logout
      </button>
    </div>
  );
};
