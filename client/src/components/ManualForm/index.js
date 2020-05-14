import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./style.css";


function ManualForm() {
 //setting initial state
 const [teams, setTeams] = useState([])
 const [chosenTeam, setChosenTeam] = useState([])

 //load all teams and store with setTeams
 useEffect(() => {
   loadTeams()
 }, [])

 //load all teams and set to teams
 function loadTeams() {
   API.getTeams()
     .then(res =>
       setTeams(res.data)
       )
       .catch(err => console.log(err));
 }

 
 useEffect(() => {
   selectTeam()
 }, [])


 function selectTeam() {
   //console.log(e.target)
   // API.getTeam(id)
   //   .then(res =>
   //     setChosenTeam(res.data)
   //     )
   //     .catch(err => console.log(err));
 }

 // function handlePick(e) {
   
 //   console.log(e);
 //   console.log(e.currentTarget)
 //   console.log(e.currentTarget.value.id)
 //   // var result = e.options[e.selectedIndex].value;
 //   // var result = e.options[e.index].value;
 //   // console.log(result);
 // }



 return(
   <div className="wrapper">
     <div className="row">
       <div className="col-sm-3">
        <h3>Team #1 </h3>
         <form className="pickOne">
           <select 
           onChange={selectTeam}
           id="pickOne">
           {teams.map(team => (
               <option 
               key={team._id} 
               value id={team.team}>
               {team.team}
               </option>
             ))}
           </select>
         </form>
         <br />
         <br />
         <h3>Team #2 </h3>
         <form className="pickTwo">
         <select 
         onChange={selectTeam}
         id="pickTwo" name="pickTwo">
         {teams.map(team => (
             <option value key={team._id}>
             {team.team}
             </option>
           ))}
         </select>
       </form>
         
       </div>
       <div>
       <br />
       <br />
       <br />
       <br />
       <button className="bttn">GAME TIME!</button>
       </div>
      
     </div>
   </div>
 )
};


export default ManualForm;