//
function script531(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = -1;
    var int5 = 0;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = 0;
    if ((((int0 == -1) || (int1 == -1)) || (int2 == -1))) {
        return;
    };
    if ((int0 == 19726388)) {
        int5 = script543(varbitplayer_3044);
        int7 = 19726370;
        int8 = 19726371;
    };
    if ((int0 == 19726389)) {
        int5 = script543(varbitplayer_3045);
        int7 = 19726372;
        int8 = 19726373;
    };
    if ((int0 == 19726390)) {
        int5 = script543(varbitplayer_3047);
        int7 = 19726374;
        int8 = 19726375;
    };
    if ((int0 == 19726391)) {
        int5 = script543(varbitplayer_3049);
        int7 = 19726376;
        int8 = 19726377;
    };
    if ((int0 == 19726392)) {
        int5 = script543(varbitplayer_3050);
        int7 = 19726378;
        int8 = 19726379;
    };
    if ((int0 == 19726393)) {
        int5 = script543(varbitplayer_3052);
        int7 = 19726380;
        int8 = 19726381;
    };
    if ((int0 == 19726394)) {
        int5 = script543(varbitplayer_3054);
        int7 = 19726382;
        int8 = 19726383;
    };
    if ((int0 == 19726395)) {
        int5 = script543(varbitplayer_3055);
        int7 = 19726384;
        int8 = 19726385;
    };
    if ((int0 == 19726396)) {
        int5 = script543(varbitplayer_3056);
        int7 = 19726386;
        int8 = 19726387;
    };
    if ((int5 == 1)) {
        int4 = int1;
        int9 = 0;
        IF_SETCOLOUR(16430130, int7);
        IF_SETCOLOUR(16430130, int8);
    } else {
        int4 = int2;
        int9 = 1;
        IF_SETCOLOUR(13420487, int7);
        IF_SETCOLOUR(13420487, int8);
    };
    stack(int4);
    stack(int0);
    IF_SETGRAPHIC();
    IF_SETHIDE(int9, int3);
    return;
}