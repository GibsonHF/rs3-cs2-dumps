//
function script16455(int0: struct, int1: int): [obj, int] {
    if ((int0 == -1 as struct)) {
        return [-1 as obj, 0];
    };
    var int2 = -1 as obj;
    var int3 = 0;
    switch (int1) {
        case 1: {
            int2 = struct_getparam(int0, 2003);
            int3 = struct_getparam(int0, 2001);
            break;
        }
        case 2: {
            int2 = struct_getparam(int0, 2010);
            int3 = struct_getparam(int0, 2008);
            break;
        }
        case 3: {
            int2 = struct_getparam(int0, 2017);
            int3 = struct_getparam(int0, 2015);
            break;
        }
        case 4: {
            int2 = struct_getparam(int0, 2024);
            int3 = struct_getparam(int0, 2022);
            break;
        }
        case 5: {
            int2 = struct_getparam(int0, 2031);
            int3 = struct_getparam(int0, 2029);
            break;
        }
        case 6: {
            int2 = struct_getparam(int0, 2038);
            int3 = struct_getparam(int0, 2036);
            break;
        }
        case 7: {
            int2 = struct_getparam(int0, 2045);
            int3 = struct_getparam(int0, 2043);
            break;
        }
        case 8: {
            int2 = struct_getparam(int0, 2052);
            int3 = struct_getparam(int0, 2050);
            break;
        }
    };
    return [int2, int3];
}