var React = require('react');
var $ = require('jquery');
var fx = require('money');
var qs = require('qs');

var Lemurify = require('./Lemurify.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        var frases = [
            "Quem dá rasteira em cururu é lodo",
            "Se... Se... Se...minha mãe tivesse oito peitos eu seria um bacurim!",
            "Pra cima de mala só poeira",
            "Você pra mim é problema seu",
            "Há três tipos de problema: o meu, o seu e o nosso. Esse não é nem meu nem nosso."
        ];
        return {
            wordOfDay: frases[Math.floor(Math.random()*frases.length)],
            phrases: frases,
            index: 0,
            interval: 0
        }
    },

    componentDidMount: function() {
        var intervalo = setInterval(function() {
            var index = Math.floor((this.state.index + 1)/this.state.phrases.length) > 0 ? 0 : this.state.index + 1;
            var chosenPhrase = this.state.phrases[(index)];
            this.setState({
                wordOfDay: chosenPhrase,
                index: index
            })
        }.bind(this), 5000);

        this.setState({
            interval: intervalo
        });
    },

    componentWillUnmount: function() {
        clearInterval(this.state.interval);
    },

    render: function() {
        return (
            <Lemurify wordOfDay={this.state.wordOfDay} />
        )
    }
});
