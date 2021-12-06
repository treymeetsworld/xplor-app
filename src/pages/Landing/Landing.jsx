

const Landing = ({ user }) => {
  return (
    <main className="container">
      <h1 className="text">
        hello, {user ? user.name : "friend"}
      </h1>
      <div>
        <form action="">
        <input type="search"></input>
        <button type="submit">Search</button>
        </form>
      </div>
    </main>
  )
}



export default Landing
