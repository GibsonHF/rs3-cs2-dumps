//
function script11769(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 0;
    var int5 = 0;
    if (((int3 > 1) && (int2 > 1))) {
        [int4, int5] = [35, 5];
    };
    var int6 = 0;
    if ((int2 > 1)) {
        int6 = 0;
        script15938(int0, 0, int6++, (0 - int4), int5, 1, 1, 100, 100, 0, 0);
        script7919(0, int6++, 0, 0, 1, 1, 0, 0, 1, 1, script20378(4), 1, 0, 0, 0);
        script7919(0, int6++, -1, -4, 1, 1, 30, 43, 0, 0, script19209(int2), 1, 0, 0, 0);
        CC_SET2DANGLE(SCALE(8, 360, 65536));
    };
    if ((int3 > 1)) {
        int6 = 0;
        script15938(int0, 1, int6++, int4, (0 - int5), 1, 1, 100, 100, 0, 0);
        script7919(1, int6++, 0, 0, 1, 1, 0, 0, 1, 1, script20378(4), 0, 0, 0, 0);
        script7919(1, int6++, 1, -2, 1, 1, 28, 25, 0, 0, script16354(int3), 0, 0, 0, 0);
        CC_SET2DANGLE(SCALE(352, 360, 65536));
    };
    if ((int1 > 0)) {
        int6 = 0;
        script15938(int0, 2, int6++, 0, 0, 2, 2, 56, 28, 0, 0);
        script9727(2, int6++, 4, 0, 2, 2, 22, 28, 0, 0, 131216, 0, 0, 0, 0, 0, 1800);
        CC_SETMODELORIGIN(0, 10);
        script10485(2, int6++, 32, 0, 2, 1, 32, 0, 1, 1, 2195, inttostring(int1, 10));
        CC_SETTEXTALIGN(2, 1, 0);
        CC_SETTEXTFONT(56);
        CC_SETCOLOUR(16777215);
    };
    return;
}