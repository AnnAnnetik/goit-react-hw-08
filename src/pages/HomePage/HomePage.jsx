import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.home}>
      <h1 className={css.title}>Welcome to Contact Book</h1>
      <p className={css.description}>
        Manage your contacts efficiently and easily.
      </p>
    </div>
  );
};

export default HomePage;
