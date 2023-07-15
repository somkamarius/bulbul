import { useEffect, useState } from 'react';
import topics from '../assets/topics.json';
import { Topic } from '../shared/types';

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

export const StudentScreen = () => {
    function getMultipleRandom() {
        const shuffled = [...topics].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, 2);
    }
    const [durationLevel, setDurationLevel] = useState<number>(0);
    let randomSubjects = getMultipleRandom();
    const [topic, setTopic] = useState<Topic | null>(null);
    const [needAdditionalQs, setNeedAdditionalQs] = useState(false);

    useEffect(() => {
        randomSubjects = getMultipleRandom();

    }, [])

    return (
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl pt-12 pb-24 sm:pt-12 sm:pb-32 lg:pt-16 lg:pb-48">

                    <div className="flex items-center justify-center italic">
                        <h2>Klasės pasirinkimas: </h2>
                        <select onChange={e => setDurationLevel(+e.target.value)} className="select select-bordered ml-8">
                            <option value={0} disabled selected>
                                pasirink klasę
                            </option>
                            <option value={1} >5-8 kl.</option>
                            <option value={2}> 9-12 kl.</option>
                        </select>
                    </div >
                    {topic === null ? <div className="text-center">
                        <h1 className="text-center font-semibold text-3xl md:text-4xl lg:text-6xl mt-20 mb-12">
                            Pasirinki vieną iš dviejų temų
                        </h1>
                        <div className="flex sm:flex-row flex-col align-items justify-items gap-8 pb-24">
                            <button className="card max-w-sm mx-auto sm:w-fit bg-base-100 shadow-xl hover:opacity-80" onClick={() => setTopic(randomSubjects[0])}>
                                <div className="card-body">
                                    <h2 className="card-title">{randomSubjects[0].name}</h2>
                                    <p>{randomSubjects[0].level1[0] + " (trumpas aprašymas)"}</p>
                                </div>
                                <figure><img src="https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png" alt="Shoes" /></figure>
                            </button>
                            <button className="card max-w-sm mx-auto sm:w-fit bg-base-100 shadow-xl hover:opacity-80" onClick={() => setTopic(randomSubjects[1])}>
                                <div className="card-body">
                                    <h2 className="card-title">{randomSubjects[1].name}</h2>
                                    <p>{randomSubjects[1].level1[0] + " (trumpas aprašymas)"}</p>
                                </div>
                                <figure><img src="https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png" alt="Shoes" /></figure>
                            </button>
                        </div>
                    </div> :

                        <div className="text-center">
                            <h1 className="text-center font-semibold text-3xl md:text-4xl lg:text-6xl mt-12 mb-4">
                                Tavo pokalbio tema:
                            </h1>
                            <button className='mb-8 rounded-md bg-gray-200 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                onClick={() => { setNeedAdditionalQs(false); setTopic(null); randomSubjects = getMultipleRandom(); }}>
                                Gauti naują temos pasirinkimą
                            </button>
                            <div className="flex sm:flex-row flex-col align-items justify-items gap-8">
                                <div className="card max-w-sm mx-auto sm:w-fit bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title text-left text-xl">{topic.name}</h2>
                                        <p className='text-left italic -mt-2 mb-4'>Pasikalbėkite šia tema
                                            su savo pašnekove/u</p>
                                        {!needAdditionalQs && <button className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' onClick={() => setNeedAdditionalQs(true)}>Gauti papildomų klausimų</button>}
                                        {needAdditionalQs &&
                                            <>
                                                <p className='text-left font-bold'>Papildomi klausimai:</p>
                                                <ul className='text-left list-disc'>
                                                    {getLevel(topic, durationLevel)?.map((text) => {
                                                        return (
                                                            <li className='mb-2'>{text}</li>
                                                        )
                                                    })}
                                                </ul></>}
                                    </div>
                                    <figure><img src="https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png" alt="Shoes" /></figure>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

