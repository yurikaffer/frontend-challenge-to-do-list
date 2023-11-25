import { Search } from '@mui/icons-material';
import { Box, InputAdornment, TextField, Typography, useMediaQuery } from '@mui/material';
import Icon from './Icon';

interface IProps {
  setSearch: (search: string) => void;
}

export default function Navbar({ setSearch }: IProps) {
  // Verifica se o dispositivo é móvel com base na largura da tela
  const isMobile = useMediaQuery('(max-width:800px)');

  return (
    // Contêiner principal que envolve a barra de navegação
    <Box width="100%" pb={1.5} pt={1.5} boxShadow="0px 0px 3px 0px grey" sx={{ bgcolor: '#fff' }}>
      {/* Container interno com flexbox, ajustado para layout responsivo */}
      <Box
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        alignItems={isMobile ? 'center' : 'flex-start'}
        justifyContent="flex-start"
        px={5} 
      >
        <Box
          display="flex"
          alignItems="center"
          sx={{ minWidth: '100px', mr: isMobile ? 0 : 3, mb: isMobile ? 2 : 0 }}
        >
          <Icon imagePath="/coreNotesIcon.png" altText="CoreNotes Icon" />
          <Typography variant="h6" sx={{ ml: 1 }}>CoreNotes</Typography>
        </Box>

        {/* Campo de pesquisa com TextField */}
        <TextField
          sx={{
            width: isMobile ? '100%' : '700px',
            outline: 'none'
          }}
          placeholder="Pesquisar Notas"
          size="small"
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
}