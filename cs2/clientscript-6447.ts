//
function script6447(int0: number, int1: number, int2: number, int3: number): void {
    if ((IF_GETGRAPHIC(comp(1311, 374)) == 3030 as graphic)) {  // mtxmgt:chathead_mode_swapper
        return;
    };
    var int4 = 0;
    var int5 = 0;
    var int2 = (int2 - (IF_GETWIDTH(int0) / 2));
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int2 > 0)) {
            int5 = script686((CC_GETMODELANGLE_Y() - 10), 2048);
        } else if ((int2 < 0)) {
            int5 = MODULO((CC_GETMODELANGLE_Y() + 10), 2048);
        };
        if ((int3 == 1)) {
            if ((int5 > 1024)) {
                int5 = MAX(int5, 1572);
            } else {
                int5 = MIN(int5, 512);
            };
        };
        stack(CC_GETMODELXOF());
        stack(CC_GETMODELYOF());
        CC_GETMODELANGLE_X();
        CC_SETMODELANGLE(int5, CC_GETMODELANGLE_Z(), CC_GETMODELZOOM());
    };
    return;
}