import React, { useRef, useState } from 'react';
import { Modal } from '../../../../components';
import '../../../../components/modal/style';
import './index.scss';

const useStateHook = (props) => {
  const dragRef = useRef(null);
  return { dragRef};
};

export default (props) => {
  const state = useStateHook(props);
  return (
    <div className="modal-demo">
      <Modal
        dragRef={state.dragRef}
        defaultParams={{ width: 400, height: 400, offsetX: 20, offsetY: 20 }}
        onMin={(e, isMin) => {
          console.log('最小化', e, isMin);
        }}
      >
        <div style={{ 
          width: '100%', 
          height: '100%', 
          // background: '#04071b',
        }}>
          <div ref={state.dragRef} style={{ height: 80}}>拖拽区域
          </div>
        </div>
      </Modal>
    </div>
  );
};
