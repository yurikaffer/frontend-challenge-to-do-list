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