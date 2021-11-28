import { FullName } from './FullName';



const Characters = ['Ross', 'Rachel', 'Monica', 'Joey', 'Chandler', 'Phoebe'];
const AllCharacters = [];

Characters.forEach(function (data) {
  AllCharacters.push(<li>{data}</li>);
});

return (
  <>
    <h4>🔵 <u>ES6 Modules, function Import Export</u> - </h4><br />
    <div className="content">
      <h3>F.R.I.E.N.D.S Characters</h3>
      <ol className="content">
        <li>{AllCharacters}</li>
      </ol>
      <h3>{FullName()}</h3>
    </div>
  </>
)


export  { AllCharacters };
export { Characters };


