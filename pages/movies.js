export default function movies({data}){
    return (
        <div>
            <div>
                {data.Search.map( (m) => <div>{m.Title} --- {m.Year} --- <image src={`http://www.omdbapi.com/?apikey=9fa0923&s=bagdad`}> </image> </div> )}
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

