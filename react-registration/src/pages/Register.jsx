import { useState } from "react"

const Register = () => {
    // First Name - Textbox
    // last Name - Textbox
    // Username - Textbox
    // Password - Textbox
    // Gender - Select
    // Tech Stack - Checkbox

    const [formData, setformData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        gender: '',
        techstack: [],
    })

    const handleOnChange = (event) =>{
        if(event.target.name === 'techstack') {
            let copy = {...formData}

            if(event.target.checked) {
                copy.techstack.push(event.target.value)
            }
            else{
                copy.techstack = copy.techstack.filter(el => el !== event.target.value)
            }

            console.log(event.target)
        }
        else{
            setformData(() => ({
                ...formData,
                [event.target.name] : event.target.value
            }))
        }        

        console.log(formData)
    }

    return (
        <>
        <form>
            <div className="form-group">
                <label htmlFor="firstname">First Name:
                    <input name="firstname" type="text" placeholder="First Name" onChange={handleOnChange} className="form-control"></input>
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="lastname">Last Name:
                    <input name="lastname" type="text" placeholder="Last Name" onChange={handleOnChange} className="form-control"></input>
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="username">Username:
                    <input name="username" type="select" placeholder="Username" onChange={handleOnChange} className="form-control"></input>
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:
                    <input name="password" type="text" placeholder="Password" onChange={handleOnChange} className="form-control"></input>
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="gender">Gender
                    <select name="gender" className="form-control">
                        <option>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="HTML" name="techstack" onChange={handleOnChange} ></input>
                <label className="form-check-label" htmlFor="techstack">
                    HTML
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="CSS" name="techstack" onChange={handleOnChange} ></input>
                <label className="form-check-label" htmlFor="techstack">
                    CSS
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="JavaScript" name="techstack" onChange={handleOnChange} ></input>
                <label className="form-check-label" htmlFor="techstack">
                    JavaScript
                </label>
            </div>
            
            <button className="btn btn-primary d-block w-100">Submit</button>

        </form>    
        </>
    )
}

export default Register