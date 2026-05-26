//
function script7554(): void {
    var int0 = IF_GETWIDTH(comp(378, 14));
    var int1 = (varclient_2712 / 24);
    if ((varclient_2712 == 5000)) {
        int1 = 204;
    };
    if ((int0 < int1)) {
        IF_SETSIZE((int0 + 1), IF_GETHEIGHT(comp(378, 14)), 0, 0, comp(378, 14));
    } else if ((int0 > int1)) {
        IF_SETSIZE((int0 - 1), IF_GETHEIGHT(comp(378, 14)), 0, 0, comp(378, 14));
    };
    return;
}