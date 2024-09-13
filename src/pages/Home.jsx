import { useState } from "react";

function Home(){
    const [loading, setLoading] = useState(false);

    const style={width:"688px", height:"522px", border:"6px solid #A02334", marginTop: '10px',
        display: loading ? 'block' : 'none'};

    const cargaVideo = () => {
        setLoading(true);
    }

    return(
        <main>
            <div>
                {!loading && (
                    <img src="https://i.gifer.com/ZKZg.gif" alt="Cargando..." style={{ width: '100px', height: '100px'
                        , marginTop: '180px'}}/>
                )}

                <iframe style={style}
                    src="https://www.youtube.com/embed/7ZQnJSkPD3s" 
                    title="Steve Gadd • Vinnie Colaiuta • Dave Weckl - 1989 Buddy Rich Memorial"  
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    onLoad={cargaVideo}>
                </iframe>
            </div>
        </main>
    )
}

export default Home;