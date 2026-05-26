//
function script7554(): void {
    var int0 = IF_GETWIDTH(24772622);
    var int1 = (varclient_2712 / 24);
    if ((varclient_2712 == 5000)) {
        int1 = 204;
    };
    if ((int0 < int1)) {
        IF_SETSIZE((int0 + 1), IF_GETHEIGHT(24772622), 0, 0, 24772622);
    } else if ((int0 > int1)) {
        IF_SETSIZE((int0 - 1), IF_GETHEIGHT(24772622), 0, 0, 24772622);
    };
    return;
}