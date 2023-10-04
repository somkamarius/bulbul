import { useState } from "react";
import { Legal, Timer } from "../shared";
import { MentorRules } from "./MentorRules";

export function MentorScreen() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isFinished, setIsFinished] = useState(false)
    const [displayRules, setDisplayRules] = useState(false)

    return (
        <div className="bg-[#73C0FF] text-white  min-h-screen pb-4">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl pt-12 pb-24 sm:pt-12 sm:pb-32 lt:pt-24 lg:pb-48">
                    <div className="text-center">
                        <h1 className="text-center font-bold text-6xl mt-8 mb-12">
                            {/* fixme */}
                            {isFinished ? "Apskeiskim!" : "Laikas pokalbiui!"}
                        </h1>
                        <Timer changeHandler={setIsFinished} />
                        <button
                            onClick={() => setDisplayRules(!displayRules)}
                            className="mx-[15%] mt-12 rounded-md bg-[#FFFFFF] px-3.5 py-2.5 text-lg font-semibold text-[#73C0FF] shadow-sm hover:bg-[#f0f3f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <div className="flex ">
                                Instrukcijos MODERATORIUI
                                {!displayRules ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-auto ml-1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-auto ml-1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                                }
                            </div>
                        </button>
                        {displayRules && <MentorRules />}
                    </div>
                </div>
            </div>
            <Legal />
        </div>
    )
}