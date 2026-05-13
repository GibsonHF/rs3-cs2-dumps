//
function script11617(int0: seq, int1: model, int2: int, int3: component, int4: material, int5: material, int6: int, int7: int, int8: int, int9: int): int {
    var int10 = 380;
    if ((IF_GETLAYER(int3) == comp(1594, 81))) {
        int10 = 600;
    };
    script15941(int3, 0, int2, 0, 0, 0, 0, 0, 0, 1, 1);
    CC_SETMODEL(int1);
    CC_SETMODELANIM(int0);
    CC_SETMODELANGLE(1000, 115, 0, 200, 0, int10);
    if (((int4 != -1 as material) && (int5 != -1 as material))) {
        CC_SETRETEX(0, int4, int5);
    };
    if (((int6 != -1) && (int7 != -1))) {
        CC_SETRECOL(0, int6, int7);
    };
    if (((int8 != -1) && (int9 != -1))) {
        CC_SETRECOL(1, int8, int9);
    };
    return (int2 + 1);
}