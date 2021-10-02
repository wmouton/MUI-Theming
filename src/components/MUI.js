import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

const CheckboxExample = () => {
	return (
		<div>
			<Checkbox />
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
