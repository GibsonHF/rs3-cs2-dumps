//
function script20298(int0: number): number {
    var int1 = 0;
    var int2 = unk11037(int0);
    var int3 = 0;
    var int4 = 0;
    while ((int1 < int2)) {
        int3 = 0;
        int4 = unk11036(int0, int1);
        while ((int3 < int4)) {
            if (((ACHIEVEMENT_CATEGORY(unk11035(int0, int1, int3)) != 5619) && (unk11034(int0, int1, int3) == 0))) {
                return 1;
            };
            int3 = (int3 + 1);
        };
        int1 = (int1 + 1);
    };
    return 0;
}