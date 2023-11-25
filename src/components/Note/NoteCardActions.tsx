import React from 'react';
import { Box, CardActions, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import BlockIcon from '@mui/icons-material/Block';
import CheckIcon from '@mui/icons-material/Check';
import DeleteNoteComponent from './DeleteNoteComponent';
import EditColorComponent from './EditColorComponent';
import { INoteCard } from '../../ModelProps';

const NoteCardActions: React.FC<INoteCard> = ({ isEditing, setIsEditing, handleEditCancel, handleEditConfirm, note }) => {
  return (
    <CardActions sx={{ padding: '0px 15px 0px 15px' }}>
      {isEditing ? (
        // Se estiver editando, exibe botões de confirmação e cancelamento
        <Box display="flex" justifyContent="space-between" width="100%" >
          <Tooltip placement="top-start" title="Confirmar" arrow>
            <IconButton>
              <CheckIcon
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
                onClick={handleEditConfirm}
              />
            </IconButton>
          </Tooltip>
          <Tooltip placement="top-start" title="Cancelar" arrow>
            <IconButton sx={{ paddingRight: 0 }}>
              <BlockIcon
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  marginRight: 7,
                }}
                onClick={handleEditCancel}
              />
            </IconButton>
          </Tooltip>
        </Box>
      ) : (
        // Se não estiver editando, exibe botões de edição, paleta de cores e exclusão
        <Box display="flex" justifyContent="space-between" width="100%">
          {/* Botões de edição e paleta de cores */}
          <Box display="flex" justifyContent="space-start" width="100%">
            <Tooltip placement="top-start" title="Editar" arrow>
              <IconButton>
                <EditIcon
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    marginRight: 7,
                  }}
                  onClick={() => setIsEditing(true)}
                />
              </IconButton>
            </Tooltip>
            <Tooltip placement="top-start" title="Paleta de cores" arrow>
              <IconButton>
                <EditColorComponent id={note.id} />
              </IconButton>
            </Tooltip>
          </Box>
          {/* Botão de exclusão */}
          <Box display="flex" justifyContent="flex-end" width="100%">
            <DeleteNoteComponent id={note.id} />
          </Box>
        </Box>
      )}
    </CardActions>
  );
};

export default NoteCardActions;