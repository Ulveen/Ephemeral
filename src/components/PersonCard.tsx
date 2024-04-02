import './PersonCard.css'

export interface Person {
    image: string,
    nama: string,
    nim: string,
    role: string
}

interface Props {
    person: Person
}

export default function PersonCard({ person }: Props) {
    return (
        <div className="person-card">
            <img className='person-card-image' src={person.image} />
            <div className='person-card-detail'>
                <p>{person.nama}</p>
                <p>{person.nim}</p>
                {/* <p>As {person.role}</p> */}
            </div>
        </div>
    )
}