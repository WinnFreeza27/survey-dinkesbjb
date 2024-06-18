import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

const CustomListItemButton = styled(ListItemButton)(({ theme, selected }) => ({
  backgroundColor: "rgb(var(--bg-darken-blue))",
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: 'rgb(var(--bg-darken-blue-hover))', // Set your desired hover background color
  },
  
  '&.Mui-selected': {
    backgroundColor: selected ? 'rgb(var(--bg-darken-blue-selected))' : 'inherit', // Change to your desired selected background color
  },
  '&.Mui-selected:hover': {
    backgroundColor: selected ? 'rgb(var(--bg-darken-blue-selected))' : 'inherit', // Change to your desired hover background color when selected
  },
}));

export default function CustomListButton({ label, text, selected, onClick }) {
  return (
    <CustomListItemButton selected={selected} onClick={onClick}>
      <span className='bg-very-darken-blue w-7 h-7 rounded-full inline-flex justify-center items-center text-center mr-2'>{label}</span>
      <ListItemText primary={text} />
    </CustomListItemButton>
  );
}