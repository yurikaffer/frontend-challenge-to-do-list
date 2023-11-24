import React, { useState, useEffect, useCallback } from 'react';
import NoteCardHeader from './NoteCardHeader';
import NoteCardContent from './NoteCardContent';
import NoteCardActions from './NoteCardActions';
import { NoteService } from '../../Service/NoteService';
import { AxiosResponse } from 'axios';
import { INote } from '../../ModelProps';
import { Card, Divider } from '@mui/material';

interface IProps {
  note: INote;
}

const fetchData = async (noteId: string, setEditedTitle: React.Dispatch<React.SetStateAction<string>>, setEditedDescription: React.Dispatch<React.SetStateAction<string>>) => {
  try {
    const response: AxiosResponse<INote> = await NoteService.getNote(noteId);
    const updatedNote: INote = response.data;

    setEditedTitle(updatedNote.title);
    setEditedDescription(updatedNote.description);
  } catch (error) {
    console.error('Erro ao buscar dados da nota:', error);
  }
};

const NoteCard: React.FC<IProps> = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedDescription, setEditedDescription] = useState(note.description);

  const handleEditCancel = () => {
    setIsEditing(false);
    setEditedTitle(note.title);
    setEditedDescription(note.description);
  };

  const handleEditConfirm = async () => {
    if (editedTitle && editedDescription) {
      await NoteService.update({
        id: note.id,
        title: editedTitle,
        description: editedDescription,
      });

      setIsEditing(false);
      fetchData(note.id, setEditedTitle, setEditedDescription);
    }
  };

  const fetchDataCallback = useCallback(() => {
    fetchData(note.id, setEditedTitle, setEditedDescription);
  }, [note.id]);

  useEffect(() => {
    const fetchDataWrapper = async () => {
      if (!isEditing) {
        fetchDataCallback();
      }
    };

    fetchDataWrapper();
  }, [isEditing, fetchDataCallback]);

  return (
    <Card sx={{ minWidth: 275, width: '25%', height: '500px', mt: 2, borderRadius: '25px', bgcolor: note.color, boxShadow: '1px 1px 5px 0px grey', cursor: 'pointer' }}>
      <NoteCardHeader
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editedTitle={editedTitle}
        onChange={setEditedTitle}
        onCancel={handleEditCancel}
        onConfirm={handleEditConfirm}
        note={note}
      />
      <Divider sx={{ width: '100%', borderBottomWidth: '2px' }} />
      <NoteCardContent
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editedDescription={editedDescription}
        onChange={setEditedDescription}
        onCancel={handleEditCancel}
        onConfirm={handleEditConfirm}
      />
      <NoteCardActions
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        handleEditCancel={handleEditCancel}
        handleEditConfirm={handleEditConfirm}
        note={note}
      />
    </Card>
  );
};

export default NoteCard;
