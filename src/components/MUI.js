import React from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';

const MUI = () => {
	return (
		<Button startIcon={<SaveIcon />} size='large' variant='contained' color='secondary'>
			Hello World
		</Button>
	);
};

export default MUI;
