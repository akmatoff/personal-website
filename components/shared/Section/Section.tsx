import { PropsWithChildren, ReactNode } from 'react';
import styles from './Section.module.css'

type Props = {
  children?: ReactNode;
  id: string;
}

function Section({children, id}: Props) {
  return (
    <div id={id} className={`${styles.section} flex column centered`}>
      {children}
    </div>
  )
}

export default Section;