import { useNavigate } from "react-router-dom";
import { ExplainerImage } from "../shared";
import hands from '../shared/img/hands.png'
import { Legal } from "../shared";
import { useState } from "react";
import { MentorRules } from "../MentorScreen/MentorRules";
import { StudentRules } from "./StudentRules";

export function MainScreen() {
  const navigate = useNavigate();

  const [displayRulesMentor, setDisplayRulesMentor] = useState(false)
  const [displayRulesStudent, setDisplayRulesStudent] = useState(false)

  return (
    <div className="bg-[#73C0FF] min-h-screen pb-4">
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
              Sveiki! Čia BUBUL žaidimas. Kada paskutinį kartą kalbėjaisi su savo drauge ar draugu apie savo tikslus ar svajones? Koks filmas tave įkvėpė, kur vasarą keliavai, kokius sapnus sapnuoji ar su kokiu iššūkiu šiuo metu susiduri? Šį žaidimą sukūrėme siekdami pasiūlyti jums įvarių gyvenimiškų temų ir įdomių klausimų tam, kad geriau pažintumėte save ir vieni kitus. Bendravimas yra tai, kas lydi mus visą gyvenimą, tad kodėl nepaBUBULiavus apie ką nors įdomaus?
            </p>
            <div className="mt-10 flex md:flex-row flex-col items-center justify-center gap-6">
              <button
                onClick={() => navigate('/mentor')}
                className="rounded-md bg-[#FFFFFF] px-3.5 py-2.5 text-lg font-semibold text-[#73C0FF] shadow-sm hover:bg-[#f0f3f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Noriu moderuoti
              </button>
              <button
                onClick={() => navigate('/student')}
                className="rounded-md bg-[#FFFFFF] px-3.5 py-2.5 text-lg font-semibold text-[#73C0FF] shadow-sm hover:bg-[#f0f3f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Noriu žaisti!
              </button>
            </div>
            <div className="flex w-full mt-12 place-content-center mr-2">
              <button
                onClick={() => { setDisplayRulesMentor(!displayRulesMentor); setDisplayRulesStudent(false) }}
                className={`rounded-md bg-[#FFFFFF] px-3.5 py-2.5 text-lg font-semibold text-[#73C0FF] shadow-sm hover:bg-[#f0f3f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${displayRulesStudent ? 'bg-[#c2e4ff] hover:bg-[#c2e4ff]' : 'bg-white'}`}
              >
                <div className="flex ">
                  Instrukcijos MODERATORIUI
                </div>
              </button>
              <div className="divider divider-horizontal text-white" />
              <button
                onClick={() => { setDisplayRulesStudent(!displayRulesStudent); setDisplayRulesMentor(false) }}
                className={`rounded-md bg-[#FFFFFF] px-3.5 py-2.5 text-lg font-semibold text-[#73C0FF] shadow-sm hover:bg-[#f0f3f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${displayRulesMentor ? 'bg-[#c2e4ff] hover:bg-[#c2e4ff]' : 'bg-white'}`}
              >
                <div className="flex ">
                  Instrukcijos DALYVIUI
                </div>
              </button>
            </div>
            {displayRulesMentor && <MentorRules />}

            {displayRulesStudent && <StudentRules />}
            <ExplainerImage />
          </div>
        </div>
      </div>
      <Legal />
    </div >
  )
}
