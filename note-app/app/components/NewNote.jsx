import { Form, useActionData, useNavigation } from '@remix-run/react';
import styles from '../styles/newNote.css';
import { useEffect, useRef } from 'react';

function NewNote() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state == 'submitting';
  const formRef = useRef();
  const actionData = useActionData();
  
  useEffect(()=> {
    formRef.current?.reset();
  }, [isSubmitting]);
  
  return (
    <Form method="post" id="note-form" ref = {formRef}>
      <p>{actionData? actionData.message: null}</p>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows="5" required />
      </p>
      <div className="form-actions">
        <button disabled = {isSubmitting}>{isSubmitting ? "Adding..." : "Add Note"}</button>
      </div>
    </Form>
  );
}

export default NewNote;

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}