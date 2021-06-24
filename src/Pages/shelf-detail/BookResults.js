import {
  Container,
  Grid,
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
import * as React from "react";
import { books } from "shared/books";
import { BookCard } from "./BookCard";
import { i18n } from "@lingui/core";
import SearchIcon from "@material-ui/icons/Search";

export function BookResults(props) {
  const classes = useStyles(props);
  return (
    <Container className={classes.container}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="search"
            label={i18n._("search in books")}
            autoFocus
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        {books.map((book, i) => (
          <Grid key={i} item xs={3}>
            <BookCard {...book} />
          </Grid>
        ))}
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
}));
