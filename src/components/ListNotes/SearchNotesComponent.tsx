import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Note from '../Note/NoteCardComponent';
import { INote } from '../../ModelProps';

interface IProps {
  notes: INote[];
}

const SearchNotesComponent: React.FC<IProps> = ({ notes }) => {
  // Obtém o tema atual para ajustar o layout responsivo
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      sx={{
        // Estilo responsivo para dispositivos menores
        [theme.breakpoints.down('sm')]: {
          alignItems: 'center',
        },
      }}
    >
      <Typography ml={3} variant="h6" sx={{ fontFamily: 'Inter, sans-serif' }}>
        Pesquisa
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={5}
        sx={{
          // Ajustes responsivos para dispositivos menores
          [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
          },
        }}
      >
        {/* Mapeia e exibe cada nota no componente Note */}
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </Box>
    </Box>
  );
};

export default SearchNotesComponent;