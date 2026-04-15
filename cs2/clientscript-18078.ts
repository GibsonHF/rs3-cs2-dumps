//
function script18078(int0: unknown_int, int1: unknown_int, int2: dbrow, int3: int, int4: component): void {
    if (((varclient_7300 != comp(-1, 65535)) && (CC_FIND(varclient_7300, varclient_7301) == 1))) {
        script7872(true, 1, true, false);
    };
    if ((CC_FIND(int4, int3) == 1)) {
        varclient_7300 = int4;
        varclient_7301 = int3;
        script7872(true, 1, true, true);
    };
    var int5 = (IF_GETHEIGHT(comp(1226, 32)) + 10);
    var int6 = comp(1226, 30);
    int5 = script18079(int2, int6, int5);
    SOUND_VORBIS_VOLUME(56687 as vorbis, 1, 0, 100);
    script18075(int5, int6);
    return;
}