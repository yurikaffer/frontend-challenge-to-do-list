import React, { useState } from 'react';
import { Box, Card, Divider, Typography } from '@mui/material';
import { NoteService } from '../../Service/NoteService';
import { Star, StarBorder } from '@mui/icons-material';

export default function CreateNote() {
  const [noteTask, setNoteTask] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [isFavoriteOnHover, setFavoriteOnHover] = useState(false);

  // Função assíncrona para adicionar uma nova nota
  const addNote = async () => {
    if (noteTask && noteTitle) {
      // Chama a API para criar a nota com os detalhes fornecidos
      await NoteService.create({
        title: noteTitle,
        description: noteTask,
        favorite: isFavoriteOnHover,
      });

      window.location.reload();
    }
  };

  // Manipulador de evento para a tecla Enter, chama a função addNote ao pressionar Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addNote();
    }
  };

  return (
    // Card contendo os campos de entrada para criar uma nova nota
    <Card
      sx={{
        minWidth: 275,
        width: '35%',
        height: '205px',
        mt: 3,
        mb: 3,
        boxShadow: '1px 1px 3px 0px grey',
        fontFamily: 'Inter, sans-serif',
        borderRadius: '10px',
      }}
    >
      <Box display="flex" justifyContent="space-between">
        {/* Campo de entrada para o título da nota */}
        <Typography
          component='input'
          maxLength={255}
          onChange={(e) => setNoteTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Título"
          sx={{
            padding: '10px 0px 5px 15px',
            width: '85%',
            fontSize: '25px',
            bgcolor: 'transparent',
            border: 'none',
            outline: 'none',
            fontFamily: 'Inter, sans-serif',
          }}
        />

        {/* Ícone de estrela para marcar a nota como favorita */}
        <Box
          sx={{ cursor: 'pointer', padding: '15px 15px 0px 0px' }}
          onClick={() => setFavoriteOnHover(true)}
        >
          {isFavoriteOnHover ? <Star sx={{ color: 'orange' }} /> : <StarBorder />}
        </Box>
      </Box>

      <Divider sx={{ width: '100%' }} />

      {/* Campo de entrada para o conteúdo da nota (área de texto) */}
      <Box width="100%" height="100%">
        <Typography
          component='textarea'
          maxLength={255}
          placeholder="Criar nota..."
          onChange={(e) => setNoteTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addNote();
            }
          }}
          sx={{
            padding: '10px 0px 10px 15px',
            width: '90%',
            height: '200px',
            fontSize: '17px',
            resize: 'none',
            border: 'none',
            outline: 'none',
            bgcolor: 'transparent',
            fontFamily: 'Inter, sans-serif',
          }}
        />
      </Box>
    </Card>
  );
}
