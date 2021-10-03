import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		background: "linear-gradient(45deg, #2a4d3f, #1b878f)",
		border: 0,
		margin: 0,
		borderRadius: 15,
		color: "white",
		padding: "0 30px",
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

const MUI = () => {
	return (
		<>
		<ButtonStyled />
			Email:
			<TextField
				variant='filled'
				color='secondary'
				type='email'
				label='Email'
				placeholder='test@test.com'
			/>
			Date:
			<TextField variant='outlined' color='secondary' type='date' />
			<CheckboxExample />
			<ButtonGroup variant='contained' color='primary'>
				<Button startIcon={<SaveIcon />} size='large'>
					Save
				</Button>
				<Button startIcon={<DeleteIcon />} size='large'>
					Discard
				</Button>
			</ButtonGroup>
		</>
	);
};

export default MUI;
