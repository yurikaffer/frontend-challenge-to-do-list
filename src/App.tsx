import Navbar from './components/Navbar/NavbarComponent'
import ListNotes from './components/ListNotes/ListNotesComponent'
import CreateNote from './components/CreateNote/CreateNoteComponent'
import { useState } from 'react'
import { Box } from '@mui/material'

function App() {
  const [search, setSearch] = useState('')

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Navbar setSearch={setSearch} />
      <CreateNote />
      <ListNotes search={search} />
    </Box>
  )
}

export default App
