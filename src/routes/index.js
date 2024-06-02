import authRoutes from "./auth.routes";
import homeRoutes from "./home.routes";

const routes = [
    ...authRoutes,
    ...homeRoutes
    // Rutas restantes
];

export default routes; 