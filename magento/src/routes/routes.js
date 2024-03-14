import config from '~/config';
import Home from '~/pages/Home';
import ProductView from '~/pages/ProductView';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.product_view, component: ProductView },
];
export { publicRoutes };
