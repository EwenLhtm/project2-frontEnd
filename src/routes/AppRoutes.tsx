import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import SettingsLayout from "../pages/settings/SettingsLayout.tsx";
import ProfileSettings from "../pages/settings/ProfileSettings";
import PasswordSettings from "../pages/settings/PasswordSettings";
import AppearanceSettings from "../pages/settings/AppearanceSettings";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/settings" element={<SettingsLayout />}>
                <Route path="profile" element={<ProfileSettings />} />
                <Route path="password" element={<PasswordSettings />} />
                <Route path="appearance" element={<AppearanceSettings />} />
            </Route>
        </Routes>
    );
}