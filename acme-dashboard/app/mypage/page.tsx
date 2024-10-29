'use client'

import Donut from "../ui/donut";
import Icon from "../ui/icon";

export default function page() {
    return (<>

        <h1>This is my sample page</h1>

        <p>Hint 1: Everything required to make this page is in the given doc</p>
        <p>Hint 2: A part of this is already mode for you, just waiting to be found in the pile of UI elements...</p>

        <h3>Section 1</h3>

        <span>This is a sample image: </span><br/>
        <img src="https://picsum.photos/100/100" alt="sample image"/>
        <br/><br/>

        <span>This is a sample button: </span>
        <button>Button</button>
        <br/><br/>

        <h3>Section 2</h3>
        
        <a href="https://www.google.com">This is a link to google</a>
        <br/>

        <span>This is an icon: </span><Icon/>
        <br/>

        <span>This is an icon with link: </span><a href="https://www.google.com"><Icon/></a>
        <br/><br/>

        <h3>Section 3</h3>
        <span>Spinning donut made of text:</span>
        <Donut/>
        
    </>)
}
