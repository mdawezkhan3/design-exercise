import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, TextField, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    color: 'black'
  }
}));

const currencies = [
  {
    value: "INR",
    label: "INR"    
  },
  {
    value: "USD",
    label: "USD"
  }
];

const Header = ({ handleCurrencyChange }) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static"  style={{ backgroundColor: '#cbccf2' }}>
        <Toolbar>
          <Typography className={classes.title} variant="h5" noWrap>
            PRODUCTS
          </Typography>
          <TextField
            id="standard-select-currency"
            select
            label="Select"
            defaultValue="INR"
            onChange={(ev) => handleCurrencyChange(ev)}
            helperText="Please select a currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
