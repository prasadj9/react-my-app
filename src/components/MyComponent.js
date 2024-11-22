import { List, ListItem } from '@mui/material';
import React from 'react'

const MyComponent = () => {
    const texts = [];
    for(let i = 0; i < 100; i++) {
        texts.push("My component");
    }
  return (
    <>
    <div>MyComponent</div>
    <List>

        {texts.map((text, i) => (
            <ListItem key={i}>{text}</ListItem>
        ))}

        </List>
    </>
  )
}

export default MyComponent