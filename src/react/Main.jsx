var React = require('react');
var $ = require('jquery');
var fx = require('money');
var qs = require('qs');

var Lemurify = require('./Lemurify.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        var frases = [
            "Quem da rasteira em cururu é lodo",
            "Se... Se... Se... ...se minha mãe tivesse oito peitos eu seria um bacurim!",
            "Pra cima de mala só poeira",
            "Você pra mim é problema seu",
            "Há três tipos de problema: o meu, o nosso e o seu. Esse não é nem meu nem nosso.",
            "Na teoria, a prática é linda. Na prática, a teoria é uma porcaria!"
        ];
        return {
            wordOfDay: frases[Math.floor(Math.random()*frases.length)]
        }
    },

    render: function() {
        return (
            <Lemurify wordOfDay={this.state.wordOfDay} />
        )
    }
});
