var React = require('react');
var lemosGenerator = require('../lemos-generator.js');

module.exports = React.createClass({
    render: function() {
        var divStyle = {
            textAlign: 'center',
            width: '100%'
        };

        var canvasStyle = {
            visibility: 'collapse'
        };

        lemosGenerator.generate('c', '“' + this.props.wordOfDay + '”');
        return (
            <div style={divStyle}>
                <img src="" id="imagem" />
                <br />
                <canvas id="c" style={canvasStyle} />
            </div>
        )
    }
});
