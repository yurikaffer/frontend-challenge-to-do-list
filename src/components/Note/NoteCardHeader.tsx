import React from 'react';
import FavoriteNoteComponent from './FavoriteNoteComponent';
import { Box, Tooltip, Typography } from '@mui/material';
import { INoteCardHeader } from '../../ModelProps';

const style = {
  width: '85%',
  fontSize: '25px',
  bgcolor: 'transparent',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  fontFamily: 'Inter, sans-serif',
}

const NoteCardHeader: React.FC<INoteCardHeader> = ({
  isEditing,
  setIsEditing,
  editedTitle,
  onChange,
  onConfirm,
  onCancel,
  note,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{ padding: '10px 16px 5px 16px' }}
    >
      {isEditing ? (
        // Input editável durante a edição
        <Typography
          component= 'input'
          maxLength={255}
          value={editedTitle}
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
        // Texto não editável fora do modo de edição, com a opção de exibir uma tooltip
        <Tooltip title={editedTitle} arrow>
          <Typography
            component="input"
            value={editedTitle}
            sx={style}
            onClick={() => setIsEditing(true)}
          />
        </Tooltip>
      )}

      <FavoriteNoteComponent id={note.id} isFavorite={note.favorite} />
    </Box>
  );
};

export default NoteCardHeader;
