import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #d3d3d3;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: white;
`;

const Info = styled.p`
  margin: 1rem 0;
  border-bottom: 1px solid black;
`;

const Button = styled.a`
  background-color: #4caf50;
  color: white;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  display: inline-block;
  text-decoration: none;
  border-radius: 0.5rem;
`;

export default function StyledProfile() {
  const [user, setUser] = useState<any>(null);

  async function fetchUser() {
    const res = await fetch('https://api.github.com/users/github'); 
    const data = await res.json();
    setUser(data);
  }

  return (
    <Container>
      <button onClick={fetchUser}>Buscar Usuário</button>
      {user && (
        <>
          <Avatar src={user.avatar_url} alt="profile picture" />
          <Info>{user.name}</Info>
          <Info>{user.bio}</Info>
          <Info>{user.public_repos}</Info>
          <Button href={user.html_url} target="_blank">Perfil</Button>
        </>
      )}
    </Container>
  );
}
