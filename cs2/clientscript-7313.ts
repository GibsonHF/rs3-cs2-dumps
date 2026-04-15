//
function script7313(int0: inv, int1: int): int {
    var int2 = INV_GETOBJ(int0, int1);
    if ((int2 == -1 as obj)) {
        return 0;
    };
    var int3 = item_getparam(int2, 3081);
    var int4 = (10 * script7317(int0, int1));
    int3 = (int3 + SCALE(int4, 100, int3));
    var int5 = enum_hasoutput(33, 2173 as cs2enum, int2);
    var int6 = script7319(int1);
    var int7 = (AND(int6, 57344) / 8192);
    if ((int5 == 1)) {
        int7 = (int7 * 20);
    } else {
        int7 = (int7 * 10);
    };
    int3 = (int3 + int7);
    var int8 = MAX(0, (AND(int6, 2113929216) / 33554432));
    var int9 = enum_getvalue(0, 73, 2175 as cs2enum, int8);
    var int10 = struct_getparam(int9, 3081);
    switch (int8) {
        case 1: {
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17148);
            int10 = (int10 + struct_getparam(int9, 3081));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17149);
            int10 = (int10 + struct_getparam(int9, 3081));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17150);
            int10 = (int10 + struct_getparam(int9, 3081));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17151);
            int10 = (int10 + struct_getparam(int9, 3081));
            break;
        }
        case 2: {
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17161);
            int10 = (int10 + struct_getparam(int9, 3081));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17162);
            int10 = (int10 + struct_getparam(int9, 3081));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17163);
            int10 = (int10 + struct_getparam(int9, 3081));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17164);
            int10 = (int10 + struct_getparam(int9, 3081));
            break;
        }
        case 3: {
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17174);
            int10 = (int10 + struct_getparam(int9, 3081));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17175);
            int10 = (int10 + struct_getparam(int9, 3081));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17176);
            int10 = (int10 + struct_getparam(int9, 3081));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17177);
            int10 = (int10 + struct_getparam(int9, 3081));
            break;
        }
        case 4: {
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17187);
            int10 = (int10 + struct_getparam(int9, 3081));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17188);
            int10 = (int10 + struct_getparam(int9, 3081));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17189);
            int10 = (int10 + struct_getparam(int9, 3081));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17190);
            int10 = (int10 + struct_getparam(int9, 3081));
            break;
        }
        case 5: {
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17200);
            int10 = (int10 + struct_getparam(int9, 3081));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17201);
            int10 = (int10 + struct_getparam(int9, 3081));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17202);
            int10 = (int10 + struct_getparam(int9, 3081));
            int9 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17203);
            int10 = (int10 + struct_getparam(int9, 3081));
            break;
        }
    };
    int3 = (int3 + int10);
    return int3;
}