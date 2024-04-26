import { AuthNav } from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';

export const AppBar = () => {
  return (
    <div>
      <header>
        <Navigation />
        <AuthNav />
      </header>
    </div>
  );
};
