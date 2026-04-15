//
function script20067(): void {
    IF_SETONRESIZE(callback(script5944), comp(1357, 0));
    if (((varclient_8312 == -1) && (varclient_8313 == -1))) {
        varclient_8312 = ((IF_GETWIDTH(comp(1357, 0)) / 2) - (IF_GETWIDTH(comp(1357, 1)) / 2));
        varclient_8313 = 20;
    };
    var int0 = varclient_8312;
    var int1 = varclient_8313;
    if ((script6431() == true)) {
        int0 = (IF_GETX(comp(1477, 60)) + 2);
        int1 = (IF_GETHEIGHT(comp(1477, 60)) / 2);
        IF_SETSIZE(22, 22, 1, 1, comp(1357, 7));
        IF_SETONDRAG(callback(), comp(1357, 1));
        IF_SETDRAGGABLE(-1, -1, 88932353);
    } else {
        IF_SETDRAGGABLE(comp(1357, 0), -1, comp(1357, 1));
    };
    script20070(int0, int1);
    return;
}