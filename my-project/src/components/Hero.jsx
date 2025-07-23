export default function Hero({isDarkMode}) {
  return (
   <div className="w-100 vh-100 p-5 d-flex flex-column align-items-center justify-content-center">
    <div className="hero-text mt-5 d-flex flex-column align-items-center justify-content-center">
        <h1>Welcome to book lovers,</h1>
        <p className="w-80 p-3">Welcome to Book Club, the website that accomodates readers who are interested in forming connections all around the world! Do you want to discuss a plot or marvel at the personality traits of a hero in the book you are currently reading? Well sign up for Book Club to begin sharing your thoughts with others.</p>
    </div>
     
    <button className="btn btn-primary text-white">Sign up</button>
   </div>  
  )
}



