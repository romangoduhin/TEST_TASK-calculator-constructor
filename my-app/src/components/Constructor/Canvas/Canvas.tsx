import React from 'react';
import AddIconSvg from '../../../assets/addIcon.svg';

function Canvas() {
  return (
    <div
      className="w-[243px] h-[448px] rounded-[6px] flex-centred flex-col gap-[12px] bordered-dashed bg-white cursor-pointer hover:bg-light-blue"
    >
      <img src={AddIconSvg} alt="add-icon" />
      <p className="flex-centred flex-col  gap-[4px] text-[14px] leading-[17px] text-purple font-medium">
        Перетащите сюда
        <span className="text-[12px] leading-[15px] text-grey font-normal text-center">
          любой элемент
          <br />
          из левой панели
        </span>
      </p>
    </div>
  );
}

export default Canvas;
