//
function script5942(): void {
    IF_SETONRESIZE(callback(script5944), 82051072);
    var int0 = varclient_1787;
    var int1 = varclient_1788;
    if ((script6431() == 1)) {
        int0 = (IF_GETX(96796732) + 2);
        int1 = (IF_GETHEIGHT(96796732) / 2);
        IF_SETSIZE(52, 52, 0, 0, 82051091);
        IF_SETSIZE(22, 22, 1, 1, 82051093);
        IF_SETPOSITION(0, 0, 2, 0, 82051091);
        IF_SETONDRAG(callback(), 82051073);
        IF_SETDRAGGABLE(-1, -1, 82051073);
    } else {
        IF_SETDRAGGABLE(82051072, -1, 82051073);
    };
    script5945(int0, int1);
    IF_SETONTIMER(callback(script10534, -2147483645, 5), 82051082);
    IF_SETONVARTRANSMIT(callback(script3564, 1448, 1448, 1448, 3), 82051075);
    return;
}