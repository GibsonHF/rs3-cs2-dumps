//
function script12693(): void {
    var int0 = -1;
    var int1 = 0;
    var int2 = 1;
    switch (struct_getparam(34148, 3461)) {
        case 1802:
        case 1810: {
            break;
        }
        default: {
            return;
        }
    };
    int0 = script14441();
    if (((int0 == -1) || (varbitplayer_33661 == 0))) {
        if ((varclient_5882 == 0)) {
            IF_SETHIDE(false, comp(1784, 6));
            return;
        };
        script92();
    };
    if ((int0 != -1)) {
        if (((struct_getparam(int0, 6139) == 3) || (struct_getparam(int0, 6139) == 5))) {
            IF_SETHIDE(true, comp(1802, 1));
            IF_SETHIDE(false, comp(1802, 250));
            if ((struct_getparam(int0, 6139) == 3)) {
                IF_SETHIDE(true, comp(1802, 251));
                IF_SETHIDE(false, comp(1802, 283));
            } else {
                IF_SETHIDE(false, comp(1802, 251));
                IF_SETHIDE(true, comp(1802, 283));
            };
        } else {
            IF_SETHIDE(false, comp(1802, 1));
            IF_SETHIDE(true, comp(1802, 250));
        };
        IF_SETHIDE(true, comp(1784, 6));
        if ((struct_getparam(int0, 5901) != -1 as graphic)) {
            IF_SETGRAPHIC(struct_getparam(int0, 5901), comp(1784, 9));
            IF_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int0, 5905), -2147483645, -1), comp(1784, 7));
        };
        if ((struct_getparam(int0, 5906) != -1 as graphic)) {
            IF_SETHIDE(false, comp(1784, 10));
            IF_SETGRAPHIC(struct_getparam(int0, 5906), comp(1784, 15));
            IF_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int0, 5910), -2147483645, -1), comp(1784, 10));
            int2 = (int2 + 1);
        } else {
            IF_SETHIDE(true, comp(1784, 10));
        };
        if ((struct_getparam(int0, 5911) != -1 as graphic)) {
            IF_SETHIDE(false, comp(1784, 11));
            IF_SETGRAPHIC(struct_getparam(int0, 5911), comp(1784, 17));
            IF_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int0, 5915), -2147483645, -1), comp(1784, 11));
            int2 = (int2 + 1);
        } else {
            IF_SETHIDE(true, comp(1784, 11));
        };
        if ((struct_getparam(int0, 5916) != -1 as graphic)) {
            IF_SETHIDE(false, comp(1784, 12));
            IF_SETGRAPHIC(struct_getparam(int0, 5916), comp(1784, 19));
            IF_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int0, 5920), -2147483645, -1), comp(1784, 12));
            int2 = (int2 + 1);
        } else {
            IF_SETHIDE(true, comp(1784, 12));
        };
        if ((struct_getparam(int0, 5921) != -1 as graphic)) {
            IF_SETHIDE(false, comp(1784, 13));
            IF_SETGRAPHIC(struct_getparam(int0, 5921), comp(1784, 21));
            IF_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int0, 5925), -2147483645, -1), comp(1784, 13));
            int2 = (int2 + 1);
        } else {
            IF_SETHIDE(true, comp(1784, 13));
        };
        if ((struct_getparam(int0, 5909) == comp(-1, 65535))) {
            script92();
        };
    } else {
        IF_SETHIDE(false, comp(1784, 6));
    };
    return;
}