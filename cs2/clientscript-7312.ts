//
function script7312(int0: inv, int1: int): [int, int, int] {
    var int2 = INV_GETOBJ(int0, int1);
    if ((int2 == -1 as obj)) {
        return [0, 0, 0];
    };
    var int3 = item_getparam(int2, 3082);
    var int4 = item_getparam(int2, 3083);
    var int5 = item_getparam(int2, 3084);
    var int6 = (10 * script7317(int0, int1));
    int3 = (int3 + SCALE(int6, 100, int3));
    int4 = (int4 + SCALE(int6, 100, int4));
    int5 = (int5 + SCALE(int6, 100, int5));
    var int7 = enum_hasoutput(33, 2173 as cs2enum, int2);
    var int8 = script7319(int1);
    var int9 = (AND(int8, 458752) / 65536);
    var int10 = (AND(int8, 3670016) / 524288);
    var int11 = (AND(int8, 29360128) / 4194304);
    var int12 = 10;
    if ((int7 == 1)) {
        int12 = 20;
    };
    int9 = (int9 * int12);
    int10 = (int10 * int12);
    int11 = (int11 * int12);
    int3 = (int3 + int9);
    int4 = (int4 + int10);
    int5 = (int5 + int11);
    var int13 = MAX(0, (AND(int8, 2113929216) / 33554432));
    var int14 = enum_getvalue(0, 73, 2175 as cs2enum, int13);
    var int15 = struct_getparam(int14, 3082);
    var int16 = struct_getparam(int14, 3083);
    var int17 = struct_getparam(int14, 3084);
    switch (int13) {
        case 1: {
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17148);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17149);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17150);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17151);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            break;
        }
        case 2: {
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17161);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17162);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17163);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17164);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            break;
        }
        case 3: {
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17174);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17175);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17176);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17177);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            break;
        }
        case 4: {
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17187);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17188);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17189);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17190);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            break;
        }
        case 5: {
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17200);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17201);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17202);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            int14 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17203);
            int15 = (int15 + struct_getparam(int14, 3082));
            int16 = (int16 + struct_getparam(int14, 3083));
            int17 = (int17 + struct_getparam(int14, 3084));
            break;
        }
    };
    int3 = (int3 + int15);
    int4 = (int4 + int16);
    int5 = (int5 + int17);
    return [int3, int4, int5];
}