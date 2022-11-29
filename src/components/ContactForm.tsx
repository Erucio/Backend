import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

interface errorType {
    name: string,
    email: string,
    comments: string
}

const ContactForm: React.FC = () => {
    const default_values: errorType = {name:'',email:'', comments:''}
    const [contactForm, setContactForm] = useState<errorType>(default_values)
    const [formErrors, setFormErrors] = useState<errorType>(default_values)
    const [canSubmit, setCanSubmit] = useState(false)

    const validateName = (value: {name: string;}) => {
        
        const regex_name = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

            if(!value.name)
            return"You must enter a name"  

            else if(value.name.length < 2)
            return"Your name should contain at least 2 characters"      

            else if(!regex_name.test(value.name))
            return "Your name should not contain any special characters"
      
         return '';   
    }

    const validateEmail = (value: {email: string;}) => {
               
        const regex_email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        
        if(!value.email)
         return "You must enter an email"
     
        else if (!regex_email.test(value.email))
         return "You must enter a valid e-mail address (eg. name@domain.com)"
        
        return '';
    }

    const validateComments = (value: {comments: string;}) => {
         
        if(!value.comments)
        return "You must enter a comment"

        else if(value.comments.length < 10)
        return "Your comments must be at least 10 characters long"

        return '';
            
    }
    
    const handleValidationData =(data: errorType) => {
        const errors = {name: '', email: '', comments: ''}

        errors.name = validateName(data)
        errors.email = validateEmail(data)
        errors.comments = validateComments(data)
   
        if(errors.name === '' && errors.email === '' && errors.comments === '') {

            let json = JSON.stringify(data)

            fetch ('https://win22-webapi.azurewebsites.net/api/contactform', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: json,

        })

        .then(res => {
            console.log('submitted')
            console.log(res.status)  
            if(res.status === 200) {   
                setCanSubmit(true)
            }
            else
                setCanSubmit(false) 
                console.log('can not submit')  
         })
        }}

    let inputName = 'validSuccessName'
        if(formErrors.name)
        inputName = 'validFailName'

    let inputEmail = 'validSuccessEmail'
        if(formErrors.email)
            inputEmail ='validFailEmail'

    let inputComments = 'validSuccessComments'
            if(formErrors.comments)
                inputComments ='validFailComments'
    

    const handleChange = (e: { preventDefault: () => void; target: { id: any; value: any } }) => {
        e.preventDefault()
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
    }

    const handleKeyUpName = () => {
        setFormErrors({...formErrors, name: validateName(contactForm)})
    }

    const handleKeyUpEmail = () => {
        setFormErrors({...formErrors, email: validateEmail(contactForm)})
    }

    const handleKeyUpComments = () => {
        setFormErrors({...formErrors, comments: validateComments(contactForm)})
    }

    const handleSubmit= (e: { preventDefault: () => void }) => {
        e.preventDefault()
        handleValidationData(contactForm)
        }
     



    return (
                <section className="formMap">
                        <div className="map">
                            <div className="container">
                                <div className="icon">
                                    <NavLink to={"/"}><i className="fa-solid fa-home"></i></NavLink>
                                    <p> Contacts </p>
                                </div>
                                <iframe title="googleMap" src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282.82720559699123!2d-81.36286800134407!3d25.81411291488444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88da5d290b0f055d%3A0xf8436ec57d5ba1b9!2sThe%20Captain&#39;s%20Lodge!5e0!3m2!1ssv!2sse!4v1665474799933!5m2!1ssv!2sse'></iframe>
                            </div>
                        </div>
                            <div className="form">
                                <div className="container">
                                    {canSubmit ? (
                                     <div className="alert alert-success text-center" role="alert">
                                        <h1>Thank you for your comments</h1>
                                        <p>We probably won´t come back to you but still appreciate your comment and effort and all that.</p>                                
                                     </div>                            
                                    )
                                    :
                                    (<>
                                    <h3>Come in Contact with Us</h3>
                                    <form  onSubmit={handleSubmit} noValidate >
                                        <div className="input">
                                            <div className="mb-3 nameMail">
                                                <input 
                                                    className={inputName}
                                                    id="name"  
                                                    type="text" 
                                                    placeholder="Your Name" 
                                                    value={contactForm.name} 
                                                    onChange={handleChange}
                                                    onKeyUp={handleKeyUpName}
                                                     />
                                                <div className="errorMessage">{formErrors.name}</div>
                                            </div>
                                            <div className="mb-3 nameMail">
                                                <input 
                                                    className={inputEmail}
                                                    id="email"  
                                                    type="email" 
                                                    placeholder="Your Mail" 
                                                    value={contactForm.email} 
                                                    onChange={handleChange}
                                                    onKeyUp={handleKeyUpEmail}/>
                                                    
                                                <div className="errorMessage">{formErrors.email}</div>
                                            </div>
                                        </div>                
                                        <div className="mb-3 d-grid">
                                            <textarea 
                                                className={inputComments}
                                                style={{resize: 'none'}} 
                                                id="comments"  
                                                placeholder="Comments" 
                                                rows={4} 
                                                value={contactForm.comments} 
                                                onChange={handleChange}
                                                onKeyUp={handleKeyUpComments}
                                                />
                                            <div className="errorMessage">{formErrors.comments}</div>

                                        </div>
                                        <div className="enabled">
                                            <div className="mb-3">
                                                <button type="submit" className="btn-theme">
                                                    <span className="corner-topLeft"></span>
                                                    <span className="corner-bottomRight"></span>
                                                    Post Comments</button>
                                            </div>
                                        </div>
                                    </form>
                                    </>)}                  
                                </div>
                            </div>
                </section>

    )
}

export default ContactForm