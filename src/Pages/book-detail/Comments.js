import {
  makeStyles,
  Container,
  Grid,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import * as React from "react";
import { i18n } from "@lingui/core";
import { useAuthContext } from "shared/providers/AuthGuard";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { comment } from "shared/fetchers";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

export function Comments(props) {
  const classes = useStyles(props);

  const { enqueueSnackbar } = useSnackbar();

  const [content, setContent] = React.useState("");

  const { id: bookId } = useParams();

  const [username, setUsername] = React.useState("");

  const { me } = useAuthContext();

  const { mutate } = useMutation(comment.send);

  const { data: comments } = useQuery(["/comment", bookId], comment.get);

  const queryClient = useQueryClient();

  const otherComments = comments?.data.otherComments ?? [];

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSendComment = () => {
    mutate(
      {
        bookId,
        content: content,
        user_name: !me ? username : undefined,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["/comment", bookId]);
          enqueueSnackbar(i18n._("comment sent successfully"), {
            variant: "success",
          });
        },
      }
    );
  };

  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item container xs={12} className={classes.gap}>
          <Grid item xs={12}>
            <Typography component="h5" variant="h5">
              {i18n._("users comments")}
            </Typography>
          </Grid>
          {!me && (
            <Grid xs={2}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="comment_username"
                label={i18n._("username")}
                autoFocus
                value={username}
                onChange={handleUsernameChange}
              />
            </Grid>
          )}
          <Grid xs={!!me ? 12 : 9}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="comment_content"
              label={i18n._("write your comment")}
              autoFocus
              value={content}
              onChange={handleContentChange}
              InputProps={{
                endAdornment: !!me && (
                  <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    className={classes.fullHeight}
                    onClick={handleSendComment}
                  >
                    {i18n._("send")}
                  </Button>
                ),
              }}
            />
          </Grid>

          {!me && (
            <Grid xs={12}>
              <Button
                color="primary"
                variant="contained"
                size="large"
                onClick={handleSendComment}
              >
                {i18n._("send")}
              </Button>
            </Grid>
          )}

          <Grid xs={12}>
            <List>
              {otherComments.map((item) => (
                <React.Fragment>
                  <ListItem key={item.id} disableGutters>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography component="span" variant="h5">
                            {item.user.username
                              ? item.user.username
                              : item.user}
                          </Typography>
                          <br />
                          {` ${item.created_at}`}
                        </React.Fragment>
                      }
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body1">
                            {item.content}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider component="li" />
                </React.Fragment>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 16, 0, 16),
    maxWidth: "100%",
  },
  fullHeight: {
    height: "100%",
  },
  gap: {
    gap: 10,
  },
}));
