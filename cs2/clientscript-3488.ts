//[clientscript,rand_ring_interface_init]
function script3488(): void {
    MAX(varbitplayer_43374, 1);
    switch (varbitplayer_43374) {
        case 1: {
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2438 * 10)), 17, 0, 0, comp(993, 126));
            if ((varbitplayer_2438 == 10)) {
                IF_SETHIDE(true, comp(993, 32));
            } else {
                IF_SETHIDE(false, comp(993, 32));
            };
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2439 * 10)), 17, 0, 0, comp(993, 72));
            if ((varbitplayer_2439 == 10)) {
                IF_SETHIDE(true, comp(993, 26));
            } else {
                IF_SETHIDE(false, comp(993, 26));
            };
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2440 * 10)), 17, 0, 0, comp(993, 99));
            if ((varbitplayer_2440 == 10)) {
                IF_SETHIDE(true, comp(993, 21));
            } else {
                IF_SETHIDE(false, comp(993, 21));
            };
            break;
        }
        case 2: {
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2441 * 10)), 17, 0, 0, comp(993, 126));
            if ((varbitplayer_2441 == 10)) {
                IF_SETHIDE(true, comp(993, 32));
            } else {
                IF_SETHIDE(false, comp(993, 32));
            };
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2442 * 10)), 17, 0, 0, comp(993, 72));
            if ((varbitplayer_2442 == 10)) {
                IF_SETHIDE(true, comp(993, 26));
            } else {
                IF_SETHIDE(false, comp(993, 26));
            };
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2443 * 10)), 17, 0, 0, comp(993, 99));
            if ((varbitplayer_2443 == 10)) {
                IF_SETHIDE(true, comp(993, 21));
            } else {
                IF_SETHIDE(false, comp(993, 21));
            };
            break;
        }
        case 3: {
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2444 * 10)), 17, 0, 0, comp(993, 126));
            if ((varbitplayer_2444 == 10)) {
                IF_SETHIDE(true, comp(993, 32));
            } else {
                IF_SETHIDE(false, comp(993, 32));
            };
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2445 * 10)), 17, 0, 0, comp(993, 72));
            if ((varbitplayer_2445 == 10)) {
                IF_SETHIDE(true, comp(993, 26));
            } else {
                IF_SETHIDE(false, comp(993, 26));
            };
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2446 * 10)), 17, 0, 0, comp(993, 99));
            if ((varbitplayer_2446 == 10)) {
                IF_SETHIDE(true, comp(993, 21));
            } else {
                IF_SETHIDE(false, comp(993, 21));
            };
            break;
        }
        case 4: {
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2447 * 10)), 17, 0, 0, comp(993, 126));
            if ((varbitplayer_2447 == 10)) {
                IF_SETHIDE(true, comp(993, 32));
            } else {
                IF_SETHIDE(false, comp(993, 32));
            };
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2448 * 10)), 17, 0, 0, comp(993, 72));
            if ((varbitplayer_2448 == 10)) {
                IF_SETHIDE(true, comp(993, 26));
            } else {
                IF_SETHIDE(false, comp(993, 26));
            };
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2449 * 10)), 17, 0, 0, comp(993, 99));
            if ((varbitplayer_2449 == 10)) {
                IF_SETHIDE(true, comp(993, 21));
            } else {
                IF_SETHIDE(false, comp(993, 21));
            };
            break;
        }
    };
    script13995(comp(993, 37), comp(-1, 65535), 28556 as struct, "", script9670(varbitplayer_43374, 1));
    script13995(comp(993, 39), comp(-1, 65535), 28556 as struct, "", script9670(varbitplayer_43374, 2));
    script13995(comp(993, 41), comp(-1, 65535), 28556 as struct, "", script9670(varbitplayer_43374, 3));
    script13995(comp(993, 43), comp(-1, 65535), 28556 as struct, "", script9670(varbitplayer_43374, 4));
    var int0 = enum_getvalue(0, 26, 3088 as cs2enum, varbitplayer_43374);
    IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, int0, 1), 1089), comp(993, 102));
    IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, int0, 1), 1090), comp(993, 103));
    IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, int0, 2), 1089), comp(993, 48));
    IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, int0, 2), 1090), comp(993, 49));
    IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, int0, 3), 1089), comp(993, 75));
    IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, int0, 3), 1090), comp(993, 76));
    return;
}