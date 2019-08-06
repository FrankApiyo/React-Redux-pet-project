import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    console.log(Rainbow)
    return (
        <div className="container">
            <h4 className="center">about</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate numquam explicabo ad minus veniam quos consequuntur voluptatibus beatae ratione quas inventore eligendi molestias ex exercitationem, corporis accusantium error maxime fugiat!
            </p>
        </div>
    );
}

export default Rainbow(About);