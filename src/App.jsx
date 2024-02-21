import { useState, useEffect } from 'react'
import contact_list_service from './services/contact_list_service'
import Table from './components/Table'
import Form from './components/Form'

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
      <Form
        contactName={contactName}
        phone={phone}
        email={email}
        setContactName={setContactName}
        setPhone={setPhone}
        setEmail={setEmail}
      />
      <Table contactList={contactList} />
    </div>
  )
}

export default App
