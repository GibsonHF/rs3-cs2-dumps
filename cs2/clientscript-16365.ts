//
function script16365(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    if ((int2 > 1)) {
        int6 = 0;
        stack(int0);
        stack(0);
        stack(int6);
        int6 = (int6 + 1);
        script15938(0, 0, 1, 1, 100, 100, 0, 0);
        stack(0);
        stack(int6);
        int6 = (int6 + 1);
        script7919(0, 0, 1, 1, SCALE(3, 2, 30), SCALE(3, 2, 44), 0, 0, script9718(int2), 1, 0, 0, 0);
    };
    if ((int3 > 1)) {
        int6 = 0;
        stack(int0);
        stack(1);
        stack(int6);
        int6 = (int6 + 1);
        script15938(0, 0, 1, 1, 100, 100, 0, 0);
        stack(1);
        stack(int6);
        int6 = (int6 + 1);
        script7919(0, 0, 1, 1, SCALE(5, 2, 27), SCALE(5, 2, 27), 0, 0, script10980(int3), 0, 0, 0, 0);
    };
    if ((int1 > 0)) {
        int6 = 0;
        stack(int0);
        stack(2);
        stack(int6);
        int6 = (int6 + 1);
        script15938(4, 4, 2, 2, 60, 28, 0, 0);
        stack(2);
        stack(int6);
        int6 = (int6 + 1);
        script9727(0, 0, 2, 1, 34, 24, 0, 0, 124749, 0, 0, 0, 0, 0, 1400);
        CC_SETRETEX(0, 14423, 14424 as material);
        CC_SETMODELORIGIN(1, 11);
        stack(2);
        stack(int6);
        int6 = (int6 + 1);
        script10485(38, 0, 2, 1, 38, 0, 1, 1, 2195, inttostring(int1, 10));
        CC_SETTEXTALIGN(2, 1, 0);
        CC_SETTEXTFONT(56 as fontmetrics);
        CC_SETCOLOUR(16777215);
    };
    return;
}