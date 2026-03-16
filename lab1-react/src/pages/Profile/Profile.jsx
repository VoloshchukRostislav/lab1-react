import { Routes, Route, Link } from 'react-router-dom'

const ProfileOverview = () => <h2>Інформація профілю</h2>
const ProfileSettings = () => <h2>Налаштування профілю</h2>

const Profile = () => {
  return (
    <div>

      <h1>Профіль</h1>

      <nav>
        <Link to="">Інформація</Link>
        <Link to="settings">Налаштування</Link>
      </nav>

      <Routes>
        <Route index element={<ProfileOverview />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

    </div>
  )
}

export default Profile