import React, { useEffect, useState } from 'react'

function GithubUser() {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () =>  {
            try {
                const response = await fetch('https://api.github.com/users/abhirambelorkar')
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json()
                setUser(data)
                setLoading(false)
            } catch(error){
                console.error('Error in fetching...')
                setLoading(false)
            }
        };

        fetchUser();
    }, [])  

    if(loading)  return <h3>Loading...</h3>

  return (
    <div>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <img src={user.avatar_url} alt="avatar" width={100} />
    </div>
  )
}

export default GithubUser