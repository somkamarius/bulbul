import { useState } from "react";
import { Timer } from "../shared";

export function MentorScreen() {
    const [durationLevel, setDurationLevel] = useState<number>(0);
    const [isFinished, setIsFinished] = useState(false)

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
                <div className="mx-auto max-w-2xl pt-12 pb-24 sm:pt-12 sm:pb-32 lt:pt-24 lg:pb-48">
                    <div className="text-center">
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
                        <h1 className="text-center font-semibold text-6xl mt-20 mb-12">
                            {isFinished ? "Apskeiskim!" : "Laikas pokalbiui!"}
                        </h1>
                        <Timer durationLevel={durationLevel} changeHandler={setIsFinished} />
                        <p className="mx-[15%] my-20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            facilisis purus consectetur mi imperdiet, vel pretium orci efficitur.
                            Aliquam erat volutpat. Maecenas dictum odio iaculis mauris sagittis
                            viverra. Vestibulum ut nulla cursus, porttitor enim quis, vehicula
                            tortor. Proin rhoncus sagittis mauris pulvinar rutrum. Nulla consequat
                            eros ut ex vulputate, eget bibendum tellus rhoncus. Etiam cursus
                            suscipit ante, nec efficitur risus egestas non. Sed ac lacinia tortor.
                            Vivamus ullamcorper, mi eu tempor iaculis, urna dui venenatis augue, et
                            aliquet ligula mi sit amet velit. Integer luctus, sapien in pretium
                            dictum, ante massa vehicula odio, vel consequat tortor sem a ex. Morbi
                            vitae lectus quis ante tempor facilisis. Fusce vel elit purus. Donec ut
                            tincidunt dui, eu luctus justo.{" "}
                        </p>


                    </div>
                </div>
            </div>
        </div>
    )
}