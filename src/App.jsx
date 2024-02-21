import { useState, useEffect } from 'react'
import contact_list_service from './services/contact_list_service'
import Table from './components/Table'

function App() {
  const [contactList, setContactList] = useState([])
  const [contactName, setContactName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

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
          Name:
          <input
            type='text'
            name='contactname'
            value={contactName}
            onChange={({ target }) => setContactName(target.value)}
          />
        </div>
        <div>
          Phone:
          <input
            type='text'
            name='phone'
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </div>
        <div>
          email:
          <input
            type='text'
            name='email'
            value={phone}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <Table contactList={contactList} />
    </div>
  )
}

export default App
