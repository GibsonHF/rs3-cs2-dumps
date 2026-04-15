//
function script5942(): void {
    IF_SETONRESIZE(callback(script5944), comp(1252, 0));
    var int0 = varclient_1787;
    var int1 = varclient_1788;
    if ((script6431() == 1)) {
        int0 = (IF_GETX(comp(1477, 60)) + 2);
        int1 = (IF_GETHEIGHT(comp(1477, 60)) / 2);
        IF_SETSIZE(52, 52, 0, 0, comp(1252, 19));
        IF_SETSIZE(22, 22, 1, 1, comp(1252, 21));
        IF_SETPOSITION(0, 0, 2, 0, comp(1252, 19));
        IF_SETONDRAG(callback(), comp(1252, 1));
        IF_SETDRAGGABLE(-1, -1, 82051073);
    } else {
        IF_SETDRAGGABLE(comp(1252, 0), -1, comp(1252, 1));
    };
    script5945(int0, int1);
    IF_SETONTIMER(callback(script10534, -2147483645, 5), comp(1252, 10));
    IF_SETONVARTRANSMIT(callback(script3564, 1448, 1448, 1448, 3), 82051075);
    return;
}