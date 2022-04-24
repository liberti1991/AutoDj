import React from "react";
import styled from "styled-components";

const Song = ({ currentSong }) => {
	return (
		<SongContainer>
			<h1>{currentSong.name}</h1>
			<h2>{currentSong.artist}</h2>
		</SongContainer>
	);
};

const SongContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		padding-top: 20px;
	}

	h2 {
		padding: 10px;
	}
`;

export default Song;
