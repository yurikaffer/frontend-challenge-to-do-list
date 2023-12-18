import React from 'react';
import { Box, Typography } from '@mui/material';
import { INoteCardContent } from '../../ModelProps';

const style = {
  width: '83%',
  height: '83%',
  fontSize: '17px',
  resize: 'none',
  border: 'none',
  outline: 'none',
  bgcolor: 'transparent',
  fontFamily: 'Inter, sans-serif',
}

const NoteCardContent: React.FC<INoteCardContent> = ({ 
  isEditing,
  setIsEditing,
  editedDescription,
  onChange,
  onConfirm,
  onCancel,
}) => {

  return (
    <Box
      // Área clicável para ativar a edição
      width="100%"
      height="73%"
      sx={{
        padding: '16px 16px 16px 16px',
      }}
      onClick={() => setIsEditing(true)}
    >
      {isEditing ? (
        // Textarea editável durante a edição
        <Typography
          component= 'textarea'
          maxLength={255}
          value={editedDescription}
          onChange={(e) => onChange(e.target.value)}
          sx={style}
        />
      ) : (
        // Textarea somente leitura fora do modo de edição
        <Typography
          component="textarea"
          maxLength={255}
          sx={style}
        >
          {editedDescription}
        </Typography>
      )}
    </Box>
  );
};

export default NoteCardContent;
