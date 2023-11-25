export interface INote {
  id: string
  user_id: string
  title: string
  description: string
  color: string
  favorite: boolean
  createdAt: Date
  updatedAt: Date
}

export interface ICreateNote {
  title: string
  description: string
  favorite: boolean
}

export interface IUpdateNote {
  id: string
  title: string
  description: string
}

export interface INoteCard {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  handleEditCancel: () => void;
  handleEditConfirm: () => void;
  note: INote;
}

export interface INoteCardContent {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  editedDescription: string;
  onChange: (value: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export interface INoteCardHeader {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  editedTitle: string;
  onChange: (value: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
  note: INote;
}