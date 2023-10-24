import logo from './img/logo.png'

export function Legal() {
    return (
        <>
            <p className="italic mx-12 text-white">
                Žaidimas sukurtas remiantis Europos Sąjungos struktūrinių fondų lėšų bendrai finansuojamo projekto „Aukštųjų mokyklų tinklo optimizavimas ir studijų kokybės gerinimas Šiaulių universitetą prijungiant prie Vilniaus universiteto” (Nr. 09.3.1-ESFA-V-738-03-0001) veiklas.
            </p>
            {/* <p className="italic mx-12 text-white text-xs">Logotipai bus pridėti greitu metu</p> */}
            <img src={logo} className='mx-auto max-w-[200px]' />
        </>
    )
}