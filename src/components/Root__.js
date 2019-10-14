import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar';
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default function Root() {
  
  const classes = useStyles();
    console.log(props);
  return (

    <Box>
      
      <Navbar />

      <Box className={classes.container}>
      <Container maxWidth="xl"  style={{ margin: 15 }}>
          <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <TextField
        id="task-entry"
        label="Task Panel"
        style={{ margin: 8 }}
        placeholder="Enter Tasks"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
              </Grid>
        <Grid item xs={12}>tasks</Grid>
        <Grid item xs={12} sm={6}>
        <TextField
        id="task-plan"
        label="Task Plan"
        multiline
        style={{ margin: 8 }}
        placeholder="Enter Tasks"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
        id="task-summary"
        label="Task Summary"
                  multiline
                  
        style={{ margin: 8 }}
        placeholder="Enter Tasks"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
        </Grid>
      
      </Grid>
    </div>
    </Container>
    </Box>
</Box>


  );
}
