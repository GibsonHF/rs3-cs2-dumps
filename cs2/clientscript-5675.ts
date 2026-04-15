//
function script5675(int0: struct, int1: int, int2: int): cs2enum {
    var int3 = -1 as cs2enum;
    var int4 = -1 as cs2enum;
    switch (int0) {
        case 42289: {
            int3 = enum_getvalue(0, 26, 14731 as cs2enum, int1);
            if ((int3 != -1 as cs2enum)) {
                int4 = enum_getvalue(0, 26, int3, int2);
            };
            break;
        }
    };
    return int4;
}