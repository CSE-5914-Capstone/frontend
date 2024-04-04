import { React } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@material-ui/core'
import CreatePlaylistInput from './CreatePlaylistInput'

const CreatePlaylistPopup = ({open, setOpen, onSubmit, userParams}) => {
  
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
          {userParams.map((title) => (
            <Grid item xs={6}>
              <CreatePlaylistInput title={title} />
            </Grid>
          ))}
        </Grid>
        {/** TODO Use map or loop (inside function) to create 6 inputs
         * Create list of titles (different params) and iterate over that
         */}       
        
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button type='submit'>Create Playlist</Button>
      </DialogActions>
    </Dialog>
  )
}

export default CreatePlaylistPopup