import { Link, json, useLoaderData } from '@remix-run/react';
import { getStoredNotes } from '../data/notes';
import styles from '../styles/note-details.css';

export default function NoteDetailsPage() {
    const data = useLoaderData()
    console.log(data); // this is not printing

    return (
        <main id="note-details">
            <header>
                <nav>
                    <Link to = "/notes">Back to all notes</Link>
                </nav>
                <h1>NOTE TITLE</h1>
            </header>
            <p id="note-details-content">
                NOTE CONTENT
            </p>
        </main>
    );
}

export async function loader({params}) {
    const notes = await getStoredNotes();
    const note = notes.filter(note => note.id === params.noteId);
    console.log("from loader: " + note); // this is printing
    return json(note);
}

export function links() {
    return [{rel: 'stylesheet', href: styles}];
}