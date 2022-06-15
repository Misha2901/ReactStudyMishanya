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
                        <p>name:{user.name}</p>
                        <p>username:{user.username}</p>
                        <p>useremail:{user.email}</p>
                        <p>usercity:{user.address.city}</p>
                    </div><hr /></>



                )

            }
        </div>

    )
}