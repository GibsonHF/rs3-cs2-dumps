//
function script13877(): void {
    if ((HAS_NXT() == 0)) {
        return;
    };
    if ((varclient_3698 != 1)) {
        IF_SETONTIMER(callback(), 96797592);
        MAP_LOADINGSCREEN_SETTRIGGERPERCENT(0, 0);
    } else {
        IF_SETONTIMER(callback(script8298), 96797592);
        MAP_LOADINGSCREEN_SETTRIGGERPERCENT(20, 90);
    };
    return;
}