import React, { Component } from 'react'
import one from './icons/1.png'
import two from './icons/2.png'
import three from './icons/3.png'
import four from './icons/4.png'
import five from './icons/5.png'
import six from './icons/6.png'
import seven from './icons/7.png'
import eight from './icons/8.png'

const upvote = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>
const downvote = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
</svg>

class Joke extends Component {
  changeColor(){
    if(this.props.vote >= 15){
        return "#4CAF50" ;
    }else if(this.props.vote >= 12){
        return "#8BC34A";
    }else if(this.props.vote >= 9){
        return "#CDDC39";
    }else if(this.props.vote >= 6){
        return "#FFEB3B";
    }else if(this.props.vote>= 3){
        return "#FFC107";
    }else if(this.props.vote>= 0){
        return "#FF9800";
    }else if(this.props.vote >= -4){
        return "#F44336";
    }else{
        return "#FF3300";
    }
}
changeEmoji(){
    if(this.props.vote >= 15){
        return five ;
    }else if(this.props.vote >= 12){
        return four;
    }else if(this.props.vote >= 9){
        return three;
    }else if(this.props.vote >= 4){
        return one;
    }else if(this.props.vote>= 0){
        return two;
    }else if(this.props.vote>= -2){
        return six;
    }else if(this.props.vote >= -6){
        return seven;
    }else{
        return eight;
    }
}
render(){
    return(
        <div class="container mx-auto  mt-4 antialiased">
        <>
           <div class="bg-gray-100 mx-auto border rounded-lg text-gray-700">
              <div class="flex p-3 border-l-8 shadow-md rounded-lg border-orange-400">
                 <div class="space-y-1 border-r-2 pr-3">
                 <img src={this.changeEmoji()} alt={this.changeEmoji} class="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"/>
                 </div>
                 <div class="flex-1 ">
                    <div class="ml-3 m-2 space-y-1 border-r-2">
                       <div class="text-base leading-6 font-medium">{this.props.text}</div>
                    </div>
                 </div>
                 <div class="border-r-2 pr-3">
                       <button onClick={this.props.upvote} class="bg-gray-800 pt-2 pr-4 pb-2 pl-4 text-lg font-medium text-gray-100 transition-all duration-200 hover:bg-gray-700 rounded-lg">{upvote}</button>
                        <button style={{backgroundColor: this.changeColor()}} class={`pt-1 pr-6 pb-1 pl-6 mr-2 ml-2 text-lg font-medium text-gray-800 transition-all duration-200 rounded-lg`}>{this.props.vote}</button>
                       <button onClick={this.props.downvote} class="bg-gray-800 pt-2 pr-4 pb-2 pl-4 text-lg font-medium text-gray-100 transition-all duration-200 hover:bg-gray-700 rounded-lg">{downvote}</button>   
                 </div>
              </div>
           </div>

           </>
           </div>
    )
}
}
export default Joke;



// <div class="w-3/4 items-center justify-between">
// <div class="flex items-center flex-1 min-w-0">
// <img
//       src={this.changeEmoji()} alt={this.changeEmoji} class="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"/>
//   <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
//     <p class="text-lg font-bold text-gray-800 truncate">{this.props.text}</p>
//   </div>
// </div>
// <div class="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
//     sm:mt-0">
//    <button onClick={this.props.upvote} class="bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
//       duration-200 hover:bg-gray-700 rounded-lg">upvote</button>
//       <button style={{backgroundColor: this.changeColor()}} class={`pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-800 transition-all
//       duration-200 hover:bg-gray-700 rounded-lg`}>{this.props.vote}</button>
//       <button onClick={this.props.downvote} class="bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
//       duration-200 hover:bg-gray-700 rounded-lg">downvote</button>
// </div>
// </div> 