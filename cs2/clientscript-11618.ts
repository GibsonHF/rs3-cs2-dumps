//
function script11618(int0: obj, int1: cs2enum, int2: component): void {
    var int3 = script19898(int0);
    var int4 = 0;
    var int5 = -1 as obj;
    var int6 = -1;
    if (((int3 == -1 as bas) && (int1 != -1 as cs2enum))) {
        int4 = ENUM_GETOUTPUTCOUNT(int1);
        while ((++int6 < int4)) {
            int5 = enum_getvalue(0, 33, int1, int6);
            int3 = script19898(int5);
            if ((int3 != -1 as bas)) {
                int6 = int4;
            };
        };
    };
    var int7 = BAS_GETANIM_READY(int3);
    if ((int7 != -1 as seq)) {
        IF_SETMODELANIM(int7, int2);
    };
    return;
}