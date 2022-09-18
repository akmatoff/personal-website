import { PropsWithChildren } from "react";

import styles from './Wrapper.module.css'


function Wrapper(props: PropsWithChildren) {
  return (
    <div>
      <div className={styles.wrapper}>{props.children}</div>
    </div>
  );
}

export default Wrapper;
