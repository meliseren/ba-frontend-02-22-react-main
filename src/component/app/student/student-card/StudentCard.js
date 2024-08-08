import React, { useContext, useEffect } from 'react'
import { StudentContext } from '../../../../context/student/StudentContext';
import { useState } from 'react';

const StudentCard = ({ student }) => {
    const { deleteStudent } = useContext(StudentContext);
    const [isDeletedLoading, setIsDeletedLoading] = useState(false);

    return (
        <div className="student-card">
            <span
                onClick={async () => {
                    setIsDeletedLoading(true);
                    await deleteStudent(student.id);
                    setIsDeletedLoading(false);
                }}
                className="btn-delete"
            >
                {isDeletedLoading ? "Loading..." : <i className="fa-solid fa-delete-left"></i>}
            </span>
            <ul>
                <li>{student.studentName}</li>
                <li>{student.instructor}</li>
                <li>{student.course}</li>
            </ul>
        </div>
    )
}

export default StudentCard