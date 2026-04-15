//
function script3580(int0: int, int1: component, int2: component): void {
    var int3 = -1 as struct;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = (IF_GETWIDTH(int1) - 4);
    int3 = script13433(int0);
    int4 = script13431(int0);
    int5 = script13432(int0);
    if ((int5 == (ENUM_GETOUTPUTCOUNT(struct_getparam(int3, 6583)) - 1))) {
        IF_SETSIZE(int9, 4, 0, 1, int2);
    } else {
        int6 = enum_getvalue(0, 0, struct_getparam(int3, 6583), int5);
        int7 = enum_getvalue(0, 0, struct_getparam(int3, 6583), (int5 + 1));
        int8 = (int7 - int6);
        if ((int8 == 0)) {
            IF_SETSIZE(int9, 4, 0, 1, int2);
        } else {
            IF_SETSIZE(SCALE((int4 - int6), int8, int9), 4, 0, 1, int2);
        };
    };
    return;
}