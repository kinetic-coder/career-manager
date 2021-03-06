import React from 'react';


 const HomePage = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Career Manager
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <p>
          Welcome to the career manager!
        </p>
      </div>
    );
}

export default HomePage;