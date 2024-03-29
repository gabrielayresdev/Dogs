import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = 'Dogs | ' + props.title;
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description || '');
  }, [props.title, props.description]);
  return <></>;
};

export default Head;
