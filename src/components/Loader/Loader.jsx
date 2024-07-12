import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.wrapper}>
      <InfinitySpin
        visible={true}
        width="180"
        color="#646cff"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}
