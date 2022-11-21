import { Launch as LaunchType } from '../types';
import styles from '../styles/Launch.module.css';
import Image from 'next/image';
import { formatDate } from '../helpers/format';
import classnames from 'classnames';

interface Props {
  launch: LaunchType;
}

function Launch({ launch }: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.badge}>
        <Image src={launch.links.mission_patch_small} width={100} height={100} />
      </div>

      <div className={styles.header}>
        <div>
          <h2 className={styles.heading} data-testid="title">
            {launch.mission_name}
          </h2>
          <time className={styles.date} dateTime={launch.launch_date_utc} data-testid="date">
            {formatDate(launch.launch_date_utc)}
          </time>
        </div>

        <span
          className={classnames(styles.result, {
            [styles.success]: launch.launch_success,
          })}
        >
          {launch.launch_success ? 'Success' : 'Fail'}
        </span>
      </div>

      <div className={styles.spaceX}>
        <div className={styles.cell}>
          <h3 className={styles.subheading}>Core</h3>
          <p data-testid="core">{launch.rocket.first_stage.cores[0].core_serial}</p>
        </div>

        <div className={styles.cell}>
          <h3 className={styles.subheading}>Payloads</h3>
          <div data-testid="payload">
            {launch.rocket.second_stage.payloads.map((payload) => (
              <div key={payload.payload_id}>
                <p>
                  {payload.payload_type}: {payload.payload_id}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Placeholder() {
  return (
    <div className={classnames(styles.item, styles.placeholder)}>
      <div className={styles.placeholderBar}></div>
    </div>
  );
}

export default Launch;
