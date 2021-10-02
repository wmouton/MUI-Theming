import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";

const MUI = () => {
	return (
		<ButtonGroup>
			<Button
				startIcon={<SaveIcon />}
				size='large'
				variant='contained'
				color='secondary'
			>
				Hello World
			</Button>
		</ButtonGroup>
	);
};

export default MUI;
