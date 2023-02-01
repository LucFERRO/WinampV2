// import 'dotenv/config'
import './App.scss';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import AudioPlayer from 'components/AudioPlayer';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AudioPlayer />} />
            </Routes>
        </Router>
    );
}
