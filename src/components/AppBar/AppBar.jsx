import { useSelector } from 'react-redux';
import { AuthNav } from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { UserMenu } from '../UserMenu/UserMenu';

export const AppBar = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);
  return (
    <div>
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </div>
  );
};
