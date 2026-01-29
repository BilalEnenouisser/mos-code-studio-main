import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TITLES: Record<string, string> = {
    "/": "ДОБРОсофт - веб студия полного цикла",
    "/about": "О нас - ДОБРОсофт",
    "/contacts": "Контакты - ДОБРОсофт",
    "/portfolio": "Портфолио - ДОБРОсофт",
    "/services": "Услуги - ДОБРОсофт",
    "/privacy": "Политика конфиденциальности - ДОБРОсофт",
    "/terms": "Условия использования - ДОБРОсофт",
    "/portfolio/alfa-bank": "Кейс Альфа-Банк - ДОБРОсофт",
    "/portfolio/rzd": "Кейс РЖД - ДОБРОсофт",
    "/portfolio/rosatom": "Кейс Росатом - ДОБРОсофт",
};

export const TitleUpdater = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        const title = TITLES[path] || "ДОБРОсофт - веб студия полного цикла";
        document.title = title;
    }, [location]);

    return null;
};
