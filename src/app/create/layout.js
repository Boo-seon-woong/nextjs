export default function Layout(props){
    return (
        <form>
            <h2>Layout inside parent's Layout</h2>
            {props.children}
        </form>
    )
}