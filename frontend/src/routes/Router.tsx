import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/auth/Login";
import Register from "../components/auth/Register";
import Dashboard from "../components/storage/Storage";
import CreateForm from "@/components/createNote/CreateForm";
import { PublicRoute } from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import AppLayout from "@/components/layout/AppLayout";
import { EditNotePage } from "@/components/createNote/EditNote";
import Logout from "@/components/auth/Logout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {/* Public Routes */}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/:username" element={<Dashboard />} />
          <Route path="/new" element={<CreateForm />} />
          <Route path="/note/:id" element={<EditNotePage />} />
          <Route path="/logout" element={<Logout/>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
