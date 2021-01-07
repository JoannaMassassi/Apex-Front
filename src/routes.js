import leyendsTemplate from './templates/leyends';
import gunsTemplate from './templates/guns';
import trackerTemplate from './templates/tracker';
import homeTemplate from './templates/home'




 const PATHS = {
    home: {
        path: "/",
        template: homeTemplate,
    },
    leyends: {
        path:"/leyends",
        template: leyendsTemplate
    },
    guns: {
        path: "/guns",
        template: gunsTemplate,
    },
    tracker: {
        path: "/tracker",
        template: trackerTemplate,
    }
}


export {PATHS}


