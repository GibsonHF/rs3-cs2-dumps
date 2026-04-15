//
function script326(int0: struct): [struct, struct, int] {
    if ((int0 == -1 as struct)) {
        return [int0, int0, 0];
    };
    if ((struct_getparam(int0, 5192) == 1)) {
        return [int0, int0, struct_getparam(int0, 2531)];
    };
    if ((struct_getparam(int0, 9250) == true)) {
        return [int0, int0, 0];
    };
    var int1 = -1;
    var int2 = struct_getparam(int0, 4414);
    if ((int2 == -1 as struct)) {
        int2 = struct_getparam(int0, 4419);
    };
    if ((int2 == -1 as struct)) {
        int2 = struct_getparam(int0, 9253);
    };
    var int3 = -1 as struct;
    var int4 = struct_getparam(int0, 4851);
    if ((int4 != -1 as obj)) {
        if ((int2 == -1 as struct)) {
            int2 = item_getparam(int4, 4414);
        };
        if ((int2 == -1 as struct)) {
            int2 = item_getparam(int4, 5051);
        };
    };
    var int5 = -1;
    if ((int2 == -1 as struct)) {
        int1 = 0;
    } else {
        int1 = struct_getparam(int2, 2531);
    };
    if (((int2 != -1 as struct) && (int1 == 6))) {
        int2 = struct_getparam(int2, 5153);
        if ((int2 != -1 as struct)) {
            int1 = struct_getparam(int2, 2531);
        };
    };
    if ((struct_getparam(int0, 9252) != -1 as cs2enum)) {
        int1 = 2;
    };
    if ((int4 != -1 as obj)) {
        int5 = OC_WEARPOS(int4);
        if ((((((int2 == -1 as struct) && (int5 != -1)) && (int5 != 17)) && (int5 != 14)) && (int5 != 12))) {
            int1 = 2;
        };
    };
    if (((int2 != -1 as struct) && (int1 == 5))) {
        int3 = enum_getvalue(73, 73, 7225 as cs2enum, int2);
    };
    if ((int3 == -1 as struct)) {
        int3 = int2;
    };
    return [int2, int3, int1];
}