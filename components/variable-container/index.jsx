import _ from 'lodash';
import omit from 'omit.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useRef, useEffect, useMemo } from 'react';

import useResize from './useResize';

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'style',
  'layout',
  'margin',
  'onResize',
  'className',
  'threshold',
  'dragHeight',
  'operationList',
  'defaultParams',
  'constraintSize',
];

// props 参数校验
const paramsType =  PropTypes.shape({
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetX: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetY: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
});
const propTypes = {
  layout: PropTypes.bool,
  threshold: PropTypes.number,
  constraintSize: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  margin: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  operationList: PropTypes.arrayOf(PropTypes.string),
  params: paramsType,
  defaultParams: paramsType,
  dragHeight: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
  onResize: PropTypes.func,
};

const useHooks = (props, ref) => {
  const _targetRef = useRef(null);
  const targetRef = ref || _targetRef;

  // 内部状态
  const params = useResize(targetRef, {
    margin: props.margin,
    threshold: props.threshold,
    dragHeight: props.dragHeight,
    operationList: props.operationList,
    constraintSize: props.constraintSize,
    defaultParams: props.params || props.defaultParams,
  });

  // 合并计算后的状态, 也是最终用于组件渲染的状态(受控组件受外部属性的控制不直接用内部状态来渲染组件)
  const _params = useMemo(() => ({
    ... params,
    ... props.params,
  }), [params, props.params]);

  const containerStype = useMemo(() => ({
    width: _params.width,
    height: _params.height,
    transform: !props.layout
      ? `translate(${_params.offsetX}px, ${_params.offsetY}px)`
      : void 0,
    ... props.style,
  }), [_params]);

  // 监听内部状态的变更, 触发 onChange 事件
  useEffect(() => {
    _.isFunction(props.onResize) && props.onResize(params);
  }, [params]);

  return { targetRef, containerStype };
};

const VariableBlock =  React.forwardRef((props, ref) => {
  const state = useHooks(props, ref);
  return (
    <div
      style={state.containerStype}
      ref={ref || state.targetRef}
      className={classNames('qyrc-variable-block', props.className)}
      {... omit(props, filterPropKeys)}>
      {props.children}
    </div>
  );
});
VariableBlock.propTypes = propTypes;
export default VariableBlock;
