/* 
global React 
global ReactDOM
*/


var AndresApplication = React.createClass({
    render: function() {
        var message = 'Hola from React';

        return <p>{message}</p>;
    }
});


ReactDOM.render(
    <ExampleApplication />,
    document.getElementById('container')
);
