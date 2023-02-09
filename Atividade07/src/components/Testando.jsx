import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useRef, useState, useEffect } from "react"
import napster from "../services/napster"
import PauseIcon from "@mui/icons-material/Pause";


export default function Testando() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [tracks, setTracks] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const music = useRef()
    const key = "ZTVhYTU3MWEtZjRhNy00MmRmLWJiZDAtNjQwNTAwN2E0ODhi"

    useEffect(() => {
        getMusics()
    }, [])

    useEffect(() => {
        console.log(tracks)
    }, [tracks])

    const getMusics = async () => {
        let musics = await napster.get(`top?apikey=${key}`).then((r) => r)
        setTracks(musics.data.tracks)
    }

    const loadSong = url => {
        music.current.src = url
        play()
    }

    const play = () => {
        music.current.play()
        setIsPlaying(true)
    }

    const pause = () => {
        music.current.pause()
        setIsPlaying(false)
    }

    const next = () => {
        setCurrentIndex(i => i > 19 ?  0 : i + 1)
        loadSong(currentIndex + 1)
    }

    const prev = () => {
        setCurrentIndex(i => i < 0 ?  19 : i - 1)
        loadSong(currentIndex - 1)
    }

    const theme = useTheme();
    
    return (
        <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
                {tracks[currentIndex]?.name}
            </Typography>
            
            <Typography variant="subtitle1" color="text.secondary" component="div">
                {tracks[currentIndex]?.artistName}
            </Typography>
            </CardContent>
            
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            
            <IconButton aria-label="previous" onClick={ prev }>
                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            
            <audio ref={music} src={tracks[currentIndex]?.previewURL || "https://listen.hs.llnwd.net/g2/prvw/4/2/4/9/8/911189424.mp3"} > </audio>
            
            <IconButton aria-label="play/pause" onClick={ isPlaying ? pause : play}>
                { isPlaying ? <PauseIcon fontSize="large" /> : <PlayArrowIcon sx={{ height: 38, width: 38 }} />}
            </IconButton>
            
            <IconButton aria-label="next"  onClick={ next }>
                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
            </Box>
        </Box>
        <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="http://1.bp.blogspot.com/-Tk5i7cRrKHA/VVnEOwgWr7I/AAAAAAAA1fY/qG_pijBKA60/s1600/mariagaduguelacapa.png"
            alt="Live from space album cover"
        />
        </Card>
    );
    }