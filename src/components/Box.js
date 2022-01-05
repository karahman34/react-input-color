const Box = ({ color }) => {
  return <div className="Box" style={{ backgroundColor: color }}>
    {color || "Empty Value"}
  </div>
}

export default Box