import omit from 'omit.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useRef, useEffect, useMemo } from 'react';

import useSize from './useSize';

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'className',
  'width',
  'height',
  'bodyClassName',
  'bodyStyle',
  'style',
]

// 默认 props
const defaultProps = {
  width: '100%',
  height: '100%',
};

// props 类型校验
const propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  bodyClassName: PropTypes.string,
  bodyStyle: PropTypes.object,
  
};

const useStateHook = (props) => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const size = useSize(imgRef, containerRef, props.src); 
  return { imgRef, containerRef, size };
};

const Image =  (props) => {
  const state = useStateHook(props);
  return (
    <div 
      {...omit(props, filterPropKeys)}
      ref={state.containerRef} 
      className={classNames('qyrc-image', props.className)} 
      style={{ width: props.width, height: props.height, ...props.style}}>
      <img src={props.src} ref={state.imgRef} style={{ ...state.size }}/>
      <div 
        style={props.bodyStyle}
        className={classNames('qyrc-image-body', props.bodyClassName)} >
        {props.children}
      </div>
    </div>
  );  
};
Image.defaultProps = defaultProps;
Image.propTypes = propTypes;
export default Image;