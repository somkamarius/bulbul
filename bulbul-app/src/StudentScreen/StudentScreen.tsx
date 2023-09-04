import { useEffect, useState } from 'react';
import shuffle from 'just-shuffle';
import topics from '../assets/topics.json';
import { Topic } from '../shared/types';
import { Legal } from '../shared';

function getLevel(topic: Topic, level: number) {
    if (level === 1 || level === 0) {
        return topic.level1
    }

    if (level === 2) {
        return topic.level2
    }

    if (level === 3) {
        return topic.level3
    }
}

//TODO NULL AFTER TOPIC IS SET, SO THAT AFTER TOPIC IS NULL AGAIN, WE REFRESH FRESHLY
//TODO SPINNER
export const StudentScreen = () => {
    const [durationLevel, setDurationLevel] = useState<number>(0);
    const [randomSubjects, setRandomSubjects] = useState<typeof topics>([]);
    const [topic, setTopic] = useState<Topic | null>(null);
    const [needsChange, setNeedsChange] = useState(false);
    const [imgUrl1, setImageUrl1] = useState<URL | null>(null);
    const [imgUrl2, setImageUrl2] = useState<URL | null>(null);
    const [majorImg, setMajorImg] = useState<URL | null>(null);

    const [loaded1, setLoaded1] = useState(false);
    const [loaded2, setLoaded2] = useState(false);

    useEffect(() => {
        setLoaded1(false);
        setLoaded2(false);
        const zoop = shuffle(topics, { shuffleAll: true }).slice(0, 2);
        console.log('zzop', zoop)
        setRandomSubjects(zoop);
        setImageUrl1(new URL(`../assets/imgs/${zoop[0].name.replace('/', '')}.png`, import.meta.url))
        setImageUrl2(new URL(`../assets/imgs/${zoop[1].name.replace('/', '')}.png`, import.meta.url))
    }, [needsChange])

    if (randomSubjects.length < 2 || !imgUrl1 || !imgUrl2) {
        return (<div className="bg-[#73C0FF] min-h-screen flex justify-center items-center ">
            <span className="loading loading-spinner loading-lg "></span>
        </div >)
    }

    return (
        <div className="bg-[#73C0FF] min-h-screen pb-4">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                {/* fixme */}
                <div className="mx-auto max-w-2xl pt-6 pb-24 sm:pt-10 sm:pb-32 lg:pt-12 lg:pb-48">
                    {/* <button className='ml-0' onClick={() => navigate('/')}>
                        <div className='flex flex-row '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-2 mr-1 w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>
                            <p className='text-sm'>Grįžti atgal</p>
                        </div>
                    </button> */}

                    {topic === null ? <div className="text-center">
                        <h1 className="text-white text-center font-bold text-3xl md:text-4xl lg:text-6xl mt-12 mb-12">
                            {durationLevel > 0 ? 'Pasirinki vieną iš dviejų temų!' : 'Pasirinki savo klasę!'}
                        </h1>

                        <div className="flex items-center justify-center italic mb-12">
                            <h2 className='text-white'>Klasės pasirinkimas: </h2>
                            <select onChange={e => setDurationLevel(+e.target.value)} defaultValue={durationLevel} className="select select-bordered ml-8">
                                <option value={0} disabled>
                                    pasirink klasę
                                </option>
                                <option value={1} >5-8 kl.</option>
                                <option value={2}> 9-10 kl.</option>
                                <option value={3}> 11-12 kl.</option>
                            </select>
                        </div >


                        {durationLevel > 0 ? <div className="flex sm:flex-row flex-col align-items justify-items gap-8 pb-24">
                            <button className="card max-w-sm mx-auto sm:w-fit bg-base-100 shadow-xl hover:opacity-80" onClick={() => { setTopic(randomSubjects[0]); setMajorImg(imgUrl1) }}>
                                <div className="card-body">
                                    <h2 className="card-title font-semibold mx-auto">{randomSubjects[0].name}</h2>
                                </div>
                                <figure>
                                    {!loaded1 ? <div className="w-[320px] h-[213px] flex justify-center items-center ">
                                        <span className="loading loading-spinner loading-lg "></span>
                                    </div > : <></>}
                                    <img src={imgUrl1?.href} alt={randomSubjects[0].name} onLoad={() => setLoaded1(true)} style={{ display: loaded1 ? 'block' : 'none' }} />
                                </figure>                            </button>
                            <button className="card max-w-sm mx-auto sm:w-fit bg-base-100 shadow-xl hover:opacity-80" onClick={() => { setTopic(randomSubjects[1]); setMajorImg(imgUrl2) }}>
                                <div className="card-body">
                                    <h2 className="card-title mx-auto">{randomSubjects[1].name}</h2>
                                </div>
                                <figure>
                                    {!loaded2 ? <div className="w-[320px] h-[213px] flex justify-center items-center ">
                                        <span className="loading loading-spinner loading-lg "></span>
                                    </div > : <></>}
                                    <img src={imgUrl2?.href} alt={randomSubjects[1].name} onLoad={() => setLoaded2(true)} style={{ display: loaded2 ? 'block' : 'none' }} />
                                </figure>
                            </button>
                        </div> : <></>}

                    </div>
                        :

                        <div className="text-center">
                            <h1 className="text-white text-center font-bold text-3xl md:text-4xl lg:text-6xl mt-12 mb-8">
                                Tavo pokalbio tema:
                            </h1>
                            <div className="flex items-center justify-center italic mb-12">
                                <h2 className='text-white'>Klasės pasirinkimas: </h2>
                                <select onChange={e => setDurationLevel(+e.target.value)} defaultValue={durationLevel} className="select select-bordered ml-8">
                                    <option value={0} disabled>
                                        pasirink klasę
                                    </option>
                                    <option value={1} >5-8 kl.</option>
                                    <option value={2}> 9-10 kl.</option>
                                    <option value={3}> 11-12 kl.</option>
                                </select>
                            </div >

                            <button className=' text-[#73C0FF] mb-8 rounded-md bg-[#FFFFFF] px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-[#f0f3f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                onClick={() => {
                                    setTopic(null);
                                    setNeedsChange(!needsChange);
                                    setImageUrl1(null);
                                    setImageUrl2(null);
                                }}>
                                Gauti naują temos pasirinkimą
                            </button>
                            <div className="flex sm:flex-row flex-col align-items justify-items gap-8">
                                <div className="card max-w-sm mx-auto sm:w-fit bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="font-bold card-title text-left text-xl">{topic.name}</h2>
                                        <p className='text-left italic -mt-2 mb-4'>Pasikalbėkite šia tema
                                            su savo pašnekove/u</p>
                                        <p className='text-left font-bold'>Papildomi klausimai:</p>
                                        <ul className='text-left list-disc'>
                                            {getLevel(topic, durationLevel)?.map((text) => {
                                                return (
                                                    <li className='mb-2'>

                                                        <div dangerouslySetInnerHTML={{ __html: text }} /></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <figure><img src={majorImg?.href} alt="Shoes" /></figure>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <Legal />
        </div>
    )
}

