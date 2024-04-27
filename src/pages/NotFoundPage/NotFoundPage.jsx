import css from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className={css.notFoundContainer}>
      <h1 className={css.title}>404</h1>
      <p className={css.message}>Page not found</p>
      <Link to="/" className={css.homeLink}>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
