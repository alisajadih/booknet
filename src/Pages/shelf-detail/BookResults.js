import {
  Container,
  Grid,
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
import * as React from "react";
import { BookCard } from "./BookCard";
import { i18n } from "@lingui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useQuery } from "react-query";
import { book, category } from "shared/fetchers";
import { useParams } from "react-router-dom";
import { getMapNameToCategoryId } from "./utils";

export function BookResults(props) {
  const classes = useStyles(props);

  const { shelfName } = useParams();

  const [search, setSearch] = React.useState("");

  const { data: categories } = useQuery("/category", category.get);

  const mapNameToCategoryId = getMapNameToCategoryId(categories?.data);

  const activeCategoryId = mapNameToCategoryId[shelfName?.split("-").join(" ")];

  const { data: singleCategory } = useQuery(
    ["/category", activeCategoryId],
    category.getSingle,
    { enabled: !!activeCategoryId }
  );
  const { data: booksWithFilter } = useQuery(
    ["/category", { cat_id: activeCategoryId, title: search }],
    book.get,
    { enabled: !!activeCategoryId && !!search }
  );
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const allbooks = singleCategory?.data?.books ?? [];
  const filteredBooks = booksWithFilter?.data ?? [];

  const books = !!search ? filteredBooks : allbooks;

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
            value={search}
            onChange={handleSearchChange}
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
            <BookCard {...book} to={`/shelfs/${shelfName}/${book.id}`} />
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
