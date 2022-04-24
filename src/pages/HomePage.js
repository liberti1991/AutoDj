import React, { useState, useRef } from "react";
import styled from "styled-components";

import { Container } from "react-bootstrap";

import { GoRadioTower } from 'react-icons/go';

// Import components
import Player from "../components/Player";
import Song from "../components/Song";
import Library from "../components/Library";

// Import data
import data from "../data";

const HomePage = ({libraryStatus, setLibraryStatus}) => {
	// Ref
	const audioRef = useRef(null);

	// State
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

	// Functions
	const updateTimeHandler = (e) => {
		const currentTime = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime, duration });
	};

	const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		let nextSong = songs[(currentIndex + 1) % songs.length];
		await setCurrentSong(nextSong);

		const newSongs = songs.map((song) => {
			if (song.id === nextSong.id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSongs);

		if (isPlaying) {
			audioRef.current.play();
		}
	};

	return (
		<Container >
			<Section>
				<HomeContainer libraryStatus={libraryStatus}>
				<Song currentSong={currentSong} />
				<Player
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					currentSong={currentSong}
					setCurrentSong={setCurrentSong}
					audioRef={audioRef}
					songInfo={songInfo}
					setSongInfo={setSongInfo}
					songs={songs}
					setSongs={setSongs}
				/>
				<Library
					songs={songs}
					setCurrentSong={setCurrentSong}
					audioRef={audioRef}
					isPlaying={isPlaying}
					setSongs={setSongs}
					libraryStatus={libraryStatus}
				/>
				<audio
					onLoadedMetadata={updateTimeHandler}
					onTimeUpdate={updateTimeHandler}
					onEnded={songEndHandler}
					ref={audioRef}
					src={currentSong.audio}
				/>
			</HomeContainer>
			<div className="d-flex justify-content-center align-items-center">
				<GoRadioTower size="40px" />
			</div>
		</Section>
	</Container>
	);
};

const Section = styled.section`
	display: grid;
	grid-template-columns: 5fr 2fr;

	border-bottom: 2px solid #e9e9e9;
`;

const HomeContainer = styled.div`
	transition: all 0.5s ease;
	margin-left: ${(p) => (p.libraryStatus ? "20rem" : "0")};
	@media screen and (max-width: 768px) {
		margin-left: 0;
	}
`;

export default HomePage;
