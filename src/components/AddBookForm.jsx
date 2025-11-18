import React,{useState} from "react";

const AddBookForm=()=>{

    const [formData , setFormData]= useState({

        title: "",
        author : "",
        publishedYear : "",
        genre : "",
        language : "",
        country : "",
        rating : "",
        summary : "",
        coverImageUrl : "",
    })


    const handleChange=(e)=>{

        const {name ,value}=e.target

        setFormData((prevState)=>({...prevState,[name]:name === "publishedYear"||name ==="rating"?parseInt(value):value}))



    }

    const handelSubmit =async(event)=>{

        event.preventDefault()

        try{

            const response = await fetch("http://www.localhost:3004/books",


                {

                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"

                    },
                    body : JSON.stringify(formData)
                }

            )

            if(!response.ok){

                throw "Failed to add Book"
            }

            const data = await response.json()
            console.log("Added movie", data)





        }catch(error){

            console.log(error)
        }
    }

    return(
        <div>

            <h2>Add a New Book</h2>

            <form onSubmit={handelSubmit}>

                <label htmlFor="">Title</label>
                <br />
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="">Author</label>
                <br />
                <input type="text" name="author" value={formData.author} onChange={handleChange}/>
                <br />
                <br />
                <label htmlFor="">Published Year</label>
                <br />
                <input type="number" name="publishedYear" value={formData.publishedYear} onChange={handleChange} />

                <br />
                <br />
                <label htmlFor="">Genre</label>
                <br />
                <input type="text" name="genre" value={formData.genre} onChange={handleChange}/>

                <br />
                <br />
                <label htmlFor="">Language</label>
                <br />
                <input type="text" name="language" value={formData.language} onChange={handleChange} />

                <br />
                <br />
                <label htmlFor="">Country</label>
                <br />
                <input type="text" name="country" value={formData.country} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="">Rating</label>
                <br />
                <input type="number" name="rating" value={formData.rating} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="">Summary</label>
                <br />
                <input type="text" name="summary" value={formData.summary} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="">Cover Url</label>
                <br />
                <input type="text" name="coverImageUrl" value={formData.coverImageUrl} onChange={handleChange} />
                <br /><br />
                <button type="submit">Submit</button>


            </form>






        </div>
    )







}


export default AddBookForm;