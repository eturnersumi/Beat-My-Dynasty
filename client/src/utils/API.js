import axios from "axios";

export default {
  // Gets all Teams
  getTeams: function() {
    return axios.get("/api/teams");
  },
  // Gets the Team with the given id
  getTeam: function(id) {
    return axios.get("/api/teams/" + id);
  },
  getTeamName: function(team) {
    return axios.get("/api/teams/" + team);
  },
  // Deletes the Team with the given id
  deleteTeam: function(id) {
    return axios.delete("/api/teams/" + id);
  },
  // Saves a Team to the database
  saveTeam: function(teamData) {
    return axios.post("/api/teams", teamData);
  }
};
