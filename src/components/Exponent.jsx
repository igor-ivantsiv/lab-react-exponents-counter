function Exponent({ count, power }) {
  let string = `${count}`;
  for (let i = 0; i < power - 1; i++) {
    string += ` * ${count}`;
  }
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {count}
        <sup>{power}</sup>
      </p>
      <p className="exponent-result">
        {string} = <span className="total">{Math.pow(count, power)}</span>
      </p>
    </div>
  );
}

export default Exponent;
