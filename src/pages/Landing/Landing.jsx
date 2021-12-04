

const Landing = ({ user }) => {
  return (
    <main className="container">
      <h1 className="text">
        hello, {user ? user.name : "friend"}
      </h1>
    </main>
  )
}

export default Landing