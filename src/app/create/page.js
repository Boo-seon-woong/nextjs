"use client"
export default function Create(){
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            const title=e.target.title.value;
            const author=e.target.body.value;
            const options = {
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({title,author})
            }
            fetch('http://localhost:9999/topic',options)
            .then(res=>res.json())
            .then(result=>{console.log(result)});
        }}>
            <p>
                <input type="text" name="title" placeholder="title"></input>
            </p>
            <p>
                <input type="textarea" name="body" placeholder="body"></input>
            </p>
            <p>
                <input type="submit" value="create"></input>
            </p>
        </form>
    )
}