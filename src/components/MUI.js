import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";


const MUI = () => {
	return (
		<ButtonGroup>
			<Button
				size='large'
				variant='contained'
				color='secondary'
			>
				Hello World
			</Button>
			<Button
				startIcon={<SaveIcon />}
				size='large'
				variant='contained'
				color='secondary'
			>
				Save
			</Button>
			<Button
				startIcon={<DeleteIcon />}
				size='large'
				variant='contained'
				color='secondary'
			>
				Discard
			</Button>
		</ButtonGroup>
	);
};

export default MUI;
