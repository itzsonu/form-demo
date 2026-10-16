"use client"; 
 
import { useState } from "react"; 
import StudentForm from "./components/StudentForm"; 
import StudentDisplay from "./components/StudentDisplay"; 
 
export default function Home() { 
  const [student, setStudent] = useState<{ name: string; email: string }>({ name: "", email: "" });

  function saveStudent(name: string, email: string) {
    setStudent({ name, email });   
  }

  return (
    <main>
      <h1>student application</h1>
      <StudentForm onSubmit={saveStudent} />
      <hr/>
      <StudentDisplay name={student.name} email={student.email} />
    </main>
  );
}