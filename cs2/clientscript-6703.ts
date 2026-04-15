//
function script6703(): void {
    var int0 = comp(176, 12);
    var int1 = comp(176, 10);
    var int2 = comp(176, 11);
    var int3 = comp(176, 13);
    var int4 = comp(176, 14);
    var int5 = 11534351;
    var int6 = comp(176, 22);
    var int7 = comp(176, 5);
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