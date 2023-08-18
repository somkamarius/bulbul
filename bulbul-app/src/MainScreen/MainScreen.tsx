import { useNavigate } from "react-router-dom";
import { ExplainerImage } from "../shared";
import hands from '../shared/img/hands.png'

export function MainScreen() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#73C0FF]">
      {/* <div className="z-100 bg-[url('../shared/img/hands.png')]" /> */}
      <img src={hands} className="h-auto py-10 sm:py-0 max-h-[200px] mx-auto" />
      <div className="h-full relative isolate px-6 pt-2 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-2xl py-10 sm:py-14 lg:py-24">
          <div className="text-center">
            <h1 className="w-fit mx-auto p-4 text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-white sm:text-8xl">
              Bul bul
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Žaidimo tikslas - geriau pažinti save ir vieni kitus, gerinti
              komunikacijos įgūdžius.{"\n"}Galimi šalutiniai efektai - klasės suartėjimas, laiko tėkmės pametimas,
              pakylėta nuotaika, vidinis ūgtelėjimas ir t.t.
            </p>
            <div className="mt-10 flex md:flex-row flex-col items-center justify-center gap-6">
              <button
                onClick={() => navigate('/mentor')}
                className="rounded-md bg-[#FFCE8E] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#edb66d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Noriu moderuoti
              </button>
              <button
                onClick={() => navigate('/student')}
                className="rounded-md bg-[#FFCE8E] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#edb66d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Noriu žaisti!
              </button>
            </div>
            <ExplainerImage />
          </div>
        </div>
      </div>
    </div>
  )
}
