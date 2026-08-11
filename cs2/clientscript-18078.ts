//
function script18078(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if (((varclient_7300 != comp(-1, 65535)) && (CC_FIND(varclient_7300, varclient_7301) == 1))) {
        script7872(1, 1, 1, 0);
    };
    if ((CC_FIND(int4, int3) == 1)) {
        varclient_7300 = int4;
        varclient_7301 = int3;
        script7872(1, 1, 1, 1);
    };
    var int5 = (IF_GETHEIGHT(comp(1226, 32)) + 10);  // bp3_missions_tab:mission_info_chain_layer
    var int6 = 80347166;
    int5 = script18079(int2, int6, int5);
    SOUND_VORBIS_VOLUME(56687 as vorbis, 1, 0, 100);
    script18075(int5, int6);
    return;
}