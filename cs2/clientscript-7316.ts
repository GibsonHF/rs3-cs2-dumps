//
function script7316(int0: inv, int1: int): unknown_int {
    var int2 = INV_GETOBJ(int0, int1);
    if ((int2 == -1 as obj)) {
        return 0;
    };
    var int3 = 0;
    var int4 = script7319(int1);
    var int5 = (AND(int4, 57344) / 8192);
    switch (int5) {
        case 0:
        case 1: {
            int3 = (int3 + 1);
            break;
        }
        case 2:
        case 3:
        case 4: {
            int3 = (int3 + 2);
            break;
        }
        case 5:
        case 6:
        case 7: {
            int3 = (int3 + 4);
            break;
        }
    };
    int5 = (AND(int4, 458752) / 65536);
    switch (int5) {
        case 0:
        case 1: {
            int3 = (int3 + 1);
            break;
        }
        case 2:
        case 3:
        case 4: {
            int3 = (int3 + 2);
            break;
        }
        case 5:
        case 6:
        case 7: {
            int3 = (int3 + 4);
            break;
        }
    };
    int5 = (AND(int4, 3670016) / 524288);
    switch (int5) {
        case 0:
        case 1: {
            int3 = (int3 + 1);
            break;
        }
        case 2:
        case 3:
        case 4: {
            int3 = (int3 + 2);
            break;
        }
        case 5:
        case 6:
        case 7: {
            int3 = (int3 + 4);
            break;
        }
    };
    int5 = (AND(int4, 29360128) / 4194304);
    switch (int5) {
        case 0:
        case 1: {
            int3 = (int3 + 1);
            break;
        }
        case 2:
        case 3:
        case 4: {
            int3 = (int3 + 2);
            break;
        }
        case 5:
        case 6:
        case 7: {
            int3 = (int3 + 4);
            break;
        }
    };
    var int6 = (AND(int4, 2113929216) / 33554432);
    var int7 = enum_getvalue(0, 73, 2175 as cs2enum, int6);
    var int8 = struct_getparam(int7, 3092);
    var int9 = enum_getvalue(0, 73, 2175 as cs2enum, int6);
    switch (int6) {
        case 1: {
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17148);
            int8 = (int8 + struct_getparam(int9, 3092));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17149);
            int8 = (int8 + struct_getparam(int9, 3092));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17150);
            int8 = (int8 + struct_getparam(int9, 3092));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17151);
            int8 = (int8 + struct_getparam(int9, 3092));
            break;
        }
        case 2: {
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17161);
            int8 = (int8 + struct_getparam(int9, 3092));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17162);
            int8 = (int8 + struct_getparam(int9, 3092));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17163);
            int8 = (int8 + struct_getparam(int9, 3092));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17164);
            int8 = (int8 + struct_getparam(int9, 3092));
            break;
        }
        case 3: {
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17174);
            int8 = (int8 + struct_getparam(int9, 3092));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17175);
            int8 = (int8 + struct_getparam(int9, 3092));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17176);
            int8 = (int8 + struct_getparam(int9, 3092));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17177);
            int8 = (int8 + struct_getparam(int9, 3092));
            break;
        }
        case 4: {
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17187);
            int8 = (int8 + struct_getparam(int9, 3092));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17188);
            int8 = (int8 + struct_getparam(int9, 3092));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17189);
            int8 = (int8 + struct_getparam(int9, 3092));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17190);
            int8 = (int8 + struct_getparam(int9, 3092));
            break;
        }
        case 5: {
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17200);
            int8 = (int8 + struct_getparam(int9, 3092));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17201);
            int8 = (int8 + struct_getparam(int9, 3092));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17202);
            int8 = (int8 + struct_getparam(int9, 3092));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17203);
            int8 = (int8 + struct_getparam(int9, 3092));
            break;
        }
        default: {
            switch (int8) {
                case 1:
                case 2: {
                    int3 = (int3 + 3);
                    break;
                }
                case 3:
                case 4: {
                    int3 = (int3 + 7);
                    break;
                }
                case 5: {
                    int3 = (int3 + 15);
                    break;
                }
            };
            break;
        }
    };
    var int10 = item_getparam(int2, 3079);
    int3 = (int3 + (int10 * 2));
    if ((int3 < 14)) {
        return 1;
    };
    if ((int3 < 22)) {
        return 2;
    };
    if ((int3 < 29)) {
        return 3;
    };
    if ((int3 < 36)) {
        return 4;
    };
    return 5;
}