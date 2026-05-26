//
function script6703(): void {
    var int0 = 11534348;
    var int1 = 11534346;
    var int2 = 11534347;
    var int3 = 11534349;
    var int4 = 11534350;
    var int5 = 11534351;
    var int6 = 11534358;
    var int7 = 11534341;
    var int8 = 11534340;
    var int9 = 11534371;
    var int10 = 11534370;
    var int11 = 11534372;
    var int12 = 11534373;
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    if ((IF_FIND(int0) == 1)) {
        CC_SETONVARTRANSMIT(callback(script6704, 8600, 1));
        script6706(int0, int1, int2, int3, int4, varbitplayer_44287);
        script6709(int5, varbitplayer_44287);
        script6710(int7, int8);
        script6786(int6, varbitplayer_44287);
        script6801(int9, int10, int11, int12);
    };
    if ((IF_FIND(int6) == 1)) {
        CC_SETONVARTRANSMIT(callback(script6690, 8595, 1));
    };
    if ((IF_FIND(int7) == 1)) {
        CC_SETONVARTRANSMIT(callback(script6705, 8589, 8590, 8591, 8592, 8593, 8594, 6));
    };
    return;
}