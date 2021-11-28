const fullDate = new Date();
const date = fullDate.toLocaleDateString();
const time = fullDate.toLocaleTimeString();

const CurrDate = new Date(2021, 14, 10, 9);
const hour = CurrDate.getHours();
let greeting = '';

const cssStyle = {}

if (hour >= 1 && hour < 12) {
  greeting = 'Good Mooring..🙂';
  cssStyle.color = 'green';
} else if (hour >= 12 && hour < 19) {
  greeting = 'Good Afternoon..🙄';
  cssStyle.color = 'orange';
} else {
  greeting = 'Good Night..😴';
}

<>
<br /><br /><br /><br />
    <h4>Hello  World From ReactJS...✋</h4><br />

    <h4>🔵 <u>Display Current date and time in JSX</u> -</h4><br />
    <div className="content">
      <p>Current Date is {`${date}`} </p>
      <p>Current Time is {`${time} `} </p>
    </div>
    <br />

    </>

    export default Date;