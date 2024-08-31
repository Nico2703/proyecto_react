
function Home(){
    const style={width:"688px", height:"522px", border:"6px solid #A02334", marginTop: '10px'};
    return(
        <main>
            <div>
                <iframe style={style}
                    src="https://www.youtube.com/embed/7ZQnJSkPD3s" 
                    title="Steve Gadd • Vinnie Colaiuta • Dave Weckl - 1989 Buddy Rich Memorial"  
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin">
                </iframe>
            </div>
        </main>
    )
}

export default Home;