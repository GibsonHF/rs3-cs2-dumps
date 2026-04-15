//
function script6135(): void {
    if ((varclient_1893 == 1)) {
        return;
    };
    varclient_1893 = 1;
    var int0 = comp(-1, 65535);
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    if ((IF_GETHIDE(comp(1270, 52)) == false)) {
        int3 = (int3 + 1);
    };
    if ((IF_GETHIDE(comp(1270, 56)) == false)) {
        int3 = (int3 + 1);
    };
    if ((IF_GETHIDE(comp(1270, 60)) == false)) {
        int3 = (int3 + 1);
    };
    switch (int3) {
        case 0: {
            int2 = varclient_1900;
            break;
        }
        case 1: {
            int2 = varclient_1901;
            break;
        }
        case 2: {
            int2 = varclient_1902;
            break;
        }
        default: {
            return;
        }
    };
    int0 = script6139(int2);
    IF_SETHIDE(false, int0);
    var int4 = 0;
    var int5 = 0;
    var int6 = 256;
    if ((CC_FIND(int0, 0) == 1)) {
        int4 = (varclient_1889 - IF_GETX(int0));
        int5 = (varclient_1890 - IF_GETY(int0));
        int4 = (int4 - (IF_GETWIDTH(int0) / 2));
        int5 = (int5 - (IF_GETHEIGHT(int0) / 2));
        CC_SETPOSITION(int4, int5, 1, 1);
        int6 = CC_GETWIDTH();
    };
    IF_SETONTIMER(callback(script6141, -2147483645, int2, int4, int5, 0, 0, 0, 0, 0, 0, 0), int0);
    if ((++int3 > 0)) {
        stack(10576);
        stack(83230740);
        IF_SETGRAPHIC();
    };
    if ((int3 > 1)) {
        stack(10576);
        stack(83230741);
        IF_SETGRAPHIC();
    };
    if ((int3 > 2)) {
        stack(10576);
        stack(83230742);
        IF_SETGRAPHIC();
    };
    SOUND_VORBIS_VOLUME(14660 as vorbis, 1, 0, 120);
    return;
}