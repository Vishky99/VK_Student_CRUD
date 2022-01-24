import './Style.css'
import { List } from './ListStudents'
import { useSelector } from 'react-redux';
import { useState } from 'react';

export function Home() {

    const [searchTerm, setSearchTerm] = useState('Enter Term');

    let changeTerm = (n) => {
        console.log(n.target.value);
        setSearchTerm(n.target.value);
    }

    return (
        <div className='container'>
            <div className='row login homepage'>
                <div>&nbsp;</div>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-11'>
                        <div className='container cn'>
                            <div className='row'>
                                <div className='col'>
                                    <label>Enter Search Term:</label><span>&nbsp;&nbsp;</span>
                                    <input type="text" value={searchTerm} onChange={changeTerm}></input>
                                </div>
                            </div>
                        </div>
                        <br />
                        <table className='table table-striped table-bordered table-hover'>
                            {(searchTerm === 'Enter Term' || searchTerm === '' ) ? <MainTable /> : <SearchTable sval={searchTerm} />}  
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MainTable() {

    const studList = useSelector((state) => {
        return state.student.items;
    })
    return (
        <>
            <thead className='thead-dark'>
                <tr>
                    <th>Student Id</th>
                    <th>Student Name</th>
                    <th>Department</th>
                    <th>Year</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {studList.map((stud) => (
                    <List stud={stud} key={stud.rlno} />
                ))}
            </tbody>
        </>
    );
}

function SearchTable(prop) {
    console.log(prop);
    const studList = useSelector((state) => {
        return state.student.items;
    })
    return (
        <>
            <thead className='thead-dark'>
                <tr>
                    <th>Student Id</th>
                    <th>Student Name</th>
                    <th>Department</th>
                    <th>Year</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    studList.map((stud) =>{
                        return(
                            <>
                                { (stud.rlno.toString().includes(prop.sval.toLowerCase()) ||
                                  stud.name.toLowerCase().includes(prop.sval.toLowerCase()) || 
                                  stud.dept.toLowerCase().includes(prop.sval.toLowerCase()) ||
                                  stud.year.toString().includes(prop.sval.toLowerCase()) ) ? 
                                  <>
                                    <List stud={stud} key={stud.rlno} />
                                  </> : <></>}
                            </>
                        );
                    })
                }
            </tbody>
        </>
    );
}