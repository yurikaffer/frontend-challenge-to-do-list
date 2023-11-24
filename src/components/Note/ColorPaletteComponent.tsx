import React from 'react';
import ColorComponent from './ColorComponent';
import { Box } from '@mui/material';

interface ColorPaletteProps {
  id: string;
  onClose: () => void;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ id, onClose }) => {
  const colors = [
    '#BAE2FF',
    '#B9FFDD',
    '#FFE8AC',
    '#FFCAB9',
    '#F99494',
    '#9DD5FF',
    '#ECA1FF',
    '#DAFF8B',
    '#FFA285',
    '#CDCDCD',
    '#979797',
    '#A99A7C',
  ];

  return (
    <Box display="flex" gap={1} p={1.5}>
      {colors.map((color, index) => (
        <ColorComponent key={index} color={color} id={id} />
      ))}
    </Box>
  );
};

export default ColorPalette;