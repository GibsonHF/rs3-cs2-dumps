//
function script6446(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: model, int7: seq): void {
    var int5 = (int5 + 100);
    var int1 = (int1 + int2);
    if ((CC_FIND(comp(1311, 343), 0) == 1)) {
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
    return;
}