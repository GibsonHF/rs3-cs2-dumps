//
function script16540(): void {
    script16541();
    var int0 = script8403(37814273);
    if (((int0 < 0) || (int0 > IF_GETWIDTH(37814273)))) {
        return;
    };
    var int1 = script8404(37814273);
    if (((int1 < 0) || (int1 > IF_GETHEIGHT(37814273)))) {
        script16541();
        return;
    };
    if (((int1 >= IF_GETY(37814274)) && (int1 <= (IF_GETY(37814274) + IF_GETHEIGHT(37814274))))) {
        if ((IF_GETGRAPHIC(37814276) != 9802)) {
            script16542(37814277, 37814276, -1, 1, 1);
        };
    } else if (((int1 >= IF_GETY(37814278)) && (int1 <= (IF_GETY(37814278) + IF_GETHEIGHT(37814278))))) {
        if ((IF_GETGRAPHIC(37814280) != 9802)) {
            script16542(37814281, 37814280, -1, 1, 1);
        };
    } else if ((((int1 >= IF_GETY(37814282)) && (int1 <= (IF_GETY(37814282) + IF_GETHEIGHT(37814282)))) && (IF_GETGRAPHIC(37814284) != 9802))) {
        script16542(37814285, 37814284, -1, 1, 1);
    };
    return;
}