import userRoutes from "./user.routes";
import mainRoutes from "./main.routes";
import reportRoutes from "./report.routes";
import communityRoutes from "./community.routes";

const routes = [
    ...userRoutes,
    ...mainRoutes,
    ...reportRoutes,
    ...communityRoutes,
];

export default routes; 