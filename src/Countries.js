import './App.css';

export default function Countries() {
  function handleCountryChange() {
    console.log('country changed');
  }

  return (
    <div>
      <select onChange={handleCountryChange} className='countries'>
        <option>Italy</option>
        <option>Spain</option>
        <option>France</option>
      </select>
    </div>
  );
}
