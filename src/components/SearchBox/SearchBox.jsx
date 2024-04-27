import { useDispatch, useSelector } from 'react-redux';
import style from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const onChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={style.searchBox}>
      <label>
        Finde contacts by name
        <input
          type="text"
          className={style.input}
          value={filter}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};
export default SearchBox;
