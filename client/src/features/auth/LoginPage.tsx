const LoginPage = () => {
    return (
      <>
        <h2 className="mb-4 text-xl font-semibold">Login</h2>
        <form className="space-y-4">
          <input className="w-full rounded border p-2" placeholder="Email" />
          <input className="w-full rounded border p-2" type="password" placeholder="Password" />
          <button className="w-full rounded bg-indigo-600 py-2 text-white">
            Login
          </button>
        </form>
      </>
    )
  }
  
  export default LoginPage
  