import { useState } from "react";
import { Legal, Timer } from "../shared";

export function MentorScreen() {
    const [durationLevel, setDurationLevel] = useState<number>(0);
    const [isFinished, setIsFinished] = useState(false)

    return (
        <div className="bg-[#73C0FF] text-white  min-h-screen pb-4">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl pt-12 pb-24 sm:pt-12 sm:pb-32 lt:pt-24 lg:pb-48">
                    <div className="text-center">
                        <h1 className="text-center font-bold text-6xl mt-8 mb-12">
                            {/* fixme */}
                            {isFinished ? "Apskeiskim!" : "Laikas pokalbiui!"}
                        </h1>
                        <Timer durationLevel={durationLevel} changeHandler={setIsFinished} />
                        <p className="mx-[15%] my-12">
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
            <Legal />
        </div>
    )
}