export const getWorkers = async () => {
    try{
    const res = await fetch('http://localhost:3001/workers')
    const data = await res.json()
    return data
    } catch(error){
        console.error(error)
    }
}