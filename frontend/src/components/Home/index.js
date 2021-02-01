import { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
  const user = useSelector(state => state.session.user)

  if (user) return <Redirect to={`/users/${user.id}`} />;

        return (
          <>
            <Header />
            <Footer />
           
        </>
    )
    
}

export default Home