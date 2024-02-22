import { React } from 'react'
import { Container, Grid, Paper, CircularProgress, makeStyles } from "@material-ui/core"

import SongCard from '../SongCard'

function SongsList({songs, colors}) {
  const classes = useStyles()
  
  // if (!songs || !colors) {
  //   return (
  //     <CircularProgress />
  //   )
  // }
  
  return (
    <Container className={classes.songCardContainer}>
      <Grid container spacing={4}>
        {songs?.map((song, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper className={classes.songCard} style={{ backgroundColor: colors[index] }}>
              <SongCard
                song={song}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  ) 
}

export default SongsList

const useStyles = makeStyles((theme) => ({
  songCardContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  songCard: {
    width: 300,
    height: 400,
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    marginBottom: 0,
    marginRight: 0,
    border: '4px solid black',
    borderRadius: theme.spacing(1),
    boxShadow: '8px 8px 8px rgba(0, 0, 0, 0.1), -8px -8px 8px rgba(0, 0, 0, 0.1)',
  }
}));