import {useState} from "react";


function Content_box(){


    // state management for "View More" button
    const [isMouseHovered,setHover] = useState(false)

    function mouseHoverIn(){
        setHover(true)
    }

    function mouseHoverOut(){
        setHover(false)
    }





    return (
        <>
            <div className={"content_box"}>
                <h1>Title Here</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                {<button
                onMouseOver={mouseHoverIn}
                onMouseOut={mouseHoverOut}
                style={{
                    backgroundColor: isMouseHovered ? "#F9F8F6" : "#F2F2F2"
                }}
                >
                    View More
                </button>}
            </div>



        </>
    )
}

export default Content_box