import authRoutes from "./auth.routes";
import mainRoutes from "./main.routes";

const routes = [
    ...authRoutes,
    ...mainRoutes
    // Rutas restantes
];

export default routes; 