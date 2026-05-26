//
function script13877(): void {
    if ((HAS_NXT() == 0)) {
        return;
    };
    if ((varclient_3698 != 1)) {
        IF_SETONTIMER(callback(), comp(1477, 920));
        MAP_LOADINGSCREEN_SETTRIGGERPERCENT(0, 0);
    } else {
        IF_SETONTIMER(callback(script8298), comp(1477, 920));
        MAP_LOADINGSCREEN_SETTRIGGERPERCENT(20, 90);
    };
    return;
}