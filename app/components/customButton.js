import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// Custom styles for variants
const CustomContainedButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgb(var(--bg-darken-blue))',
  color: theme.palette.secondary.contrastText,
  '&:hover': {
    backgroundColor: 'rgb(var(--bg-darken-blue-hover))',
    '& .MuiButton-startIcon': {
    marginRight: theme.spacing(1),
  },
  },
}));

const CustomOutlinedButton = styled(Button)(({ theme }) => ({
  borderColor: 'rgb(var(--bg-darken-blue))',
  color: theme.palette.primary.main,
  '& .MuiButton-startIcon': {
    marginRight: theme.spacing(1),
  },
}));

const CustomDisabledButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgb(var(--bg-disabled))',
  color: theme.palette.primary.main,
  pointerEvents: 'disabled',
  '& .MuiButton-startIcon': {
    marginRight: theme.spacing(1),
  },
}))


const CustomButton = ({ variant, startIcon, endIcon, children, ...props }) => {
    switch (variant) {
      case 'contained':
        return (
          <CustomContainedButton variant="contained" startIcon={startIcon} endIcon={endIcon} {...props}>
            {children}
          </CustomContainedButton>
        );
      case 'outlined':
        // Implement CustomOutlinedButton if needed similarly
        return (
          <CustomOutlinedButton variant="outlined" startIcon={startIcon} endIcon={endIcon} {...props}>
            {children}
          </CustomOutlinedButton>
        );
      case 'disabled':
        // Implement CustomDisabledButton if needed similarly
        return (
          <CustomDisabledButton disabled startIcon={startIcon} endIcon={endIcon} {...props}>
            {children}
          </CustomDisabledButton>
        );
      default:
        return (
          <CustomContainedButton variant="contained" startIcon={startIcon} endIcon={endIcon} {...props}>
            {children}
          </CustomContainedButton>
        );
    }
  };

export default CustomButton;
