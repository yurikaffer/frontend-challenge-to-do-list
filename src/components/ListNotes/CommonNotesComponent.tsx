import { Box, Typography, useTheme } from '@mui/material';
import Note from '../Note/NoteCardComponent';
import { INote } from '../../ModelProps';

interface IProps {
  notes: INote[];
}

export default function CommonNotesComponent({ notes }: IProps) {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      sx={{
        [theme.breakpoints.down('sm')]: {
          alignItems: 'center',
        },
      }}
    >
      <Typography ml={3} variant="h6" sx={{ fontFamily: 'Inter, sans-serif' }}>
        Outras
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={5}
        sx={{
          [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
          },
        }}
      >
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </Box>
    </Box>
  );
}
