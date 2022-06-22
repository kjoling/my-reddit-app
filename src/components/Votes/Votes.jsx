import { BiUpvote, BiDownvote } from "react-icons/bi";

import "./Votes.css";

const Votes = () => {
  return (
    <div className="Votes">
      <BiUpvote />
      <p className="Votes-count">Vote Count: </p>
      <BiDownvote />
    </div>
  );
};

export default Votes;
