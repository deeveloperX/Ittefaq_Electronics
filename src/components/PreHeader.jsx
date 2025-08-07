import flag from "../assets/flag-pak.webp";

const PreHeader = () => {
    return (
        <div className="bg-primary text-white text-sm py-2 px-4 hidden md:flex justify-center items-center gap-2">
            <div style={{color: "#FFE11B"}}>We deliver all over Pakistan!</div>
            <img src={flag} alt="Logo" className="h-8 md:mx-0 mx-2" />
        </div>
    );
};

export default PreHeader;
