import React from 'react';
import Display from './Display/Display';
import Operators from './Operators/Operators';
import Numbers from './Numbers/Numbers';
import EqualButton from './EqualButton/EqualButton';
import styles from './Palette.module.scss';
import { IComponents, IProps } from './Palette.types';

function Palette({ items }: IProps) {
  const components: IComponents = {
    display: <Display />,
    operators: <Operators />,
    numbers: <Numbers />,
    equal: <EqualButton />,
  };

  return (
    <div className={styles.palette}>
      {items.map((el) => (
        <div key={el.id} draggable>
          {components[el.name as keyof IComponents]}
        </div>
      ))}
    </div>
  );
}

export default Palette;
