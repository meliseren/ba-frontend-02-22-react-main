import React, { useContext } from 'react'
import StudentCard from '../student-card/StudentCard'
import { StudentContext } from '../../../../context/student/StudentContext';

const StudentList = () => {
    // console.log("studentList.js");
    const { students, isLoading } = useContext(StudentContext);
    return (
        <div className="student-list">
            <h3>Students</h3>
            <div className="student-list-container">
                {isLoading.read && <p>Loading...</p>}
                {students.map(
                    (student) => <StudentCard student={student} key={student.id} />
                )}
            </div>
        </div>
    )
}

export default StudentList