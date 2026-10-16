"use client";

import { useState } from "react";

type Props = {
onSubmit: (student: { name: string; age: number }) => void;
};

export default function StudentForm({ onSubmit }: Props) {
const [name, setName] = useState("");
const [age, setAge] = useState(0);


function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({ name, age });
}

return (
    <form onSubmit={handleSubmit}>
        <h2>Student Form</h2>

        <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <input
            type="number"
            placeholder="Age"
            value={age || ""}
            onChange={(e) => setAge(Number(e.target.value))}
        />

        <button type="submit">Submit</button>
    </form>
);

}