//
function script16365(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    if ((int2 > 1)) {
        int6 = 0;
        script15938(int0, 0, int6++, 0, 0, 1, 1, 100, 100, 0, 0);
        script7919(0, int6++, 0, 0, 1, 1, SCALE(3, 2, 30), SCALE(3, 2, 44), 0, 0, script9718(int2), 1, 0, 0, 0);
    };
    if ((int3 > 1)) {
        int6 = 0;
        script15938(int0, 1, int6++, 0, 0, 1, 1, 100, 100, 0, 0);
        script7919(1, int6++, 0, 0, 1, 1, SCALE(5, 2, 27), SCALE(5, 2, 27), 0, 0, script10980(int3), 0, 0, 0, 0);
    };
    if ((int1 > 0)) {
        int6 = 0;
        script15938(int0, 2, int6++, 4, 4, 2, 2, 60, 28, 0, 0);
        script9727(2, int6++, 0, 0, 2, 1, 34, 24, 0, 0, 124749, 0, 0, 0, 0, 0, 1400);
        CC_SETRETEX(0, 14423, 14424);
        CC_SETMODELORIGIN(1, 11);
        script10485(2, int6++, 38, 0, 2, 1, 38, 0, 1, 1, 2195, inttostring(int1, 10));
        CC_SETTEXTALIGN(2, 1, 0);
        CC_SETTEXTFONT(56);
        CC_SETCOLOUR(16777215);
    };
    return;
}