import React, { useEffect, useState } from "react"
import { Table } from "react-bootstrap"

const CommitsData = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [commits, setCommits] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/repos/aaronlugo/github-divelement/commits")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setCommits(() => result);
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Author</th>
            <th>SHA</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {commits.map((c, index) => 
            <tr key={index}>
              <td>{c.commit.author.name}</td>
              <td>{c.sha}</td>
              <td>{c.commit.author.date}</td>
              <td>{c.commit.message}</td>
            </tr>
            )}
        </tbody>
      </Table>
    );
  }
}

export default CommitsData
