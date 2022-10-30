import UserResults from "../components/users/UserResults"
import UserSearch from "../components/UserSearch"


function Home() {
  return (
    <>
      {/* SEARCH COMPONENTS */}
      
      <UserSearch />
      <UserResults />
      
      {/* process.env.REACT_APP_GITHUB_TOKEN */}
    </>
  )
}
export default Home