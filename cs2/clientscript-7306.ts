//
function script7306(): void {
    IF_SETCOLOUR(16446166, comp(1276, 52));
    IF_SETCOLOUR(16446166, comp(1276, 74));
    IF_SETCOLOUR(16446166, comp(1276, 96));
    IF_SETCOLOUR(16446166, comp(1276, 28));
    IF_SETCOLOUR(16446166, comp(1276, 50));
    IF_SETCOLOUR(16446166, comp(1276, 72));
    IF_SETCOLOUR(16446166, comp(1276, 94));
    IF_SETCOLOUR(16446166, comp(1276, 26));
    IF_SETCOLOUR(16446166, comp(1276, 49));
    IF_SETCOLOUR(16446166, comp(1276, 71));
    IF_SETCOLOUR(16446166, comp(1276, 93));
    IF_SETCOLOUR(16446166, comp(1276, 25));
    IF_SETCOLOUR(16446166, comp(1276, 51));
    IF_SETCOLOUR(16446166, comp(1276, 73));
    IF_SETCOLOUR(16446166, comp(1276, 95));
    IF_SETCOLOUR(16446166, comp(1276, 27));
    IF_SETCOLOUR(16446166, comp(1276, 134));
    IF_SETCOLOUR(16446166, comp(1276, 130));
    IF_SETCOLOUR(16446166, comp(1276, 129));
    IF_SETCOLOUR(16446166, comp(1276, 133));
    var int0 = comp(-1, 65535);
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = INV_GETOBJ(678 as inv, varplayer_3420);
    if (((varclient_2626 == -1 as obj) || (int4 == -1 as obj))) {
        return;
    };
    var int5 = 0;
    if (((enum_hasoutput(33, 2173 as cs2enum, varclient_2626) == 1) && (enum_hasoutput(33, 2173 as cs2enum, int4) == 0))) {
        int5 = 1;
    };
    if (((enum_hasoutput(33, 2173 as cs2enum, varclient_2626) == 0) && (enum_hasoutput(33, 2173 as cs2enum, int4) == 1))) {
        int5 = 1;
    };
    switch (varplayer_3420) {
        case 0: {
            int0 = comp(1276, 52);
            int1 = comp(1276, 49);
            int2 = comp(1276, 50);
            int3 = comp(1276, 51);
            break;
        }
        case 1: {
            int0 = comp(1276, 74);
            int1 = comp(1276, 71);
            int2 = comp(1276, 72);
            int3 = comp(1276, 73);
            break;
        }
        case 2: {
            int0 = comp(1276, 96);
            int1 = comp(1276, 93);
            int2 = comp(1276, 94);
            int3 = comp(1276, 95);
            break;
        }
        case 3: {
            int0 = comp(1276, 28);
            int1 = comp(1276, 25);
            int2 = comp(1276, 26);
            int3 = comp(1276, 27);
            break;
        }
    };
    if ((int5 == 1)) {
        IF_SETCOLOUR(6381920, comp(1276, 134));
        IF_SETCOLOUR(6381920, int0);
    } else if ((item_getparam(int4, 3081) > varclient_2632)) {
        IF_SETCOLOUR(16711680, comp(1276, 134));
        IF_SETCOLOUR(1936391, int0);
    } else if ((item_getparam(int4, 3081) < varclient_2632)) {
        IF_SETCOLOUR(1936391, comp(1276, 134));
        IF_SETCOLOUR(16711680, int0);
    };
    if ((int5 == 1)) {
        IF_SETCOLOUR(6381920, comp(1276, 130));
        IF_SETCOLOUR(6381920, int1);
    } else if ((item_getparam(int4, 3082) > varclient_2638)) {
        IF_SETCOLOUR(16711680, comp(1276, 130));
        IF_SETCOLOUR(1936391, int1);
    } else if ((item_getparam(int4, 3082) < varclient_2638)) {
        IF_SETCOLOUR(1936391, comp(1276, 130));
        IF_SETCOLOUR(16711680, int1);
    };
    if ((int5 == 1)) {
        IF_SETCOLOUR(6381920, comp(1276, 129));
        IF_SETCOLOUR(6381920, int2);
    } else if ((item_getparam(int4, 3083) > varclient_2634)) {
        IF_SETCOLOUR(16711680, comp(1276, 129));
        IF_SETCOLOUR(1936391, int2);
    } else if ((item_getparam(int4, 3083) < varclient_2634)) {
        IF_SETCOLOUR(1936391, comp(1276, 129));
        IF_SETCOLOUR(16711680, int2);
    };
    if ((int5 == 1)) {
        IF_SETCOLOUR(6381920, comp(1276, 133));
        IF_SETCOLOUR(6381920, int3);
    } else if ((item_getparam(int4, 3084) > varclient_2640)) {
        IF_SETCOLOUR(16711680, comp(1276, 133));
        IF_SETCOLOUR(1936391, int3);
    } else if ((item_getparam(int4, 3084) < varclient_2640)) {
        IF_SETCOLOUR(1936391, comp(1276, 133));
        IF_SETCOLOUR(16711680, int3);
    };
    return;
}