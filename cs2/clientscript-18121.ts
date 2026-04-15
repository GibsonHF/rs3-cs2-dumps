//
function script18121(int0: cs2enum, int1: seq, int2: int, int3: component, int4: int): int {
    var int5 = 380;
    if ((IF_GETLAYER(int3) == comp(1594, 81))) {
        int5 = 600;
    };
    script15941(int3, 0, int2, 0, 0, 0, 0, 0, 0, 1, 1);
    if ((int4 == -1)) {
        var int4 = RANDOM(ENUM_GETOUTPUTCOUNT(int0));
    };
    var int6 = enum_getvalue(0, 32, int0, int4);
    CC_SETNPCMODEL(int6);
    CC_SETMODELANIM(int1);
    CC_SETMODELANGLE(1000, 115, 0, 200, 0, int5);
    return (int2 + 1);
}