import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";

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
