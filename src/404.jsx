import './App.css';
const errorPage = () => {
    return (
        <div className="error">
            {/* <span style={{fontSize: 60}}>☹</span> */}
            <img src="./404.png" alt="404" width={"300px"}/>
            {/* <h1 className='h1-404'>404</h1> */}
            <h1>Page not found!</h1>
            <p>The Requested page was not found</p>
        </div>
    )
}
export default errorPage