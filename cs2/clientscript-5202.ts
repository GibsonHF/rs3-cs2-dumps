//
function script5202(int0: unknown_int): void {
    if ((int0 == 1)) {
        varclient_1597 = varbitplayer_1034;
        varclient_1598 = varbitplayer_1035;
        varclient_1599 = varbitplayer_1036;
        varclient_1600 = varbitplayer_1037;
        varclient_1601 = varbitplayer_1038;
    };
    switch (varclient_1600) {
        case 0: {
            IF_SETMODEL(43803 as model, comp(1122, 66));
            break;
        }
        case 1: {
            IF_SETMODEL(43796 as model, comp(1122, 66));
            break;
        }
        case 2: {
            IF_SETMODEL(43790 as model, comp(1122, 66));
            break;
        }
        case 3: {
            IF_SETMODEL(43779 as model, comp(1122, 66));
            break;
        }
        case 4: {
            IF_SETMODEL(43795 as model, comp(1122, 66));
            break;
        }
    };
    switch (varbitplayer_1009) {
        case 1: {
            IF_SETRETEX(2, 754 as material, 756 as material, comp(1122, 66));
            break;
        }
        case 2: {
            IF_SETRETEX(2, 754 as material, 754 as material, comp(1122, 66));
            break;
        }
        case 3: {
            IF_SETRETEX(2, 754 as material, 751 as material, comp(1122, 66));
            break;
        }
    };
    var int1 = enum_getvalue(0, 73, 4850 as cs2enum, varclient_1601);
    if ((int1 == -1 as struct)) {
        IF_SETRETEX(1, 753 as material, 749 as material, comp(1122, 66));
    } else {
        IF_SETRETEX(1, 753 as material, struct_getparam(int1, 1884), comp(1122, 66));
    };
    IF_SETRECOL(0, 41506, varclient_1597, comp(1122, 66));
    IF_SETRECOL(1, 41497, script5183(varclient_1597, 0, 0, -9), comp(1122, 66));
    IF_SETRECOL(2, 13434, varclient_1598, comp(1122, 66));
    IF_SETRECOL(3, 7102, varclient_1599, comp(1122, 66));
    return;
}