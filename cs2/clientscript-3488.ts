//[clientscript,rand_ring_interface_init]
function script3488(): void {
    MAX(varbitplayer_43374, 1);
    switch (varbitplayer_43374) {
        case 1: {
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2438 * 10)), 17, 0, 0, comp(993, 120));
            if ((varbitplayer_2438 == 10)) {
                IF_SETHIDE(true, comp(993, 24));
            } else {
                IF_SETHIDE(false, comp(993, 24));
            };
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2439 * 10)), 17, 0, 0, comp(993, 66));
            if ((varbitplayer_2439 == 10)) {
                IF_SETHIDE(true, comp(993, 20));
            } else {
                IF_SETHIDE(false, comp(993, 20));
            };
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2440 * 10)), 17, 0, 0, comp(993, 93));
            if ((varbitplayer_2440 == 10)) {
                IF_SETHIDE(true, comp(993, 17));
            } else {
                IF_SETHIDE(false, comp(993, 17));
            };
            break;
        }
        case 2: {
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2441 * 10)), 17, 0, 0, comp(993, 120));
            if ((varbitplayer_2441 == 10)) {
                IF_SETHIDE(true, comp(993, 24));
            } else {
                IF_SETHIDE(false, comp(993, 24));
            };
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2442 * 10)), 17, 0, 0, comp(993, 66));
            if ((varbitplayer_2442 == 10)) {
                IF_SETHIDE(true, comp(993, 20));
            } else {
                IF_SETHIDE(false, comp(993, 20));
            };
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2443 * 10)), 17, 0, 0, comp(993, 93));
            if ((varbitplayer_2443 == 10)) {
                IF_SETHIDE(true, comp(993, 17));
            } else {
                IF_SETHIDE(false, comp(993, 17));
            };
            break;
        }
        case 3: {
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2444 * 10)), 17, 0, 0, comp(993, 120));
            if ((varbitplayer_2444 == 10)) {
                IF_SETHIDE(true, comp(993, 24));
            } else {
                IF_SETHIDE(false, comp(993, 24));
            };
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2445 * 10)), 17, 0, 0, comp(993, 66));
            if ((varbitplayer_2445 == 10)) {
                IF_SETHIDE(true, comp(993, 20));
            } else {
                IF_SETHIDE(false, comp(993, 20));
            };
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2446 * 10)), 17, 0, 0, comp(993, 93));
            if ((varbitplayer_2446 == 10)) {
                IF_SETHIDE(true, comp(993, 17));
            } else {
                IF_SETHIDE(false, comp(993, 17));
            };
            break;
        }
        case 4: {
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_24893 * 10)), 17, 0, 0, comp(993, 120));
            if ((varbitplayer_24893 == 10)) {
                IF_SETHIDE(true, comp(993, 24));
            } else {
                IF_SETHIDE(false, comp(993, 24));
            };
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_24894 * 10)), 17, 0, 0, comp(993, 66));
            if ((varbitplayer_24894 == 10)) {
                IF_SETHIDE(true, comp(993, 20));
            } else {
                IF_SETHIDE(false, comp(993, 20));
            };
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_24895 * 10)), 17, 0, 0, comp(993, 93));
            if ((varbitplayer_24895 == 10)) {
                IF_SETHIDE(true, comp(993, 17));
            } else {
                IF_SETHIDE(false, comp(993, 17));
            };
            break;
        }
        case 5: {
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2447 * 10)), 17, 0, 0, comp(993, 120));
            if ((varbitplayer_2447 == 10)) {
                IF_SETHIDE(true, comp(993, 24));
            } else {
                IF_SETHIDE(false, comp(993, 24));
            };
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2448 * 10)), 17, 0, 0, comp(993, 66));
            if ((varbitplayer_2448 == 10)) {
                IF_SETHIDE(true, comp(993, 20));
            } else {
                IF_SETHIDE(false, comp(993, 20));
            };
            IF_SETSIZE(SCALE(250, 100, (varbitplayer_2449 * 10)), 17, 0, 0, comp(993, 93));
            if ((varbitplayer_2449 == 10)) {
                IF_SETHIDE(true, comp(993, 17));
            } else {
                IF_SETHIDE(false, comp(993, 17));
            };
            break;
        }
    };
    script13995(comp(993, 31), comp(-1, 65535), 28556 as struct, "", script9670(varbitplayer_43374, 1));
    script13995(comp(993, 32), comp(-1, 65535), 28556 as struct, "", script9670(varbitplayer_43374, 2));
    script13995(comp(993, 35), comp(-1, 65535), 28556 as struct, "", script9670(varbitplayer_43374, 3));
    script13995(comp(993, 149), comp(-1, 65535), 28556 as struct, "", script9670(varbitplayer_43374, 4));
    script13995(comp(993, 38), comp(-1, 65535), 28556 as struct, "", script9670(varbitplayer_43374, 5));
    var int0 = enum_getvalue(0, 26, 3088 as cs2enum, varbitplayer_43374);
    IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, int0, 1), 1089), comp(993, 96));
    IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, int0, 1), 1090), comp(993, 97));
    IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, int0, 2), 1089), comp(993, 42));
    IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, int0, 2), 1090), comp(993, 43));
    IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, int0, 3), 1089), comp(993, 69));
    IF_SETTEXT(struct_getparam(enum_getvalue(0, 73, int0, 3), 1090), comp(993, 70));
    script7227();
    return;
}