import { useState } from "react";

export const MentorRules = () => {
    const [displayText, setDisplayText] = useState(false)

    return (<p className="mx-[15%] my-6 text-white">

        Sveiki. <br />Šiam žaidimui jums reikės tuščios erdvės ir kėdžių bei išmaniųjų įrenginių (pvz., telefonų). Galite pasirinkti kiek laiko kalbėsis kiekviena pora.
        <br />

        <br />
        Tuomet pakvieskite dalyvius susėsti poromis (nesvarbu kas su kuo, nes poros keisis) vienas priešais kitą. Jeigu žaidimas žaidžiamas didesnėje grupėje, rekomenduojama susėsti dviem ratais (išoriniu ir vidiniu) arba dviem linijomis viena priešais kitą. Vienas ratas ar linija žaidimo metu lieka toje pačioje vietoje, o kitas ratas ar linija pasikalbėjus pajuda per vieną kėdę į sutartą pusę. Turite nuspręsti kuri linija/ratas liks vietoje, o kuri judės. Praėjus pasirinktam pokalbio laikui, moderatorius sušunka KEIČIAMĖS, LAIKAS ar kitas jūsų sugalvotas burtažodis ir pasikeitus poroms bei pasirinkus naujas temas, žaidimas tęsiasi.
        <br /><br />
        <span className="font-bold">SMAGAUS IR TURININGO ŠURMULIO!</span>
        <br /><br />
        <span className="italic">P.S. Jeigu dalyvių skaičius nelyginis, galima pasiūlyti vienam iš dalyvių būti moderatoriumi ir sekti laiką. Jei tokio žmogaus neatsiranda, prsijunkite prie žaidimo, kad visi turėtų startines poras.</span>

        <br /><br />
        <button
            onClick={() => setDisplayText(!displayText)}
            className={`mb-4 rounded-md self-center bg-[#FFFFFF] px-3 py-1 text-lg font-semibold text-[#73C0FF] shadow-sm hover:bg-[#f0f3f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        >
            <div >
                <div className="flex flex-row">Laiko rekomendacijos{!displayText ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 ml-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 ml-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>

                }</div>
            </div>
        </button>
        <br />
        {displayText && <><ul>
            <li >
                5-8kl. - rekomenduojamas laiko tarpas 2min.
            </li>
            <li>
                9-10kl. - 3min.
            </li>
            <li>
                11-12 kl. - nuo 4min, priklausomai nuo to kiek laiko iš viso turite arba kiek dalyvių yra.
            </li>
        </ul>
            <br />

            Kiek laiko iš viso reikės galite sužinoti padauginę porų skaičių iš pasirinkto minučių kiekio vienam pokalbiui skaičiaus, <br /><p className="italic">pvz., 10porų x 3min = 30min.</p>

            <br /> P.S. Pradžioje gali reikėti šiek tiek daugiau laiko, kol suprasite kaip veikia žaidimas.<br /> </>}
    </p >)
}