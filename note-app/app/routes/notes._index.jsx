import { isRouteErrorResponse, json, redirect, useLoaderData, useRouteError } from "@remix-run/react";
import NewNote, { links as newNoteLinks } from "../components/NewNote";
import NoteList, { links as noteListLinks } from "../components/NoteList";
import { getStoredNotes, storeNotes } from "../data/notes";

export default function NotesPage() {
    const notes = useLoaderData();
    console.log(notes);
    return (
        <main>
            <NewNote />
            <NoteList notes = {notes}/>
        </main>
    )
}

export async function loader() {
    // return json(await getStoredNotes());
    const notes = await getStoredNotes();
    if(!notes || notes.length === 0) {
        throw json(
            { message: "No notes found" },
            {
              status: 404
            }
        );
    }
    return notes;
}

export async function action({request}) {
    const formData = await request.formData();
  
    // const noteData = {
    //   title: formData.get('title'),
    //   content: formData.get('content')
    // }
  
    const noteData = Object.fromEntries(formData);
    
    console.log(noteData.title.trim());

    if(noteData.title.trim().length < 5) return {message: 'Title is too short!'};
  
    noteData.id = new Date().toISOString();

    const currentNotes = await getStoredNotes();
    const updatedNotes = currentNotes.concat(noteData);

    await storeNotes(updatedNotes);

    // delaying the submission
    // await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

    return redirect('/notes');
  }

export function links() {
    return [...newNoteLinks(), ...noteListLinks()];
}

export function ErrorBoundary() {
    const error = useRouteError();

    if(isRouteErrorResponse(error)) {
        return (
            <main>
                <NewNote />
                <p className="info-message">Notes not found!</p>
                </main>
        );
    } else throw error;   
}

export function meta() {
    return [
        {
            title: "All Notes"
        }
    ];
}