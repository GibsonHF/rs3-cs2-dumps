//
function script12306(): void {
    if ((script12328() == false)) {
        CC_DELETEALL(comp(1477, 13));
        CC_DELETEALL(comp(1477, 14));
        return;
    };
    var int0 = -1;
    var int1 = 0;
    IF_SETPARAM_INT(5641, CLIENTCLOCK(), comp(1477, 13));
    if (((varclient_5156 != 0) || (MODULO((CLIENTCLOCK() - varclient_5159), varclient_5157) == 0))) {
        if ((varclient_5157 > 0)) {
            int0 = MODULO(((CLIENTCLOCK() - varclient_5159) / varclient_5157), 256);
        };
        if (((varclient_5156 == 0) && (CC_FIND(comp(1477, 13), int0) == 1))) {
            script12309(comp(1477, 13), int0, 0);
            script12308();
            script12309(comp(1477, 14), 0, 1);
        } else if (((varclient_5156 == 1) || ((varclient_5156 == 2) && (MODULO(CLIENTCLOCK(), 25) == 0)))) {
            script12307();
            int0 = MODULO(((CLIENTCLOCK() - varclient_5159) / varclient_5157), 256);
            int1 = script12309(comp(1477, 13), int0, 1);
            if ((int1 == 1)) {
                script12309(comp(1477, 14), 0, 1);
            };
            if ((int1 == 1)) {
                varclient_5156 = 0;
            };
            if ((script12344(30, 0) == 1)) {
                script12318(script3387(0));
            };
            if ((script12344(30, 1) == 1)) {
                script12318(script3387(1));
            };
        };
    } else if ((MODULO(MODULO((CLIENTCLOCK() - varclient_5159), varclient_5157), varclient_5158) == 0)) {
        script12309(comp(1477, 14), 1, 0);
    };
    return;
}