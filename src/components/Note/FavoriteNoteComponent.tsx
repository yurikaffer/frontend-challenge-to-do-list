import { Star, StarBorder } from '@mui/icons-material'
import { Box } from '@mui/material'
import { useState } from 'react'
import { NoteService } from '../../Service/NoteService'

interface IProps {
  id: string
  isFavorite: boolean
}

export default function FavoriteNoteComponent({ id, isFavorite }: IProps) {
  const [isFavoriteOnHover, setFavoriteOnHover] = useState(false);

  const setNoteToFavorite = async () => {
    try {
      const newIsFavorite = !isFavorite;

      setFavoriteOnHover(false);
      await NoteService.addNoteToFavorite(id, newIsFavorite);

       window.location.reload();
    } catch (error) {
      console.error('Erro ao adicionar nota aos favoritos', error);
    }
  };

  return (
    <Box
      sx={{ cursor: 'pointer', mt: 1 }}
      onMouseOver={() => setFavoriteOnHover(true)}
      onMouseLeave={() => setFavoriteOnHover(false)}
      onClick={setNoteToFavorite}
      
    >
      {isFavoriteOnHover || isFavorite ? <Star sx={{ color: 'orange' }} /> : <StarBorder />}
    </Box>
  );
}
