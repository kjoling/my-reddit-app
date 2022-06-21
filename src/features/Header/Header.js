import React from "react";
import RedditIcon from "@mui/icons-material/Reddit";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <header>
      <div>
        <RedditIcon />
        <p>
          Reddit<span>Minimal</span>
        </p>
      </div>
      <form className="search">
        <input type="text" placeholder="Search" />
        <SearchIcon />
      </form>
    </header>
  );
};

export default Header;
