import React, { useEffect, useState } from "react"

const CommitsData = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [commits, setCommits] = useState([]);
  console.log('hey');
  useEffect(() => {
    fetch("https://api.github.com/repos/aaronlugo/github-divelement/commits")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setCommits(() => result);
          console.log(result, commits)
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    console.log('comm', commits)
    return (
      <p>Commits</p>
    );
  }
}

export default CommitsData
