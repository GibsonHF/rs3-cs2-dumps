//
function script11617(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number): number {
    var int10 = 380;
    if ((IF_GETLAYER(int3) == comp(1594, 81))) {
        int10 = 600;
    };
    script15941(int3, 0, int2, 0, 0, 0, 0, 0, 0, 1, 1);
    CC_SETMODEL(int1);
    CC_SETMODELANIM(int0);
    CC_SETMODELANGLE(1000, 115, 0, 200, 0, int10);
    if (((int4 != -1) && (int5 != -1 as material))) {
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