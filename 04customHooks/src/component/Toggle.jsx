import useToggle from "../hook/useToggle";
import imageSrc from "../image.jpg";

function Toggle() {

    const [isVisible, toggleVisible] = useToggle()

    return (
        <div>
            <button onClick={toggleVisible}>{isVisible ? "Hide" : "Show"} Content</button>
            <div>
                {isVisible && <img src={imageSrc}></img>}
            </div>
        </div>
    )
}

export default Toggle;