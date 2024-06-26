import React, { useState } from "react";

interface VoteButtonProps {
  postId: string;
  initialVotes: number;
}

const VoteButton: React.FC<VoteButtonProps> = ({ postId, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);

  const handleVote = async () => {
    const response = await fetch(`/api/votes/${postId}`, { method: "POST" });
    if (response.ok) {
      const data = await response.json();
      setVotes(data.votes);
    } else {
      console.error("Failed to update votes");
    }
  };

  return (
    <button
      onClick={handleVote}
      className="flex items-center px-4 py-2 bg-slate-500 text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-75 transform transition-transform duration-200 hover:scale-105 active:scale-110"
    >
      👍
      <span className="ml-2">{votes}</span>
    </button>
  );
};

export default VoteButton;
