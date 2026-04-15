//
function script6241(): void {
    var int0 = IF_GETWIDTH(comp(1285, 4));
    var int1 = MAX(1, (100 - SCALE(varclient_1923, 25000, 100)));
    script4542(int1, comp(1285, 4), comp(-1, 65535));
    IF_SETTEXT(TOSTRING_LOCALISED((25000 - varclient_1923), 1), comp(1285, 32));
    var int2 = IF_GETWIDTH(comp(1285, 4));
    var int3 = (int0 - int2);
    if ((int3 > 0)) {
        IF_SETSIZE(int3, IF_GETHEIGHT(comp(1285, 24)), 0, 0, comp(1285, 24));
        IF_SETTRANS(0, comp(1285, 25));
        IF_SETTRANS(0, comp(1285, 26));
        IF_SETTRANS(0, comp(1285, 27));
        IF_SETPOSITION(IF_GETWIDTH(comp(1285, 4)), IF_GETY(comp(1285, 24)), 0, 0, comp(1285, 24));
        IF_SETHIDE(false, comp(1285, 24));
        IF_SETONTIMER(callback(script6242), comp(1285, 4));
    };
    return;
}