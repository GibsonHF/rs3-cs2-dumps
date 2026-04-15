//
function script2023(int0: struct, int1: unknown_int, int2: component): void {
    var string0 = "";
    var int3 = 0;
    var string1 = "";
    var int4 = -1 as struct;
    var int5 = 0;
    switch (int1) {
        case 1: {
            int5 = struct_getparam(int0, 2654);
            string0 = enum_getvalue(0, 36, 2163 as cs2enum, int5);
            int3 = struct_getparam(int0, 2685);
            break;
        }
        case 2: {
            int5 = struct_getparam(int0, 3051);
            string0 = enum_getvalue(0, 36, 2163 as cs2enum, int5);
            int3 = struct_getparam(int0, 3052);
            break;
        }
        case 3: {
            int5 = struct_getparam(int0, 3053);
            string0 = enum_getvalue(0, 36, 2163 as cs2enum, int5);
            int3 = struct_getparam(int0, 3054);
            break;
        }
    };
    switch (int5) {
        case 1: {
            string1 = ` ${OC_NAME(enum_getvalue(0, 33, 2171 as cs2enum, int3))}`;
            break;
        }
        case 2: {
            string1 = ` ${OC_NAME(enum_getvalue(0, 33, 2174 as cs2enum, int3))}`;
            break;
        }
        case 3: {
            string1 = ` ${OC_NAME(enum_getvalue(0, 33, 2173 as cs2enum, int3))}`;
            break;
        }
        case 4: {
            string1 = ` ${OC_NAME(enum_getvalue(0, 33, 2171 as cs2enum, int3))}`;
            break;
        }
        case 5: {
            string1 = ` ${enum_getvalue(0, 36, 1626 as cs2enum, int3)}`;
            break;
        }
        case 6: {
            break;
        }
        case 7: {
            string1 = ` ${enum_getvalue(0, 36, 1626 as cs2enum, int3)}`;
            break;
        }
        case 8: {
            int4 = enum_getvalue(0, 73, 1022 as cs2enum, int3);
            string1 = ` ${struct_getparam(int4, 2365)}`;
            break;
        }
        case 9: {
            string1 = ` ${enum_getvalue(0, 36, 1626 as cs2enum, int3)}`;
            break;
        }
        case 10:
        case 11: {
            int4 = enum_getvalue(0, 73, 2175 as cs2enum, int3);
            string1 = ` ${struct_getparam(int4, 3090)}`;
            break;
        }
        case 12:
        case 13: {
            string1 = ` ${enum_getvalue(0, 36, 1626 as cs2enum, int3)}`;
            break;
        }
        default: {
            string0 = "";
            break;
        }
    };
    string0 = strconcat(string0, string1);
    IF_SETTEXT(string0, int2);
    return;
}