import React, {useEffect, useState} from "react";

function BookResults({searchInput, ref}){
    const [books, setBooks]= useState([]);
    const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_KEY;
    const searchQuery = searchInput;

    useEffect(() =>{
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchQuery)}&key=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            if (data.items){
                setBooks(data.items);
            }
        })
         .catch(err => console.error("Error fetching books:", err));
    }, [searchQuery]);
    return(
        <div ref={ref} id="books-results">
            <h2 class="mb-5">Book Results</h2>
            <div class="container text-center">
                <div class="row">
                        {books.map((book) => {
                            const info = book.volumeInfo;
                            return (
                                <div key={book.id} className="col-md-3 mb-4"> {/* 4 columns per row */}
                                <div className="card h-100 pt-4">
                                    <img
                                    src={info.imageLinks?.thumbnail}
                                    className="card-img-top"
                                    alt={info.title}
                                    style={{ height: "250px", objectFit: "contain" }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{info.title}</h5>
                                    <p className="card-text">
                                        <strong>Author:</strong> {info.authors?.join(", ")}
                                        <br />
                                        <strong>Rating:</strong> {info.averageRating ?? "N/A"} ⭐
                                    </p>
                                    <a
                                        href={info.infoLink}
                                        className="btn btn-primary mt-auto"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View
                                    </a>
                                    </div>
                                </div>
                                </div>
                            );
                        })}
                </div>
            </div>
            
        </div>
    )
}
export default BookResults;