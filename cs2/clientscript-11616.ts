//
function script11616(int0: struct, int1: int, int2: component): int {
    var int3 = 380;
    if ((IF_GETLAYER(int2) == comp(1594, 81))) {
        int3 = 600;
    };
    var int4 = struct_getparam(int0, 2535);
    if ((int4 == -1 as seq)) {
        int4 = 18019 as seq;
    };
    script15941(int2, 0, int1, 0, 0, 0, 0, 0, 0, 1, 1);
    CC_SETPLAYERMODEL_SELF();
    CC_SETMODELANIM(int4);
    CC_SETMODELANGLE(1000, 115, 0, 200, 0, int3);
    return (int1 + 1);
}