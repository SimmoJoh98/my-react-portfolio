function MyCard(){
    return(
        <>
            <div id="main-card" className="text-2xl p-20 flex flex-row h-2/4 w-100 bg-gray-800">
                <section id="main-card-info">
                    <h1 className="text-9xl text-slate-300 font-mono">Hi,</h1>
                    <h1 className="text-9xl text-slate-300 font-mono mt-10">I'm <b className="text-green-300">Johnny</b>,</h1>
                    <h1 className="text-9xl text-slate-300 font-mono mt-10">Your Next Developer. <button className="text-5xl rounded p-2 border border-green-300 text-green-300 bg-transparent hover:text-white hover:cursor-pointer hover:border-white duration-300 ml-72" onClick={() => {
                        window.scrollTo({top: 199, left: 0, behavior: 'smooth'})
                    }}>Contact Me</button></h1>
                </section>
            </div>
        </>
    )
}

export default MyCard;