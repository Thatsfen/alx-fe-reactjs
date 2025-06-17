import React from "react";

const ResultsPage = ({ users, error }) => {
  const hasUsers = Array.isArray(users) && users.length > 0;

  return (
    <div className="results-container">
      {error && <p className="error-message">{error}</p>}

       {hasUsers ? (
        users.map((user) => (
          <article key={user.id} className="user-card" aria-label={`GitHub user ${user.login}`}>
            <img src={user.avatar_url} alt={`Avatar of ${user.login}`} className="user-avatar" />
            <div className="user-card__info">
              <h2>{user.login}</h2>
              <p>Location: {user.location || "Not available"}</p>
              <p>Repositories: {user.public_repos ?? "N/A"}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
            </a>
          </div>
          </article>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default ResultsPage;
