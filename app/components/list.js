"use client"

import {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CustomListButton from './customListButton';

export default function SelectedListItem({ options, selectedOption, handleChangeAnswer }) {
    const [selectedIndex, setSelectedIndex] = useState(null);
  
    useEffect(() => {
      if (selectedOption) {
        const index = options.findIndex((option) => option.optionId === selectedOption.optionId);
        setSelectedIndex(index);
      } else {
        setSelectedIndex(null);
      }
    }, [selectedOption, options]);
  
    const handleListItemClick = (index, option) => {
      console.log(`Item ${index} clicked`);
      setSelectedIndex(index);
      handleChangeAnswer(option);
    };
  
    return (
      <List component="nav" className="gap-y-3 mx-3 flex flex-col justify-center shadow-none">
        {options.map((option, index) => (
          <CustomListButton
            key={option.optionId}
            selected={selectedIndex === index}
            onClick={() => handleListItemClick(index, option)}
            text={option.optionText}
            label={option.optionId}
          >
          </CustomListButton>
        ))}
      </List>
    );
  }
