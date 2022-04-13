export default function Skills(){
    return(
        <>
            <div className="flex flex-col bg-gray-700 p-20  items-center justify-center">
                <h1 className="text-8xl text-slate-300">| SKILLS |</h1>
                <div className="flex flex-row justify-between mt-10">
                    <img className='mr-10' src={require('../images/css3.png')} alt="CSS3" />
                    <img className='mr-10' src={require('../images/html5.png')} alt="HTML5" />
                    <img className='mr-10' src={require('../images/javascript.png')} alt="JavaScript" />
                    <img className='mr-10' src={require('../images/nodejs.png')} alt="nodeJs" />
                    <img className='mr-10' src={require('../images/csharp1.png')} alt="c-sharp" />
                    <img className='mr-10' src={require('../images/react.png')} alt="reactJS" />
                    <img className='mr-10' src={require('../images/postgresql.png')} alt="PostgreSQL" />
                    <img className='mr-10' src={require('../images/jest.png')} alt="Jest" />
                    <img className='mr-10' src={require('../images/mongodb.png')} alt="MongoDB" />
                </div>
                <h2 className='text-xl text-slate-300 mt-10'>More to add as I grow as a developer!</h2>
            </div>
        </>
    )
}