export default function Bookofthemonth({isDarkMode}) {
  return (
    <div className="hero Card-bg d-flex flex-column align-items-center justify-content-center">
    <div className={`hero-text m-3 card ${isDarkMode ? 'bg-secondary text-bg-dark' : 'bg-light '}`}>
        <div className="card-header">
            Featured Book Club of the Month
        </div>
        <div className="d-flex flex-row align-items-center justify-content-center">
            <div className="h-100 w-50 d-flex flex-column align-items-center justify-content-center p-3">
                <img
                    src="/romance.jpg"
                    alt="good girl complex"
                    className="w-50 h-75"
                />
                <h4>Good Girl Complex</h4>
                <a href="#" className={`mb-1 ${isDarkMode ? 'btn btn-dark text-white' : 'btn btn-success text-white'}`}>Buy on Amazon</a>
                <a href="#" className={`mb-1 ${isDarkMode ? 'btn btn-primary text-white' : 'btn btn-primary text-white'}`}>Add to wishlist</a>
            </div>
            <div className="w-50 card-body">
                <h5 className="card-title">Over <span className="text-success">100</span> bookclub members</h5>
                <p className="card-text">Good Girl Complex is a contemporary romance novel about Mackenzie “Mac” Cabot, a rule-following, people-pleasing college student who moves to the beach town of Avalon Bay for school.</p>
                <a href="#" target="_blank" class="external">Read reviews</a>
                <p className="card-text">Book rating</p>
                <a href="#" className={`${isDarkMode ? 'btn btn-primary text-white' : 'btn btn-primary text-white'}`}> Join this bookclub</a>            
            </div>
        </div>
        
    </div>
     <img src="/orange vector.png" alt="Background Graphic" className="hero-bg"/>

   </div>  
  )
}



