import { React } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@material-ui/core'
import CreatePlaylistInput from './CreatePlaylistInput'

const CreatePlaylistPopup = ({open, setOpen, onSubmit, userParams, setFunctions}) => {
  
  // const setFunctions = [setDanceability, setEnergy, setLoudness, setLiveness, setValence, setTempo]
  
  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      PaperProps={{
        component: 'form',
        onSubmit: onSubmit
      }}
      maxWidth={'md'}
      // fullWidth={true}
    >
      <DialogTitle>Additional Playlist Options</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} >
          {userParams.map((title, index) => (
            <Grid item xs={6}>
              <CreatePlaylistInput title={title} setParam={setFunctions[index]} />
            </Grid>
          ))}
        </Grid>        
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button type='submit'>Create Playlist</Button>
      </DialogActions>
    </Dialog>
  )
}

export default CreatePlaylistPopup