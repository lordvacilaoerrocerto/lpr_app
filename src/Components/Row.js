import React from 'react';

export default function Row(props) 
{
  return (<label>{props.label}{props.children}</label>);
}