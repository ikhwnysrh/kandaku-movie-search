import './App.css';
const errorPage = () => {
    return (
        <div className="error">
            <span style={{fontSize: 60}}>☹</span>
            {/* <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjA0cWlsMjVzeW5ucmx0cWtlaDZuendtNmM1N3lxY3czamVuMGZodyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/KbLg28Z0uhEtcrjLoH/giphy.gif" alt="404"/> */}
            <h1 className='h1-404'>404</h1>
            <h3>Page not found</h3>
        </div>
    )
}
export default errorPage