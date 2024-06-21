import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
import { FaSearch } from 'react-icons/fa';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <label htmlFor="search-inpt" className={css.label}>
        <FaSearch />
        Search contacts by name or number
      </label>
      <input
        type="text"
        id="search-inpt"
        placeholder="Enter name or number ..."
        className={css.input}
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
