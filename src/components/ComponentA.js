import ComponentB from "./ComponentB";

const ComponentA = () => {
    const msg = "Hello from Component A";
    return (
        <>
        <div style={{border : "5px solid black", padding : "50px"}}>
        <h1>ComponentA</h1>
        <ComponentB  text={msg}/>

        </div>
        </>
    )
}

export default ComponentA;