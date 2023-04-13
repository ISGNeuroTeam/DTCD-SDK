export default ({expression = '', title='', type = 'expression', component = 'textarea'}) => {
    return {
      title,
      type,
      expression,
      input: {
        component,
      },
    };
  };