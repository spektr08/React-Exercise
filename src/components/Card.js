import getGradient from "../lib/getGradient"

function Card({ card }) {
    const color = getGradient(card.houseColours);
    return (
        <div
            class="block rounded-lg bg-white p-6  border border-gray-400 mb-2">
            <div class="flow-root ">
                <span
                    class="mb-2 text-xl font-bold leading-tight float-left">
                    {card.name}
                </span>
                <span
                    class="mb-2 leading-tight font-light float-right">
                     {card.animal}
                </span>
            </div>
            <div class="mb-2 h-4 overflow-hidden rounded bg-gray-200">
                <div style={{background: 'linear-gradient(90deg in oklab, '+color[0]+', '+color[1]+')'}} class="h-4 rounded" ></div>
            </div>
            <span
                class="mb-2 font-light leading-tight ">
                Founder:
            </span>
            <span
                class="mb-2 pl-1  font-bold leading-tight ">
                 {card.founder}
            </span>
        </div>
    )
}
export default Card