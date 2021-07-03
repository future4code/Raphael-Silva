import React from "react";
import MatchListItem from "./MatchListItem";
import styled from "styled-components";
import { useMatches } from "../../hooks/useMatches";

const ListContainer = styled.div`
  padding: 8px;
`;

function MatchListPage() {
  const matches = useMatches();

  return (
    <ListContainer>
      {matches.map(profile => {
        return <MatchListItem profile={profile} />;
      })}
    </ListContainer>
  );
}

export default MatchListPage;
