import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState({ read: false, delete: false, add: false });

    const addNewStudent = async ({ studentName, instructor, course }) => {
        setIsLoading(prevIsLoading => ({ ...prevIsLoading, add: true }));
        const newStudent = { studentName, instructor, course };
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/students`, newStudent);
        if (response.status === 201) {
            setStudents(prevStudentList => [...prevStudentList, response.data])
        }
        setIsLoading(prevIsLoading => ({ ...prevIsLoading, add: false }));
    }

    const deleteStudent = async (id) => {
        setIsLoading(prevIsLoading => ({ ...prevIsLoading, delete: true }));
        const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/students/${id}`);
        if (response.status === 200) {
            setStudents(prevStudentList => prevStudentList.filter(student => student.id !== id))
        }
        setIsLoading(prevIsLoading => ({ ...prevIsLoading, delete: false }));
    }

    useEffect(() => {
        const controller = new AbortController();

        const getStudents = async () => {
            try {
                setIsLoading(prevIsLoading => ({ ...prevIsLoading, read: true }));
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/students`, { signal: controller.signal });
                setStudents(response.data);
                setIsLoading(prevIsLoading => ({ ...prevIsLoading, read: false }));
            } catch (error) {

                setIsLoading(prevIsLoading => ({ ...prevIsLoading, read: false }));
                if(error.name === "AbortError"){
                    console.log("Request was aborted", error.message);
                }
                else{
                    console.log("Something went wrong!", error.message);
                }
            }
        }

        getStudents();

        return () => { controller.abort(); }
    }, []);

    return (
        <StudentContext.Provider value={{ students, isLoading, addNewStudent, deleteStudent }}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentProvider