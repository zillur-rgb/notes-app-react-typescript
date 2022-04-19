import React, { useState } from "react";
import "./App.css";
import { Note } from "./models/note.model";
import Header from "./Components/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import NotesList from "./Components/NotesList/NotesList";
import CreateNote from "./Components/CreateNote/CreateNote";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "First Note",
      text: "This is my first note",
      color: "#ccc",
      date: new Date().toString(),
    },
  ]);
  return (
    <div className="App">
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
          <Col md={6} className="mx-auto">
            <CreateNote notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
