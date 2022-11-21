import { useQuery } from '@tanstack/react-query';
import { get } from '../helpers/api';
import { Launch as LaunchType } from '../types';
import styles from '../styles/LaunchList.module.css';
import Launch, { Placeholder } from './launch';
import Error from './error';

const placeholders = new Array(10).fill(null).map((_, index) => `placeholder-${index}`);

function LaunchList() {
  const { data, isLoading, isError } = useQuery<LaunchType[]>(
    ['launches'],
    get('https://api.spacexdata.com/v3/launches')
  );

  if (isError) {
    return (
      <div data-testid="error">
        <Error>Oops, we couldn’t load launch list</Error>;
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.grid} data-testid="loading">
        {placeholders.map((placeholder) => (
          <Placeholder key={placeholder} />
        ))}
      </div>
    );
  }

  const launches = data.slice(0, 10);

  return (
    <>
      <div className={styles.grid} data-testid="launches">
        {launches.map((launch) => (
          <Launch key={`${launch.flight_number}-${launch.mission_name}`} launch={launch} />
        ))}
      </div>
    </>
  );
}

export default LaunchList;
