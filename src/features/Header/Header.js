import React from "react";
import RedditIcon from "@mui/icons-material/Reddit";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";

import "./Header.css";

const Header = () => {
  return (
    <Paper>
      <header>
        <div className="redditLogo">
          <RedditIcon />
          <p className="redditSiteName">
            Reddit <span className="redditMinimal">Minimal</span>
          </p>
        </div>
        <form className="search">
          <TextField
            id="standard-search"
            label="Search"
            type="search"
            variant="standard"
            sx={{ margin: "0" }}
          />
          <SearchIcon sx={{ cursor: "pointer" }} />
        </form>
      </header>
    </Paper>
  );
};

export default Header;
