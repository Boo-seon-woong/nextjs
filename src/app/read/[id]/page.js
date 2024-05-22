export default async function Read(props){
    const topic = await fetch(`http://localhost:9999/topic/${props.params.id}`).then(res=>res.json());
    //const topic = await resp.json();
    const a = props.params.id;
    return (
        <>
            <h1>{a}</h1>
            <h2>{topic.title}</h2>
            artist : {topic.author}
        </>
    )
}

