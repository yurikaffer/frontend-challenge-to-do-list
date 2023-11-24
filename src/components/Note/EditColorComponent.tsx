import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import { ColorLens } from '@mui/icons-material';
import ColorPalette from './ColorPaletteComponent';

interface EditColorComponentProps {
  id: string;
}

const EditColorComponent: React.FC<EditColorComponentProps> = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <ColorLens sx={{ cursor: 'pointer' }} onClick={handleClick} />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <ColorPalette id={id} onClose={handleClose} />
      </Popover>
    </>
  );
};

export default EditColorComponent;
