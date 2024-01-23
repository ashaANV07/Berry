import React from 'react'
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

const Grid = () => {
  return (
    <div>
      <MainCard title="Basic Typography" secondary={<SecondaryAction link="https://mui.com/material-ui/react-grid/" />}></MainCard>
    </div>
  )
}

export default Grid