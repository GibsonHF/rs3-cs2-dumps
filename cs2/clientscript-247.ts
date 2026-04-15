//
function script247(int0: unknown_int, int1: struct, int2: unknown_int, int3: int, string0: string, string1: string): [string, unknown_int, int, unknown_int] {
    var int4 = 0;
    switch (int1) {
        case 32568: {
            if ((((int0 == 2) && (varbitplayer_18179 == 0)) && (INV_GETOBJ(94 as inv, 1) != 27588 as obj))) {
                int4 = 1;
            } else if (((((item_getparam(INV_GETOBJ(94 as inv, 1), 6295) == 1) || (item_getparam(INV_GETOBJ(94 as inv, 1), 4552) == 1)) || (INV_GETOBJ(94 as inv, 1) == 32053 as obj)) && (script13040(7, 0) == 1))) {
                var int3 = 1;
                return [string0, int2, int3, int4];
            };
            break;
        }
        case 32563: {
            if ((((int0 == 3) && (varbitplayer_4407 == 0)) && (INV_GETOBJ(94 as inv, 9) == 775 as obj))) {
                int4 = 1;
            };
            break;
        }
        case 32569: {
            if ((((int0 == 3) && (varbitplayer_4422 == 0)) && (INV_GETOBJ(94 as inv, 9) == 776 as obj))) {
                int4 = 1;
            };
            break;
        }
        case 33146: {
            if ((((int0 == 5) && (varbitplayer_30607 == 0)) && (OC_CATEGORY(INV_GETOBJ(94 as inv, 10)) == 3168 as category))) {
                int4 = 1;
            };
            break;
        }
    };
    if ((int4 == 1)) {
        var string0 = string1;
        var int2 = 1;
    };
    return [string0, int2, int3, int4];
}