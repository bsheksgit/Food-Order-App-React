import logo from "../assets/logo.jpg";

export default function Header()
{
    return (
        <>
        <header id="main-header">
            <div id="title">
                <img src= {logo} alt="Food App Logo"/>
                <h1>Abhishek Food Order</h1>
            </div>
            <button className="text-button">Cart (0)</button>
        </header>
        </>
    );
}