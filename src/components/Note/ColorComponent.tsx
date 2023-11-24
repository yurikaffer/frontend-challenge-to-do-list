import { Box } from '@mui/material'
import { NoteService } from '../../Service/NoteService'

interface IProps {
  id: string
  color: string
}

export default function ColorComponent({ id, color }: IProps) {
  const updateColorNote = async () => {
    await NoteService.updateColor(id, color)

    window.location.reload()
  }

  return (
    <Box
      sx={{ cursor: 'pointer' }}
      bgcolor={color}
      width="40px"
      height="40px"
      borderRadius="20%"
      onClick={updateColorNote}
    ></Box>
  )
}
