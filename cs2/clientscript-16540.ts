//
function script16540(): void {
    script16541();
    var int0 = script8403(comp(577, 1));
    if (((int0 < 0) || (int0 > IF_GETWIDTH(comp(577, 1))))) {
        return;
    };
    var int1 = script8404(comp(577, 1));
    if (((int1 < 0) || (int1 > IF_GETHEIGHT(comp(577, 1))))) {
        script16541();
        return;
    };
    if (((int1 >= IF_GETY(comp(577, 2))) && (int1 <= (IF_GETY(comp(577, 2)) + IF_GETHEIGHT(comp(577, 2)))))) {
        if ((IF_GETGRAPHIC(comp(577, 4)) != 9802 as graphic)) {
            script16542(37814277, 37814276, -1, true, 1);
        };
    } else if (((int1 >= IF_GETY(comp(577, 6))) && (int1 <= (IF_GETY(comp(577, 6)) + IF_GETHEIGHT(comp(577, 6)))))) {
        if ((IF_GETGRAPHIC(comp(577, 8)) != 9802 as graphic)) {
            script16542(37814281, 37814280, -1, true, 1);
        };
    } else if ((((int1 >= IF_GETY(comp(577, 10))) && (int1 <= (IF_GETY(comp(577, 10)) + IF_GETHEIGHT(comp(577, 10))))) && (IF_GETGRAPHIC(comp(577, 12)) != 9802 as graphic))) {
        script16542(37814285, 37814284, -1, true, 1);
    };
    return;
}