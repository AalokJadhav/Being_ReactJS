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

function SimpleGreeting() {
    return (
        <>
            <h4>🔵 <u>Challenge</u> - Simple Greeting As Timeline change the expression of farewell (ie.Good Morning/Afternoon/Night)</h4><br />
            <div className="challenge1">
                <h1>Hello World...<span style={cssStyle}> {greeting}</span></h1>
            </div>
            <br />
        </>
    )
}

export default SimpleGreeting;