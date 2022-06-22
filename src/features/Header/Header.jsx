import Search from "../../components/Search/Search";
import RedditIcon from "@mui/icons-material/Reddit";
import Paper from "@mui/material/Paper";
import MultipleSelect from "../../components/Select/MultipleSelect";

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
        <Search />
        <MultipleSelect />
      </header>
    </Paper>
  );
};

export default Header;
