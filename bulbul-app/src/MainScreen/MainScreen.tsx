import { useNavigate } from "react-router-dom";
import { ExplainerImage } from "../shared";

export function MainScreen() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-2 lg:px-8">
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
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-48">
          <div className="text-center">
            <h1 className="w-fit mx-auto text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 sm:text-8xl">
              Bul bul
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Žaidimo tikslas - geriau pažinti save ir vieni kitus, gerinti
              komunikacijos įgūdžius.{"\n"}Galimi šalutiniai efektai - klasės suartėjimas, laiko tėkmės pametimas,
              pakylėta nuotaika, vidinis ūgtelėjimas ir t.t.
            </p>
            <div className="mt-10 flex md:flex-row flex-col items-center justify-center gap-6">
              <button
                onClick={() => navigate('/mentor')}
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Noriu moderuoti
              </button>
              <button
                onClick={() => navigate('/student')}
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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
