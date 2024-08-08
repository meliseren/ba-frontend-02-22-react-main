import React, { useContext, useState } from 'react'
import { StudentContext } from '../../../../context/student/StudentContext';

const StudentForm = ({ children }) => {

    // console.log("studentForm.js giydirildi");
    const { addNewStudent, isLoading } = useContext(StudentContext);

    const [studentName, setStudentName] = useState("");
    const [instructor, setInstructor] = useState("");
    const [course, setCourse] = useState("");

    const [studentNameErr, setStudentNameErr] = useState(false);
    const [instructorErr, setInstructorErr] = useState(false);
    const [courseErr, setCourseErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setStudentNameErr(false);
        setInstructorErr(false);
        setCourseErr(false);

        if (studentName.trim() && instructor.trim() && course.trim()) {
            addNewStudent({ studentName, instructor, course });
            setStudentName("");
            setInstructor("");
            setCourse("");
        }
        else {
            !studentName.trim() && setStudentNameErr(true);
            !instructor.trim() && setInstructorErr(true);
            !course.trim() && setCourseErr(true);
        }
    }

    return (
        <form className="student-form">
            {children}
            <div className="form-control">
                <input
                    type="text"
                    placeholder='Student name...'
                    onChange={(event) => {
                        setStudentName(event.target.value);
                    }}
                    value={studentName}
                />
                {studentNameErr && <p className="input-err">Student name cannot be empty!</p>}
            </div>
            <div className="form-control">
                <input
                    type="text"
                    placeholder='Instructor name...'
                    onChange={(event) => {
                        setInstructor(event.target.value);
                    }}
                    value={instructor}
                />
                {instructorErr && <p className="input-err">Instructor name cannot be empty!</p>}
            </div>
            <div className="form-control">
                <input
                    type="text"
                    placeholder='Course...'
                    onChange={(event) => {
                        setCourse(event.target.value);
                    }}
                    value={course}
                />
                {courseErr && <p className="input-err">Course name cannot be empty!</p>}
            </div>
            <button className="btn btn-primary" onClick={handleSubmit} disabled={isLoading.disabled}>
                {isLoading.add ? "Loading..." : "Submit"}
            </button>
        </form>
    )
}

export default StudentForm