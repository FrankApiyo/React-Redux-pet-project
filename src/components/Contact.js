import React from 'react';

const Contact = (props) => {
    console.log(props)
    setTimeout(()=> {
       props.history.push("/about") 
    }, 2000)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate numquam explicabo ad minus veniam quos consequuntur voluptatibus beatae ratione quas inventore eligendi molestias ex exercitationem, corporis accusantium error maxime fugiat!
            </p>
        </div>
    );
}

export default Contact;