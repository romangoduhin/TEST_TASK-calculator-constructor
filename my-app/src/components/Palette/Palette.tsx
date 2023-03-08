import React from 'react';
// @ts-ignore
import { Draggable } from 'react-drag-and-drop';
import styles from './Palette.module.scss';
import { IComponents, IProps } from './Palette.types';
import { constructorParts } from '../../helpers/meta';
import { stringify } from '../../helpers/jsonMethods';

function Palette({ items }: IProps) {
  return (
    <div className={styles.palette}>
      {items.map((item) => {
        const data = stringify(item);

        return (
          <Draggable key={item.id} type="item" data={data}>
            {constructorParts[item.name as keyof IComponents]}
          </Draggable>
        );
      })}
    </div>
  );
}

export default Palette;
