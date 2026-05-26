//
function script20067(): void {
    IF_SETONRESIZE(callback(script5944), 88932352);
    if (((varclient_8312 == -1) && (varclient_8313 == -1))) {
        varclient_8312 = ((IF_GETWIDTH(88932352) / 2) - (IF_GETWIDTH(88932353) / 2));
        varclient_8313 = 20;
    };
    var int0 = varclient_8312;
    var int1 = varclient_8313;
    if ((script6431() == 1)) {
        int0 = (IF_GETX(96796732) + 2);
        int1 = (IF_GETHEIGHT(96796732) / 2);
        IF_SETSIZE(22, 22, 1, 1, 88932359);
        IF_SETONDRAG(callback(), 88932353);
        IF_SETDRAGGABLE(-1, -1, 88932353);
    } else {
        IF_SETDRAGGABLE(88932352, -1, 88932353);
    };
    script20070(int0, int1);
    return;
}