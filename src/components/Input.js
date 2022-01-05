const Input = ({ handleInput }) => {
  return <input type="text" className="Input" placeholder="Add color name" autoFocus onChange={e => handleInput(e.target.value)} />
}

export default Input