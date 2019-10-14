import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function DenseTextField() {
  const classes = useStyles();

//   const handleChange = name => event => {
//     setValues({ ...values, [name]: event.target.value });
//   };

  return (

      
      <TextField
        id="Username"
        label="Name"
          className={clsx(classes.textField, classes.dense)}
          
        margin="dense"
        variant="outlined"
      />

  );
}
