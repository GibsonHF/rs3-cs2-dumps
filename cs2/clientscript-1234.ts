//
function script1234(int0: int): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = ENUM_GETOUTPUTCOUNT(7717 as cs2enum);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = -1 as struct;
    switch (int0) {
        case 8: {
            MES_TYPED(99, 0, "Active Layout");
            break;
        }
        case 9: {
            MES_TYPED(99, 0, "Visible Layout");
            break;
        }
        case 6: {
            MES_TYPED(99, 0, "Custom1 Layout");
            break;
        }
        case 7: {
            MES_TYPED(99, 0, "Custom2 Layout");
            break;
        }
        case 12: {
            MES_TYPED(99, 0, "Custom3 Layout");
            break;
        }
        case 13: {
            MES_TYPED(99, 0, "Custom4 Layout");
            break;
        }
        default: {
            MES_TYPED(99, 0, "Invalid Layout");
            return;
        }
    };
    while ((int2 < int3)) {
        int1 = enum_getvalue(0, 0, 7717 as cs2enum, int2);
        int15 = script10405(int1);
        if ((int15 != -1 as struct)) {
            if ((MODULO(int2, 15) == 0)) {
                MES_TYPED(99, 0, "");
                MES_TYPED(99, 0, "Window Name / X / Y / X-align / Y-align / W / H / prev_tab / next_tab / vis / lightweight");
            };
            [int4, int5, int8, int9, int6, int7, int10, int11, int12, int13, int14] = script8701(int0, int1);
            MES_TYPED(99, 0, `${struct_getparam(int15, 3493)} / ${inttostring(int4, 10)} / ${inttostring(int5, 10)} / ${inttostring(int8, 10)} / ${inttostring(int9, 10)} / ${inttostring(int6, 10)} / ${inttostring(int7, 10)} / ${inttostring(int10, 10)} / ${inttostring(int11, 10)} / ${inttostring(int12, 10)} / ${inttostring(int13, 10)}`);
        };
        int2 = (int2 + 1);
    };
    return;
}