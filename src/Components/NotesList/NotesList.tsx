import * as React from "react";
import { Container, Row } from "react-bootstrap";
import { Note } from "../../models/note.model";
import SingleNote from "../SingleNote/SingleNote";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FunctionComponent<INotesListProps> = ({
  notes,
  setNotes,
}) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <>
      <h1 className="mt-3 text-primary">All Notes</h1>
      <Container>
        <Row
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(300px, 1fr))",
          }}
        >
          {notes.map((note) => {
            return (
              <SingleNote
                key={note.id}
                note={note}
                handleDelete={handleDelete}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default NotesList;
