import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import FavoriteNotesComponent from './FavoriteNotesComponent';
import CommonNotesComponent from './CommonNotesComponent';
import SearchNotesComponent from './SearchNotesComponent';
import { NoteService } from '../../Service/NoteService';
import { INote } from '../../ModelProps';

interface IProps {
  search: string;
}

const ListNotes: React.FC<IProps> = ({ search }) => {
  const [allNotes, setAllNotes] = useState<INote[]>([]);
  const [favoritesNotes, setFavoritesNotes] = useState<INote[]>([]);
  const [commonNotes, setCommonNotes] = useState<INote[]>([]);

  // useEffect para buscar as notas ao montar o componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtém todas as notas da API
        const notes = await NoteService.getNotes();

        const all: INote[] = [];
        const favorites: INote[] = [];
        const commons: INote[] = [];

        // Classifica as notas em favoritas e comuns
        notes.forEach((note) => {
          all.push(note);

          if (note.favorite) {
            favorites.push(note);
          } else {
            commons.push(note);
          }
        });

        // Atualiza os estados com as notas classificadas
        setFavoritesNotes(favorites);
        setCommonNotes(commons);
        setAllNotes(all);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    // Chama a função fetchData ao montar o componente
    fetchData();
  }, []);

  // Filtra as notas com base na pesquisa (se houver)
  const filteredNotes = search
    ? allNotes.filter(
        (note) => note.title.includes(search) || note.description.includes(search)
      )
    : null;

  return (
    // Contêiner principal com layout flexível em coluna e espaçamento entre os filhos
    <Box display="flex" flexDirection="column" gap={5} width="90%" mb={5}>
      {/* Renderiza o componente de pesquisa ou as notas favoritas e comuns */}
      {search ? (
        <SearchNotesComponent notes={filteredNotes || []} />
      ) : (
        <>
          <FavoriteNotesComponent notes={favoritesNotes} />
          <CommonNotesComponent notes={commonNotes} />
        </>
      )}
    </Box>
  );
};

export default ListNotes;
