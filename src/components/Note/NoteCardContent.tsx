import React from 'react';
import { Box, Typography } from '@mui/material';

interface INoteCardContent {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  editedDescription: string;
  onChange: (value: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

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
      width="100%"
      height="73%"
      sx={{
        padding: '16px 16px 16px 16px',
      }}
      onClick={() => setIsEditing(true)}
    >
      {isEditing ? (
        <Typography
          component= 'textarea'
          maxLength={255}
          value={editedDescription}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onConfirm();
            } else if (e.key === 'Escape') {
              onCancel();
            }
          }}
          sx={style}
      />
      ) : (
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
