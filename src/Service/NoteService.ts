import { INote, ICreateNote, IUpdateNote } from '../ModelProps'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export const NoteService = {
  async getNotes(): Promise<INote[]> {
    const notes = await api.get<INote[]>('/notes')

    return notes.data
  },

  async getNote(id: string) {
    const note = await api.get(`/notes/${id}`)

    return note
  },

  async create({ title, description, favorite }: ICreateNote) {
    const res = await api.post('/notes', {
      title,
      description,
      favorite,
    })

    return res
  },

  async update({ id, title, description }: IUpdateNote) {
    const res = await api.put(`notes/${id}`, {
      title,
      description
    })

    return res
  },

  async delete(id: string) {
    await api.delete(`/notes/${id}`)
  },

  async updateColor(id: string, color: string) {
    await api.put(`notes/${id}`, { color })
  },

  async addNoteToFavorite(id: string, favorite: boolean) {
    await api.put(`notes/${id}`, { favorite })
  },
}
