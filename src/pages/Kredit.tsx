import PersonCard, { Person } from '../components/PersonCard'
import './Kredit.css'

export default function Kredit() {

    const peoples: Person[] = [
        {
            image: "",
            nama: "Alvin",
            nim: "2602103601",
            role: "Role",
        },
        {
            image: "",
            nama: "Alvin",
            nim: "2602103601",
            role: "Role",
        },
        {
            image: "",
            nama: "Alvin",
            nim: "2602103601",
            role: "Role",
        },
        {
            image: "",
            nama: "Alvin",
            nim: "2602103601",
            role: "Role",
        },
        {
            image: "",
            nama: "Alvin",
            nim: "2602103601",
            role: "Role",
        },
        {
            image: "",
            nama: "Alvin",
            nim: "2602103601",
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