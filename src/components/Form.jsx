const Form = (props) => {
  const { contactName, phone, email, setPhone, setEmail, setContactName } =
    props
  return (
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
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>
      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  )
}

export default Form
