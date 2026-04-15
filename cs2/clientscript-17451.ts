//
function script17451(): int {
    var int0 = 0;
    var int1 = INV_GETOBJ(94 as inv, 5);
    var int2 = INV_GETOBJ(94 as inv, 3);
    if (((int1 != -1 as obj) && (script17449(int1) == 1))) {
        if ((item_getparam(int1, 749) == 1 as stat)) {
            int0 = item_getparam(int1, 750);
        } else if ((item_getparam(int1, 751) == 1 as stat)) {
            int0 = item_getparam(int1, 752);
        } else if ((item_getparam(int1, 753) == 1 as stat)) {
            int0 = item_getparam(int1, 754);
        } else if ((item_getparam(int1, 755) == 1 as stat)) {
            int0 = item_getparam(int1, 756);
        } else if ((item_getparam(int1, 757) == 1 as stat)) {
            int0 = item_getparam(int1, 758);
        } else if ((item_getparam(int1, 759) == 1 as stat)) {
            int0 = item_getparam(int1, 760);
        };
        if ((item_getparam(int1, 5416) == 1)) {
            int0 = (int0 / 2);
        };
    } else if (((int2 != -1 as obj) && (script17449(int2) == 1))) {
        if ((item_getparam(int2, 749) == 1 as stat)) {
            int0 = item_getparam(int2, 750);
        } else if ((item_getparam(int2, 751) == 1 as stat)) {
            int0 = item_getparam(int2, 752);
        } else if ((item_getparam(int2, 753) == 1 as stat)) {
            int0 = item_getparam(int2, 754);
        } else if ((item_getparam(int2, 755) == 1 as stat)) {
            int0 = item_getparam(int2, 756);
        } else if ((item_getparam(int2, 757) == 1 as stat)) {
            int0 = item_getparam(int2, 758);
        } else if ((item_getparam(int2, 759) == 1 as stat)) {
            int0 = item_getparam(int2, 760);
        };
        if ((item_getparam(int2, 5416) == 1)) {
            int0 = (int0 / 2);
        };
    };
    return int0;
}