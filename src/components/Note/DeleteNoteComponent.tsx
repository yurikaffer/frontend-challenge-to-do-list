import React from 'react';
import { Tooltip, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { NoteService } from '../../Service/NoteService';

interface DeleteNoteComponentProps {
  id: string;
}

const DeleteNoteComponent: React.FC<DeleteNoteComponentProps> = ({ id }) => {
  const handleDeleteNote = async () => {
    try {
      await NoteService.delete(id);
      window.location.reload()
    } catch (error) {
      console.error('Erro ao deletar nota:', error);
    }
  };

  return (
    <Tooltip placement="top-start" title="Deletar" arrow>
      <IconButton>
        <DeleteIcon sx={{ cursor: 'pointer' }} onClick={handleDeleteNote} />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteNoteComponent;
