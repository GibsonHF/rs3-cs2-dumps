//
function script6943(int0: component, int1: component): void {
    var int2 = IF_GETLAYER(int0);
    var int3 = ((PARAHEIGHT(varclient_6861, IF_GETWIDTH(int2), IF_GETFONTMETRICS(int0)) * varclient_6392) + varclient_6393);
    if ((int3 <= IF_GETHEIGHT(int2))) {
        CC_DELETEALL(int1);
        IF_SETHIDE(true, int1);
        IF_SETSCROLLSIZE(0, 0, int2);
        IF_SETPOSITION(0, 0, 1, 1, int2);
        IF_SETSIZE(0, 0, 1, 1, int0);
        IF_SETTEXTALIGN(varclient_6394, 1, varclient_6392, int0);
    } else {
        CC_DELETEALL(int1);
        IF_SETHIDE(false, int1);
        IF_SETSCROLLSIZE(0, int3, int2);
        IF_SETPOSITION(0, 0, 0, 1, int2);
        IF_SETSIZE(0, int3, 1, 0, int0);
        IF_SETTEXTALIGN(varclient_6394, 0, varclient_6392, int0);
        script7791(int1, int2);
    };
    IF_SETSCROLLPOS(0, 0, int2);
    IF_SETTEXT(varclient_6861, int0);
    return;
}