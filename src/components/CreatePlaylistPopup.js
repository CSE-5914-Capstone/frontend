import { React } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import CreatePlaylistInput from './CreatePlaylistInput'

const CreatePlaylistPopup = ({open, setOpen, onSubmit}) => {
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
        {/** TODO Use map or loop (inside function) to create 6 inputs
         * Create list of titles (different params) and iterate over that
         */}       
        <CreatePlaylistInput title={"Title"} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button type='submit'>Create Playlist</Button>
      </DialogActions>
    </Dialog>
  )
}

export default CreatePlaylistPopup