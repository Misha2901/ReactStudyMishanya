export default function UserData(props) {

    const { persons } = props;

    if (!persons || persons.length === 0) {
        return <p>Нет данных</p>
    }



    return (
        <div className="cards">
            {

                persons.map((user) =>
                    <><div className="userCards" key={user.id}>
                        <div className="card"><p>name:{user.name}</p></div>
                        <div className="card"><p>username:{user.username}</p></div>
                        <div className="card"><p>useremail:{user.email}</p></div>
                        <div className="card"><p>usercity:{user.address.city}</p></div>
                    </div><hr /></>



                )

            }
        </div>

    )
}