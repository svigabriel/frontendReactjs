//import githubLogo from "../../assets/descarga.png";
const OpenLink = ({redirectURL,logoImage} ) => {
    return (
        <div>
            <a href={redirectURL} target="_blank">
                <img src={logoImage} className="logo" alt="Vite logo"/>
            </a>
        </div>
    );
};

export default OpenLink;