export default function Projects(){
    return(
        <>
            <div className="flex flex-row text-5xl text-slate-300 p-20 bg-gray-800 h-2/4">
                <section>
                    <h1 className="text-6xl">LootR:</h1>
                    <ul className="mt-5 ml-7 list-disc text-2xl">
                        <li>Pure vanilla JavaScript and CSS</li>
                        <li>Sequelize || PostgreSQL || NodeJS || ExpressJS</li>
                        <li>One of a kind unique Item generation</li>
                        <li>Separate player inventories and equipment</li>
                        <li>Authentication with encryption</li>
                        <li>Live Environment On Heroku: <a className="text-green-300 hover:text-white" href="https://loot-roller.herokuapp.com/">Loot-Roller</a></li>
                        <li>GitHub: <a className='text-green-300 hover:text-white' href="https://github.com/SimmoJoh98/loot-roller">Loot-roller</a></li>
                    </ul>
                </section>
                <img className="ml-96 shadow shadow-md shadow-black" src={require('../images/LOOTRGIF.gif')} alt="Loot Roller Demo Animated" />
            </div>
        </>
    )
}