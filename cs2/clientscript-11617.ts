//
function script11617(int0: seq, int1: model, int2: int, int3: component): int {
    var int4 = 380;
    if ((IF_GETLAYER(int3) == comp(1594, 81))) {
        int4 = 600;
    };
    script15941(int3, 0, int2, 0, 0, 0, 0, 0, 0, 1, 1);
    CC_SETMODEL(int1);
    CC_SETMODELANIM(int0);
    CC_SETMODELANGLE(1000, 115, 0, 200, 0, int4);
    return (int2 + 1);
}