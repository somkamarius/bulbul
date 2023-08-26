import { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import bellRing from '../assets/bell.wav'

type Props = {
    durationLevel: number;
    changeHandler: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Timer({ durationLevel, changeHandler }: Props) {
    const durationInSec = (60 * 3) + ((Math.max(durationLevel - 1, 0)) * 60 * 2);
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(new Date().getSeconds() + durationInSec);

    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, autoStart: false, onExpire: () => console.warn('onExpire called') });

    useEffect(() => { restart(expiryTimestamp, false) }, [durationLevel])

    useEffect(() => {
        document.body.addEventListener('Space', (isRunning ? pause : resume));
    }, [])

    useEffect(() => {
        if (minutes === 0 && seconds === 0) {
            changeHandler(true);
            const audio = new Audio(bellRing);
            audio.play()
        }
        else changeHandler(false)
    }, [isRunning])

    return (
        <>
            <div className="flex flex-row items-center justify-center">
                <button className="mr-2" onClick={() => { restart(expiryTimestamp, false); changeHandler(false) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>

                </button>
                <button onClick={(isRunning ? pause : resume)}>
                    {isRunning ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                    </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>}
                </button>
                <progress className="progress progress-warning w-80 h-6 mx-4" value={durationInSec - (minutes * 60 + seconds)} max={durationInSec}></progress>
                {/* <span className="countdown font-semibold text-2xl">
                <span style={{ "--value": minutes }}></span>m
                <span className={'ml-2'} style={{ "--value": seconds }}></span>s
            </span> */}
            </div >
            <div className="mt-8">
                <span className="text-8xl font-semibold">
                    {`${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`}
                </span>
            </div>
        </>
    )
}