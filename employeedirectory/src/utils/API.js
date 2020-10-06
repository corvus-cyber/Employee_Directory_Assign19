import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=50&nat=us");
  },
  getParticularEmployee: function(employee){
    return axios.get("https://randomuser.me/api/?first=" +employee+ "&limit=5&nat=us")
  }
};