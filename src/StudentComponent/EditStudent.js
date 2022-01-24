import './Style.css'
import { Component } from "react"
import {Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {studentEdit, studentShow} from '../redux/allAction'


class EditStudent extends Component{

    constructor(props){
        super(props);

        this.state = {
            id: '',
            rlno: '',
            name: '',
            dept: '',
            year: '',
            redirect: false
        }
    }


    componentDidMount(){
        //this.props.getStudent()
        this.props.getStudent(this.props.id)
        // console.log(this.props.studs)
        // console.log(this.props.id)
        // console.log(this.props.getStudent(this.props.id))
        // console.log(this.props.getStudent(this.props.id).payload)
        //console.log(useParams.id)
    }

    componentDidUpdate(){
        console.log(this.props.studs)
        if(this.state.name===''){
            const {rlno, name, dept, year} = this.props.studs.stud;
            this.setState({
                id: this.props.id,
                rlno: rlno,
                name: name,
                dept: dept,
                year: year
            })
        }
        
    }

    inputHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitButton = async()=>{
        let newStudent = Object.assign(this.props.studs.stud, this.state)
        console.log(newStudent)
        this.props.updateStudent(newStudent)
        this.setState({ redirect: true})
    }

    render(){
        const {rlno, name, dept, year} = this.state
        const {redirect} = this.state;

        if(redirect){
            return <Navigate to='/home' />
        }

        return(
            <div className="container">
                <div className="row login">
                    <h3 className="heading" style={{marginTop: '20px'}}>Edit Student</h3><br/>
                    <div className="col-md-2"></div>
                    <div className="col-md-6"><br/>
                        <form autoComplete="off" action="/login-user" method="post" className="border border-success rounded">
                            <div className="mb-3">
                                <label className="form-label">Roll No</label>
                                <input type="text" className="form-control" name="rlno" value=
                                {rlno} onChange={this.inputHandler} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value=
                                {name} onChange={this.inputHandler} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Department</label>
                                <input type="text" className="form-control" name="dept" value=
                                {dept} onChange={this.inputHandler} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Year</label>
                                <input type="text" className="form-control" name="year" value=
                                {year} onChange={this.inputHandler} />
                            </div>
                            <br />
                            <div>
                                <button type="button" className="btn btn-success" onClick={this.submitButton}>Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        studs: state.student        
    }
}

const mapDispatchToProps = (dispatch)=>{
    //console.log(id)
    return{
        getStudent: (id)=> dispatch(studentShow(id)),
        updateStudent: (data)=> dispatch(studentEdit(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditStudent)