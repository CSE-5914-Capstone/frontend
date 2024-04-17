import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function SelectedSearch({ song, danceability, energy, loudness, liveness, valence, tempo }) {
  const spotifyUrl = `https://open.spotify.com/embed/track/${song.track_id}`;

  const isAnyParameterSelected = danceability !== null || energy !== null || loudness !== null || liveness !== null || valence !== null || tempo !== null;

  return (
    <div style={{ marginBottom: "20px" }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            Selected Song
          </Typography>
          <iframe
            src={spotifyUrl}
            width="300"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          {isAnyParameterSelected && (
            <>
              <Typography variant="h6" component="div" style={{ marginTop: "20px", marginBottom: "10px" }}>
                Selected Parameters
              </Typography>
              <Grid container spacing={2}>
                {danceability !== null && (
                  <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Card>
                      <CardContent>
                        <Typography variant="body1" component="div">
                          <strong>Danceability:</strong> {danceability}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )}
                {energy !== null && (
                  <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Card>
                      <CardContent>
                        <Typography variant="body1" component="div">
                          <strong>Energy:</strong> {energy}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )}
                {loudness !== null && (
                  <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Card>
                      <CardContent>
                        <Typography variant="body1" component="div">
                          <strong>Loudness:</strong> {loudness}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )}
                {liveness !== null && (
                  <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Card>
                      <CardContent>
                        <Typography variant="body1" component="div">
                          <strong>Liveness:</strong> {liveness}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )}
                {valence !== null && (
                  <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Card>
                      <CardContent>
                        <Typography variant="body1" component="div">
                          <strong>Valence:</strong> {valence}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )}
                {tempo !== null && (
                  <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Card>
                      <CardContent>
                        <Typography variant="body1" component="div">
                          <strong>Tempo:</strong> {tempo}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )}
              </Grid>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default SelectedSearch;
