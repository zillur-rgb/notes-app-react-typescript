import * as React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Note } from "../../models/note.model";

interface ICreateNoteProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNote: React.FunctionComponent<ICreateNoteProps> = ({
  notes,
  setNotes,
}) => {
  const [error, setError] = React.useState<string>("");
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: any): void => {
    e.preventDefault();

    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("All Fields Are Mandatory");
    }

    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ]);
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
    (colorRef.current as HTMLInputElement).value = "";
  };

  return (
    <>
      <h2 className="text-primary">Create Note</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form className="my-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            placeholder="Enter Title for the note"
            type="text"
            ref={titleRef}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder="Enter Your Note"
            type="text"
            as="textarea"
            title="Write Note Here"
            ref={textRef}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Note Color</Form.Label>
          <Form.Control
            placeholder="Select Your Background"
            defaultValue="#dfdfdf"
            type="color"
            className="mx-auto"
            ref={colorRef}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Add Note
        </Button>
      </Form>
    </>
  );
};

export default CreateNote;
