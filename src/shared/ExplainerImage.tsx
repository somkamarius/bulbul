import ratas from './img/Ratas.png'

export function ExplainerImage() {
    return (
        <div className="flex mx-auto max-w-2xl min-w-[300px] mt-2">
            <img className="mt-16 card lg:card-side bg-base-100 shadow-xl" src={ratas} alt="Album" />
        </div>
    )
}