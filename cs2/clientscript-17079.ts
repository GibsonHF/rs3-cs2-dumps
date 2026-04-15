//
function script17079(int0: component, int1: component, int2: component): void {
    if ((varclient_7108 == true)) {
        IF_SETHIDE(true, int1);
        IF_SETHIDE(true, int2);
        IF_SETSIZE((IF_GETWIDTH(int0) - 80), IF_GETHEIGHT(int0), 0, 0, int0);
        CC_DELETEALL(int0);
        script2649();
        script2601();
        IF_SETPOSITION(((IF_GETX(int0) - 5) - IF_GETWIDTH(comp(906, 139))), IF_GETY(comp(906, 139)), 0, 0, comp(906, 139));
    };
    return;
}