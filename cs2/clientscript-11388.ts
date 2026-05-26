//
function script11388(): void {
    var int0 = 40;
    var int1 = 36;
    var int2 = 36;
    var int3 = 32;
    var int4 = -1;
    var int5 = 0;
    if ((script6431() == 1)) {
        int0 = 44;
        int1 = 44;
        int2 = 44;
        int3 = 39;
    };
    if ((varbitplayer_22875 != 1)) {
        int4 = 18266;
    };
    script3288();
    CC_DELETEALL(106233881);
    CC_DELETEALL(106233876);
    var int6 = script11401();
    if ((int6 == -1)) {
        IF_SETONTIMER(callback(script11388), 106233879);
        IF_SETHIDE(0, 106233873);
        return;
    };
    var int7 = 0;
    var int8 = ENUM_GETOUTPUTCOUNT(int6);
    while ((int7 < int8)) {
        CC_CREATE(106233881, 5, int7);
        CC_SETSIZE(int2, int3, 0, 0);
        CC_SETHIDE(1);
        CC_CREATE(106233876, 5, int7);
        CC_SETSIZE(int0, int1, 0, 0);
        CC_SETGRAPHIC(int4);
        CC_SETTRANS(int5);
        CC_SETHIDE(1);
        int7 = (int7 + 1);
    };
    varclient_4797 = 105;
    IF_SETONTIMER(callback(script11396, 2), 106233879);
    IF_SETONVARTRANSMIT(callback(script11388, 5405, 1), 106233857);
    IF_SETONVARTRANSMIT(callback(script11390, 5411, 5407, 5408, 5409, 5410, 10385, 6), 106233879);
    IF_SETONINVTRANSMIT(callback(script5247, 93, 1), 106233879);
    script11391();
    script11398(-1);
    script15069(1);
    return;
}