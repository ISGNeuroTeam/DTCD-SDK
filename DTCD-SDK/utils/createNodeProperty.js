export default ({expression = '', title='', type = 'expression', input = {component:'textarea'}}) => {
    return {
      title,
      type,
      expression,
      input
    };
};