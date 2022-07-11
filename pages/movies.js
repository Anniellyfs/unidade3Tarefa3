export default function movies({data}){
    return (
        <div>
            <div>
                {data.Search.map( (m) => <div>{m.Title} --- {m.Year} --- {m.Poster}</div>)}
            </div>                       
        </div>
    )
}

export async function getServerSideProps(context){
    const res = await fetch(`http://www.omdbapi.com/?apikey=9fa0923&s=bagdad`)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}

async function fetcher(url) {

    const res = await fetch(`http://www.omdbapi.com/?apikey=9fa0923&s=bagdad`)

    const json = await res.json()

    return json

}

