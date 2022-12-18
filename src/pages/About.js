import Base from "../components/Base";
import userContext from "../context/userContext";
const About = () => {

    return (
        <userContext.Consumer>
            {
                (user) =>(
        <Base>
        <div>
            <h1>This us About</h1>
            <p>Welcome{user.name} to About page</p>
            </div>
        </Base>
                )
}
        </userContext.Consumer>
    )
};

export default About; 