import { useState, useEffect } from 'react'
import contact_list_service from './services/contact_list_service'
import Table from './components/Table'

function App() {
  const [contactList, setContactList] = useState([])
  const [contactName, setContactName] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const data = await contact_list_service.getAll()

      setContactList(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Contact List</h1>
      <form>
        <div>
          Name: <input type='text' name='contactname' />
        </div>
      </form>
      <Table contactList={contactList} />
    </div>
  )
}

export default App
