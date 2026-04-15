//
function script6589(int0: obj, int1: obj, int2: int): int {
    var int3 = 0;
    var int4 = -1 as obj;
    var int5 = -1 as cs2enum;
    if ((enum_getreversecount(33, 11368 as cs2enum, int0) > 0)) {
        int4 = enum_getreverseindex(33, 33, 11368 as cs2enum, int0, 0);
        if ((int4 != -1 as obj)) {
            int5 = item_getparam(int4, 4800);
        };
    };
    if ((int5 != -1 as cs2enum)) {
        return script6678(enum_getvalue(26, 73, 11352 as cs2enum, int5), 0, int2);
    };
    switch (int0) {
        case 569: {
            int3 = script6678(14780 as struct, 0, int2);
            break;
        }
        case 571: {
            int3 = script6678(14771 as struct, 0, int2);
            break;
        }
        case 573: {
            int3 = script6678(14783 as struct, 0, int2);
            break;
        }
        case 575: {
            int3 = script6678(14775 as struct, 0, int2);
            break;
        }
        case 21779:
        case 21782:
        case 21780:
        case 21781: {
            int3 = script6678(14861 as struct, 2, int2);
            break;
        }
        case 25613:
        case 25614:
        case 25615:
        case 25616:
        case 25617:
        case 25618:
        case 25619:
        case 25620:
        case 25621:
        case 48442: {
            int3 = script6678(14854 as struct, 2, int2);
            break;
        }
        default: {
            if ((((((int0 != -1 as obj) && (int1 != -1 as obj)) && (item_getparam(int0, 9219) == 1)) && (OC_CATEGORY(int1) == 22 as category)) && (INV_TOTALCAT(93 as inv, 5297) > 0))) {
                int3 = INV_TOTAL(937 as inv, int1);
            };
            break;
        }
    };
    return int3;
}