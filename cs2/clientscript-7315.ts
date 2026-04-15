//
function script7315(int0: inv, int1: int): int {
    var int2 = INV_GETOBJ(int0, int1);
    if ((int2 == -1 as obj)) {
        return 0;
    };
    var int3 = item_getparam(int2, 3085);
    var int4 = script7319(int1);
    var int5 = MAX(0, (AND(int4, 2113929216) / 33554432));
    var int6 = enum_getvalue(0, 73, 2175 as cs2enum, int5);
    var int7 = struct_getparam(int6, 3085);
    switch (int5) {
        case 1: {
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17148);
            int7 = (int7 + struct_getparam(int6, 3085));
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17149);
            int7 = (int7 + struct_getparam(int6, 3085));
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17150);
            int7 = (int7 + struct_getparam(int6, 3085));
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17151);
            int7 = (int7 + struct_getparam(int6, 3085));
            break;
        }
        case 2: {
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17161);
            int7 = (int7 + struct_getparam(int6, 3085));
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17162);
            int7 = (int7 + struct_getparam(int6, 3085));
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17163);
            int7 = (int7 + struct_getparam(int6, 3085));
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17164);
            int7 = (int7 + struct_getparam(int6, 3085));
            break;
        }
        case 3: {
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17174);
            int7 = (int7 + struct_getparam(int6, 3085));
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17175);
            int7 = (int7 + struct_getparam(int6, 3085));
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17176);
            int7 = (int7 + struct_getparam(int6, 3085));
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17177);
            int7 = (int7 + struct_getparam(int6, 3085));
            break;
        }
        case 4: {
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17187);
            int7 = (int7 + struct_getparam(int6, 3085));
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17188);
            int7 = (int7 + struct_getparam(int6, 3085));
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17189);
            int7 = (int7 + struct_getparam(int6, 3085));
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17190);
            int7 = (int7 + struct_getparam(int6, 3085));
            break;
        }
        case 5: {
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17200);
            int7 = (int7 + struct_getparam(int6, 3085));
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17201);
            int7 = (int7 + struct_getparam(int6, 3085));
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17202);
            int7 = (int7 + struct_getparam(int6, 3085));
            int6 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17203);
            int7 = (int7 + struct_getparam(int6, 3085));
            break;
        }
    };
    int3 = (int3 + int7);
    return int3;
}