import axios from "axios";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas";

export const getProfileToChooseRequest = async () => {
  const response = await axios.get(`${baseUrl}/person`);

  return response.data.profile;
};

export const chooseProfileRequest = (choice, profileId) => {
  const body = {
    choice: choice,
    id: profileId
  };

  return axios.post(`${baseUrl}/choose-person`, body);
};
