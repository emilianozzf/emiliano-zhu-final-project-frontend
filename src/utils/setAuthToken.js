import axios from "axios";

// Set Authorization Token in axios header after the user logs in and remove it if the user logs out.
    const setAuthToken = token => {
   if (token) {
      axios.defaults.headers.common["Authorization"] = token;
   } else {
      delete axios.defaults.headers.common["Authorization"];
   }
};

export default setAuthToken;
