import '../App.css'
export const Dashboard = ({title, description}) => {
    return(
        <div className="divs">
            <h3>ID- {title}</h3>
            <p>Title- {description}</p>
        </div>
    )
}