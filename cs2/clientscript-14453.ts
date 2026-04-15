//
function script14453(int0: struct, int1: obj): obj {
    var int2 = -1 as struct;
    var int3 = -1 as dbrow;
    var int4 = -1 as obj;
    switch (int0) {
        case 11567:
        case 11568:
        case 11569:
        case 11559:
        case 11560:
        case 11561: {
            int2 = script14441();
            if ((int2 != -1 as struct)) {
                int4 = struct_getparam(int2, 6140);
                if ((int4 != -1 as obj)) {
                    return int4;
                };
            };
            int3 = script15143();
            if ((int3 != -1 as dbrow)) {
                int4 = script15145(int3);
                if ((int4 != -1 as obj)) {
                    return int4;
                };
            };
            break;
        }
    };
    if ((struct_getparam(int0, 6131) != -1 as obj)) {
        var int1 = struct_getparam(int0, 6131);
    };
    return int1;
}