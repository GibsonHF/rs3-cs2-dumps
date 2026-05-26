//
function script247(int0: number, int1: number, int2: number, int3: number, string0: string, string1: string): [string, number, number, number] {
    var int4 = 0;
    switch (int1) {
        case 32568: {
            if ((((int0 == 2) && (varbitplayer_18179 == 0)) && (INV_GETOBJ(94, 1) != 27588))) {
                int4 = 1;
            } else if (((((item_getparam(INV_GETOBJ(94, 1), 6295) == 1) || (item_getparam(INV_GETOBJ(94, 1), 4552) == 1)) || (INV_GETOBJ(94, 1) == 32053)) && (script13040(7, 0) == 1))) {
                var int3 = 1;
                return [string0, int2, int3, int4];
            };
            break;
        }
        case 32563: {
            if ((((int0 == 3) && (varbitplayer_4407 == 0)) && (INV_GETOBJ(94, 9) == 775))) {
                int4 = 1;
            };
            break;
        }
        case 32569: {
            if ((((int0 == 3) && (varbitplayer_4422 == 0)) && (INV_GETOBJ(94, 9) == 776))) {
                int4 = 1;
            };
            break;
        }
        case 33146: {
            if ((((int0 == 5) && (varbitplayer_30607 == 0)) && (OC_CATEGORY(INV_GETOBJ(94, 10)) == 3168))) {
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