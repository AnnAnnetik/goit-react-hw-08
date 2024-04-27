import { Hearts } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div>
      <Hearts
        height="80"
        width="80"
        color="#ff69b4"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
