import React from "react";
import Modal from "../../components/Modal/Modal";

import { Container, StyledInput, StyledButton } from "./styles";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [name, setName] = React.useState("");

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser({
          name: data.name,
          bios: data.bio,
          githubLink: data.html_url,
          repos: data.public_repos,
        });
        setOpen(true);
      });
  };

  return (
    <>
      {open && (<Modal name={user.name} onClose={() => setOpen(false)} />)}
      <Container>
        <StyledInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Github"
        />
        <StyledButton type="button" onClick={handleSubmit}>
          Buscar
        </StyledButton>
      </Container>
    </>
  );
};

export default Home;
