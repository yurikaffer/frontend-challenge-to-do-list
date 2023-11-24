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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const notes = await NoteService.getNotes();

        const all: INote[] = [];
        const favorites: INote[] = [];
        const commons: INote[] = [];
        
        notes.forEach((note) => {
          all.push(note);

          if (note.favorite) {
            favorites.push(note);
          } else {
            commons.push(note);
          }
        });

        setFavoritesNotes(favorites);
        setCommonNotes(commons);
        setAllNotes(all);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchData();
  }, []);

  const filteredNotes = search
    ? allNotes.filter(
        (note) => note.title.includes(search) || note.description.includes(search)
      )
    : null;

  return (
    <Box display="flex" flexDirection="column" gap={5} width="90%" mb={5}>
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
