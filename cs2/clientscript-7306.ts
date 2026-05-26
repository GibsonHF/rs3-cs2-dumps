//
function script7306(): void {
    IF_SETCOLOUR(16446166, 83623988);
    IF_SETCOLOUR(16446166, 83624010);
    IF_SETCOLOUR(16446166, 83624032);
    IF_SETCOLOUR(16446166, 83623964);
    IF_SETCOLOUR(16446166, 83623986);
    IF_SETCOLOUR(16446166, 83624008);
    IF_SETCOLOUR(16446166, 83624030);
    IF_SETCOLOUR(16446166, 83623962);
    IF_SETCOLOUR(16446166, 83623985);
    IF_SETCOLOUR(16446166, 83624007);
    IF_SETCOLOUR(16446166, 83624029);
    IF_SETCOLOUR(16446166, 83623961);
    IF_SETCOLOUR(16446166, 83623987);
    IF_SETCOLOUR(16446166, 83624009);
    IF_SETCOLOUR(16446166, 83624031);
    IF_SETCOLOUR(16446166, 83623963);
    IF_SETCOLOUR(16446166, 83624070);
    IF_SETCOLOUR(16446166, 83624066);
    IF_SETCOLOUR(16446166, 83624065);
    IF_SETCOLOUR(16446166, 83624069);
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = INV_GETOBJ(678, varplayer_3420);
    if (((varclient_2626 == -1 as obj) || (int4 == -1))) {
        return;
    };
    var int5 = 0;
    if (((enum_hasoutput(33, 2173, varclient_2626) == 1) && (enum_hasoutput(33, 2173, int4) == 0))) {
        int5 = 1;
    };
    if (((enum_hasoutput(33, 2173, varclient_2626) == 0) && (enum_hasoutput(33, 2173, int4) == 1))) {
        int5 = 1;
    };
    switch (varplayer_3420) {
        case 0: {
            int0 = 83623988;
            int1 = 83623985;
            int2 = 83623986;
            int3 = 83623987;
            break;
        }
        case 1: {
            int0 = 83624010;
            int1 = 83624007;
            int2 = 83624008;
            int3 = 83624009;
            break;
        }
        case 2: {
            int0 = 83624032;
            int1 = 83624029;
            int2 = 83624030;
            int3 = 83624031;
            break;
        }
        case 3: {
            int0 = 83623964;
            int1 = 83623961;
            int2 = 83623962;
            int3 = 83623963;
            break;
        }
    };
    if ((int5 == 1)) {
        IF_SETCOLOUR(6381920, 83624070);
        IF_SETCOLOUR(6381920, int0);
    } else if ((item_getparam(int4, 3081) > varclient_2632)) {
        IF_SETCOLOUR(16711680, 83624070);
        IF_SETCOLOUR(1936391, int0);
    } else if ((item_getparam(int4, 3081) < varclient_2632)) {
        IF_SETCOLOUR(1936391, 83624070);
        IF_SETCOLOUR(16711680, int0);
    };
    if ((int5 == 1)) {
        IF_SETCOLOUR(6381920, 83624066);
        IF_SETCOLOUR(6381920, int1);
    } else if ((item_getparam(int4, 3082) > varclient_2638)) {
        IF_SETCOLOUR(16711680, 83624066);
        IF_SETCOLOUR(1936391, int1);
    } else if ((item_getparam(int4, 3082) < varclient_2638)) {
        IF_SETCOLOUR(1936391, 83624066);
        IF_SETCOLOUR(16711680, int1);
    };
    if ((int5 == 1)) {
        IF_SETCOLOUR(6381920, 83624065);
        IF_SETCOLOUR(6381920, int2);
    } else if ((item_getparam(int4, 3083) > varclient_2634)) {
        IF_SETCOLOUR(16711680, 83624065);
        IF_SETCOLOUR(1936391, int2);
    } else if ((item_getparam(int4, 3083) < varclient_2634)) {
        IF_SETCOLOUR(1936391, 83624065);
        IF_SETCOLOUR(16711680, int2);
    };
    if ((int5 == 1)) {
        IF_SETCOLOUR(6381920, 83624069);
        IF_SETCOLOUR(6381920, int3);
    } else if ((item_getparam(int4, 3084) > varclient_2640)) {
        IF_SETCOLOUR(16711680, 83624069);
        IF_SETCOLOUR(1936391, int3);
    } else if ((item_getparam(int4, 3084) < varclient_2640)) {
        IF_SETCOLOUR(1936391, 83624069);
        IF_SETCOLOUR(16711680, int3);
    };
    return;
}