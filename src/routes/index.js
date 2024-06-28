import authRoutes from "./auth.routes";
import mainRoutes from "./main.routes";
import reportRoutes from "./report.routes";
import communityRoutes from "./community.routes";

const routes = [
    ...authRoutes,
    ...mainRoutes,
    ...reportRoutes,
    ...communityRoutes,
    // Rutas restantes
];

export default routes; 