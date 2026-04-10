import React, {createContext, use} from 'react'
export const userDataContext=createContext()

function UserContext({children}) {
    const serverUrl="http://localhost:5000"
    const [userDataContext,setUserData]=useState(null)
    const handleCurrectUser=async()=>{
        try{
            const result=await axios.get('${serverUrl}/api/user/current',{withCredentials:true})
            setUserData(result.data)
            console.log(result.data)
        }catch (error){
    }
    useEffect(()=>{
        handleCurrectUser()

    },[])
    const value={
  serverUrl,userData,setUserData
    }
  return (
    <div>
        <userDataContext.Provider value={value}>
        {children}
        </userDataContext.Provider>
    </div>
  )
}

export default UserContext