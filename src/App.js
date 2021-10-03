import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

import { FormControlLabel } from "@material-ui/core";
// import { TextField } from "@material-ui/core";
import { makeStyles, ThemeProvider, createTheme } from "@material-ui/core";
import { green, orange } from "@material-ui/core/colors";

import "fontsource-roboto";

import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Paper } from "@mui/material";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		background: "linear-gradient(45deg, #2a4d3f, #1b878f)",
		border: 0,
		marginBottom: 15,
		borderRadius: 15,
		color: "white",
		padding: "5px 30px",
	},
});

const theme = createTheme({
	typography: {
		h3: {
			fontSize: 36,
		},
	},
	palette: {
		primary: {
			main: green[400],
		},
		secondary: {
			main: orange[400],
		},
	},
});

const ButtonStyled = () => {
	const classes = useStyles();
	return <Button className={classes.root}>Test Styled Button</Button>;
};

const CheckboxExample = () => {
	const [checked, setChecked] = React.useState(true);
	return (
		<div>
			<FormControlLabel
				control={
					<Checkbox
						checked={checked}
						icon={<DeleteIcon />}
						checkedIcon={<SaveIcon />}
						onChange={(e) => setChecked(e.target.checked)}
						inputProps={{ "aria-label": "secondary checkbox" }}
					/>
				}
				label='Testing Checkbox'
			/>
		</div>
	);
};

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth='md'>
				<div className='App'>
					<header className='App-header'>
						<Typography variant='h3' component='div'>
							Welcome to MUI
						</Typography>
						<Typography variant='subtitle1'>
							Learn how to use Material UI
						</Typography>
						<Typography variant='body1'>
							Fast Development with MUI
						</Typography>

						<ButtonStyled />
						<Grid>
							<Paper />
						</Grid>

						{/* <TextField
							variant='filled'
							color='secondary'
							type='email'
							label='Email'
							placeholder='test@test.com'
						/> */}

						{/* <TextField variant='outlined' color='secondary' type='date' /> */}
						<CheckboxExample />

						<ButtonGroup variant='contained' color='primary'>
							<Button startIcon={<SaveIcon />} size='large'>
								Save
							</Button>
							<Button startIcon={<DeleteIcon />} size='large'>
								Discard
							</Button>
						</ButtonGroup>
						<img src={logo} className='App-logo' alt='logo' />
					</header>
				</div>
			</Container>
		</ThemeProvider>
	);
};

export default App;
