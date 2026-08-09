//
function script7937(): void {
    IF_SETHIDE(false, comp(1420, 195));
    IF_SETONRESIZE(callback(script7931), comp(1420, 0));
    varclient_3687 = GENDER();
    varclient_2563 = "";
    varclient_2555 = "";
    varclient_2559 = "";
    varclient_1411 = 1;
    varclient_174 = -1;
    varclient_3491 = 0;
    varclient_3495 = (CLIENTCLOCK() + 600);
    varclient_3493 = 0;
    varclient_6880 = 0;
    script7932();
    script7849();
    IF_SETPLAYERMODEL_SELF(93061166);
    stack(93061167);
    unk11064();
    IF_SETMODELZOOM(950, comp(1420, 47));
    IF_SETMODELANGLE(0, 130, 0, 0, 0, 160, comp(1420, 46));
    IF_SETMODELANGLE(-70, 0, 0, 0, 0, 950, comp(1420, 47));
    script8154();
    IF_SETONKEY(callback(script7833, -2147483640, -2147483639), comp(1420, 9));
    if ((script13749() == 1)) {
        IF_SETHIDE(true, comp(1420, 16));
        IF_SETHIDE(false, comp(1420, 17));
        IF_SETHIDE(true, comp(1420, 50));
        IF_SETHIDE(false, comp(1420, 51));
    } else {
        IF_SETHIDE(false, comp(1420, 50));
        IF_SETHIDE(true, comp(1420, 51));
    };
    IF_SETDRAGGABLE(comp(1420, 0), -1, comp(1420, 48));
    varclient_3484 = 0;
    if ((MAP_LANG() != 0)) {
        IF_SETHIDE(true, comp(786, 5));
    };
    IF_SETONTIMER(callback(script7938, (CLIENTCLOCK() + 25)), comp(1420, 8));
    return;
}