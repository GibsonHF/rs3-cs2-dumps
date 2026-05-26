//
function script6446(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, int13: number): void {
    var int5 = (int5 + 100);
    var int1 = (int1 + int2);
    if ((CC_FIND(85918039, 0) == 1)) {
        var int4 = CC_GETMODELANGLE_Y();
        int1 = CC_GETMODELZOOM();
        int5 = CC_GETMODELYOF();
    };
    CC_CREATE(int0, 6, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETMODEL(int6);
    CC_SETMODELANGLE(0, int5, int3, int4, 10, int1);
    CC_SETMODELANIM(int7);
    if (((int8 != -1) && (int9 != -1))) {
        CC_SETRETEX(0, int8, int9);
    };
    if (((int10 != -1) && (int11 != -1))) {
        CC_SETRECOL(0, int10, int11);
    };
    if (((int12 != -1) && (int13 != -1))) {
        CC_SETRECOL(1, int12, int13);
    };
    return;
}