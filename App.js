import React from 'react'
export default function Signup(){
    return(
        <React.Fragment>
            <br />
    <br />
    <br />
    <div class="container" >
        <div class="row">
        <div class="col-md-3">
                    
        </div> 
        <div class="col-md-6 main">
                    
            <form action="/sign_up" method="post">
                    
            <h1> Employement form </h1>
            <br />
                            
            <input class="box" type="text" name="name" id="name"
            placeholder="enter name" required /><br /><br />
                            
            <input class="box" type="email" name="email" id="email"
            placeholder="enter email " required /><br /><br />
                            
            <input class="box" type="password" name="password"
            id="password" placeholder="enter password " required/><br /><br />
                            
            <input class="box" type="text" name="phone" id="phone"
            placeholder="Phone Number " required/><br /><br />
                        <br />
                     
            <input class="col-sm-6"  type="submit" id="submitDetails"
            name="submitDetails" value="Submit" /><br />
   
            </form>
            </div>
                
                
        <div class="col-md-3">
        </div>
                
    </div>
    </div>
</React.Fragment>)
}