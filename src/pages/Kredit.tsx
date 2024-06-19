import PersonCard, { Person } from '../components/PersonCard'
import './Kredit.css'

export default function Kredit() {

    const peoples: Person[] = [
        {
            image: "Alvin.jpg",
            nama: "Alvin",
            nim: "2602103601",
            role: "Role",
        },
        {
            image: "Axelle.jpg",
            nama: "Axelle",
            nim: "2602057690",
            role: "Role",
        },
        {
            image: "Catherine.jpg",
            nama: "Catherine",
            nim: "2602072760",
            role: "Role",
        },
        {
            image: "Karina.jpg",
            nama: "Karina",
            nim: "2602103601",
            role: "Role",
        },
        {
            image: "Nicholas.jpg",
            nama: "Nicholas",
            nim: "2602099680",
            role: "Role",
        },
        {
            image: "Shanna.jpg",
            nama: "Shanna",
            nim: "2602077843",
            role: "Role",
        }
    ]

    return (
        <div className="page" id="kredit">
            <p className="kredit-title">Kredit</p>
            <div className='kredit-people'>
                {peoples.map((person, index) => {
                    return <PersonCard key={index} person={person} />
                })}
            </div>
        </div>
    )
}