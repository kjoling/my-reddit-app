import Search from "../../components/Search/Search";
import RedditIcon from "@mui/icons-material/Reddit";
import Paper from "@mui/material/Paper";
import MobileSelect from "../../components/MoblieSelect/MobileSelect";

import "./Header.css";

const Header = () => {
  return (
    <Paper elevation={3}>
      <header>
        <div className="redditLogo">
          <RedditIcon />
          <p className="redditSiteName">
            Reddit <span className="redditMinimal">Minimal</span>
          </p>
        </div>
        <Search />
        <MobileSelect />
      </header>
    </Paper>
  );
};

export default Header;
