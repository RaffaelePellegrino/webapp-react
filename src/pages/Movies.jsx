import Card from "../components/Card"

export default function PageMovies() {

    return(
        <div className="container text-center">
            <h1 >Lista dei Film</h1>
            <div className='row align-items-center justify-content-center gap-5' >
                <Card/>
            </div>
        </div>
    )
}