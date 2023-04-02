import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import uuid from 'react-uuid';
class JokeCollection extends Component {
    static defaultProps = {
        numJoke: 10
    };
    constructor(props){
        super(props);
        this.state = {jokes: []};
    }

    async componentDidMount(){
        let joke = [];
        while(joke.length < this.props.numJoke){
        const config = { headers: { Accept: 'application/json' } };
        let response =  await axios.get('https://icanhazdadjoke.com/', config);

         //put keys into new object {} along with text
        joke.push({ id: uuid(), text : response.data.joke , votes : 0 });
        this.setState({jokes : joke});
        }
    }
    handleVote(id , voting){
        this.setState(st => ({
            jokes : st.jokes.map(joke => 
                // if joke id is equal to id it increases + voting(1 or -1) otherwise not (joke) 
                joke.id === id? {...joke, votes : joke.votes + voting} : joke 
                )
        }))
    }
    render(){
        const jokeData = this.state.jokes.map(joke => ( 
                  <Joke 
                  key={joke.id} 
                  text={joke.text}  
                  vote={joke.votes} 
                  upvote={() => this.handleVote(joke.id,1)}
                  downvote={() => this.handleVote(joke.id,-1)}
                  />
                ))
        return (
            <div className='bg-gray-200 h-full'>
                <Header/>
                {jokeData}
                <Footer/>
            </div>
        )
    }
}
export default JokeCollection;