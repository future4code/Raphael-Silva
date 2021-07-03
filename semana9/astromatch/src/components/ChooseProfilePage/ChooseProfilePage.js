import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import ChooseButtons from "./ChooseButtons";
import {
  getProfileToChooseRequest,
  chooseProfileRequest
} from "../../api/profiles";

function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState(undefined);

  const getProfileToChoose = () => {
    getProfileToChooseRequest().then(profile => {
      setProfileToChoose(profile);
    });
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const chooseProfile = choice => {
    setProfileToChoose(undefined);

    chooseProfileRequest(choice, profileToChoose.id).then(() => {
      getProfileToChoose();
    });
  };

  const onClickNo = () => {
    chooseProfile(false);
  };

  const onClickYes = () => {
    chooseProfile(true);
  };

  return (
    <div>
      {profileToChoose ? (
        <>
          <ProfileCard profile={profileToChoose} />
          <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes} />
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default ChooseProfilePage;