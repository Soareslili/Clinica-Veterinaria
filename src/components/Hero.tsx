
import HeroImage from '../assets/HeroPet.png'

const Hero = () => {
    return(
        <section className="relative h-screen w-full overflow-hidden mt-18">
            
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(${HeroImage})`}}
            >
                <div className='absolute inset-0 bg-gradient-to-r from-black/70 to-transparent'/>
            </div>

            <div className='relative h-full container mx-auto px-4 flex items-center'>
                <div className='max-2xl text-white space-y-6 animate-fade-in'>
                    <h1 className='text-5xl md:text-6xl font-bold leading-tight'>
                        Refinando o mundo<br />um animal de estimação de cada vez.

                    </h1>
                    <p className='text-lg md:text-xl text-white/90'>
                        Cuidando com amor, tecnologia e expertise.
                    </p>

                    <a className='inline-block bg-primary cursor-pointer hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate'>
                        Entre em Contato
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Hero;