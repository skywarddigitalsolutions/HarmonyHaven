import "./loader.css"
export default function Loader() {
    return(
        <>
        <div className="h-screen bg-verde flex flex-col justify-center items-center">
                <div className="three-body">
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                </div>
                <h4 className="text-white text-4xl lg:text-5xl mt-5 font-bold">Harmony Haven</h4>

        </div>
        </>
    );
}