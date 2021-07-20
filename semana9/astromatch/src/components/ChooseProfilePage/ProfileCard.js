import React from "react";
import styled from "styled-components";

const ProfileCardContainer = styled.div`
  margin: 16px;
  border: 1px solid black;
`;

const ProfilePicture = styled.img`
  width: 100%;
  display: block;
  max-height: 350px;
`;

const ProfileInfo = styled.div`
  padding: 0 16px;
`;

function ProfileCard(props) {
  const { name, age, bio, photo } = props.profile;

  return (
    <ProfileCardContainer>
      <ProfilePicture src={photo} />
      <ProfileInfo>
        <p>
          {name}, {age}
        </p>
        <p>{bio}</p>
      </ProfileInfo>
    </ProfileCardContainer>
  );
}

export default ProfileCard;
