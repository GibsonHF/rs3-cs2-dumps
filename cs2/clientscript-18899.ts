//
function script18899(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = 0;
    IF_SETHIDE(int0, 84148244);
    IF_SETHIDE(int0, 84148245);
    if ((int0 == 0)) {
        int2 = ((int1 * (91 + 4)) + 46);
        int3 = (((script18858() * (41 + 4)) + 35) + 6);
        int3 = MIN(int3, (((IF_GETHEIGHT(84148246) + 35) + 4) + 6));
        IF_SETSIZE((91 + 4), int3, 0, 0, 84148244);
        IF_SETPOSITION(int2, 47, 0, 0, 84148244);
        IF_SETSIZE((91 + 6), (int3 + 2), 0, 0, 84148245);
        IF_SETPOSITION((int2 - 1), (47 - 1), 0, 0, 84148245);
    };
    return;
}