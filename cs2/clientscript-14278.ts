//
function script14278(int0: int): void {
    var int1 = enum_getvalue(0, 26, 14121 as cs2enum, int0);
    if ((int1 == -1 as cs2enum)) {
        return;
    };
    CC_DELETEALL(comp(1011, 10));
    CC_DELETEALL(comp(1011, 12));
    var int2 = 0;
    var int3 = ENUM_GETOUTPUTCOUNT(int1);
    var int4 = 0;
    var int5 = 9;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as struct;
    var int9 = false;
    var int10 = -1 as graphic;
    var int11 = -1 as obj;
    var string0 = "";
    var string1 = "";
    while ((int2 < int3)) {
        int8 = enum_getvalue(0, 73, int1, int2);
        int6 = script9670(int2, varplayer_7992);
        int11 = struct_getparam(int8, 4851);
        [int9, int10, string0] = script14281(int8);
        string1 = struct_getparam(int8, 4858);
        int7 = (IF_GETNEXTSUBID(comp(1011, 10)) + 10);
        script13998(comp(1011, 10), comp(1011, 12), 28556 as struct, int5, int4, 220, 43, int2, int9, "", int6);
        if (((int9 == false) && (CC_FIND(comp(1011, 12), int2) == 1))) {
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script14280, -2147483643));
        };
        if ((CC_FIND(comp(1011, 10), int7) == 1)) {
            if ((STRING_LENGTH(string1) == 0)) {
                if ((struct_getparam(int8, 7277) == 1)) {
                    string1 = script14282(int8);
                } else {
                    switch (int8) {
                        case 40094: {
                            string1 = "Purchasing this will provide one batch of the following grimy herbs:<br> - 25x Cadantine<br> - 20x Ranarr<br> - 20x Irit<br> - 20x Kwuarm<br> - 16x Toadflax<br> - 16x Avantoe<br> - 16x Snapdragon<br> - 8x Dwarf weed<br> - 8x Lantadyme";
                            break;
                        }
                        case 40095: {
                            string1 = "Purchasing this will provide one batch of the following ores:<br> - 100x Coal<br> - 75x Iron<br> - 75x Gold<br> - 30x Mithril ore<br> - 20x Adamant ore<br> - 5x Rune ore";
                            break;
                        }
                        case 40096: {
                            string1 = "Purchasing this will provide one batch of the following seeds:<br> - 16x Ranarr seed<br> - 16x Limpwurt seed<br> - 16x Cadantine seed<br> - 16x Toadflax seed<br> - 16x Snapdragon seed<br> - 12x Avantoe seed<br> - 12x Watermelon seed<br> - 1x Lantadyme seed<br> - 1x Dwarf weed seed";
                            break;
                        }
                    };
                };
            };
            if (((int11 != -1 as obj) && (struct_getparam(int8, 7277) != 4))) {
                CC_SETONMOUSEREPEAT(callback(script14193, string1, int11, -2147483645, -2147483643));
            } else {
                CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
            };
        };
        script4512(comp(1011, 10), 35, 35, (int5 + 4), (int4 + 4), int10);
        if ((int10 == -1 as graphic)) {
            CC_SETOBJECT_NONUM(int11, 1);
        };
        script6200(comp(1011, 10), 175, 13, (int5 + 40), (int4 + 4), 26 as fontmetrics, struct_getparam(int8, 4849), 0);
        script6201(comp(1011, 10), 175, 24, (int5 + 40), (int4 + 17), 27 as fontmetrics, string0);
        int2 = (int2 + 1);
        if ((++int5 > 300)) {
            int5 = 9;
            int4 = (int4 + 44);
        };
    };
    varplayer_7993 = int0;
    return;
}