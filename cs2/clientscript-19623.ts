//
function script19623(int0: achievement): int {
    if ((int0 == -1 as achievement)) {
        return 0;
    };
    var int1 = 0;
    var int2 = unk11095(int0);
    var int3 = 0;
    while ((int1 < int2)) {
        int3 = (int3 + script42(unk11094(int0, int1++)));
    };
    int1 = 0;
    int2 = unk11065(int0);
    while ((int1 < int2)) {
        int3 = (int3 + script42(unk11093(int0, int1++)));
    };
    int1 = 0;
    int2 = unk11066(int0);
    while ((int1 < int2)) {
        int3 = (int3 + script42(unk11092(int0, int1++)));
    };
    int1 = 0;
    int2 = unk11067(int0);
    while ((int1 < int2)) {
        int3 = (int3 + script42(unk11091(int0, int1++)));
    };
    int1 = 0;
    int2 = unk11068(int0);
    while ((int1 < int2)) {
        int3 = (int3 + script42(unk11090(int0, int1++)));
    };
    int1 = 0;
    int2 = unk11074(int0);
    var int4 = -1;
    while ((int1 < int2)) {
        int3 = (int3 + script42(unk11089(int0, int1++)));
    };
    int1 = 0;
    int2 = ACHIEVEMENT_ACHIEVEMENT_REQ_COUNT(int0);
    var int5 = -1;
    var int6 = 0;
    while ((int1 < int2)) {
        int3 = (int3 + script42(unk11088(int0, int1++)));
    };
    return int3;
}