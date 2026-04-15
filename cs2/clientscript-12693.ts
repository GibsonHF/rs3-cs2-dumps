//
function script12693(): void {
    var int0 = -1 as struct;
    var int1 = 0;
    var int2 = 1;
    switch (struct_getparam(34148 as struct, 3461)) {
        case 1802:
        case 1810: {
            break;
        }
        default: {
            return;
        }
    };
    int0 = script14441();
    if (((int0 == -1 as struct) || (varbitplayer_33661 == 0))) {
        if ((varclient_5882 == 0)) {
            IF_SETHIDE(false, comp(1784, 6));
            return;
        };
        script92();
    };
    if ((int0 != -1 as struct)) {
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
            stack(struct_getparam(int0, 5901));
            stack(116916233);
            IF_SETGRAPHIC();
            stack(8799);
            stack(int0);
            stack(5905);
            struct_getparam();
            IF_SETONMOUSEREPEAT(callback(script-1, -2147483645, -1), 116916231);
        };
        if ((struct_getparam(int0, 5906) != -1 as graphic)) {
            IF_SETHIDE(false, comp(1784, 10));
            stack(struct_getparam(int0, 5906));
            stack(116916239);
            IF_SETGRAPHIC();
            stack(8799);
            stack(int0);
            stack(5910);
            struct_getparam();
            IF_SETONMOUSEREPEAT(callback(script-1, -2147483645, -1), 116916234);
            int2 = (int2 + 1);
        } else {
            IF_SETHIDE(true, comp(1784, 10));
        };
        if ((struct_getparam(int0, 5911) != -1 as graphic)) {
            IF_SETHIDE(false, comp(1784, 11));
            stack(struct_getparam(int0, 5911));
            stack(116916241);
            IF_SETGRAPHIC();
            stack(8799);
            stack(int0);
            stack(5915);
            struct_getparam();
            IF_SETONMOUSEREPEAT(callback(script-1, -2147483645, -1), 116916235);
            int2 = (int2 + 1);
        } else {
            IF_SETHIDE(true, comp(1784, 11));
        };
        if ((struct_getparam(int0, 5916) != -1 as graphic)) {
            IF_SETHIDE(false, comp(1784, 12));
            stack(struct_getparam(int0, 5916));
            stack(116916243);
            IF_SETGRAPHIC();
            stack(8799);
            stack(int0);
            stack(5920);
            struct_getparam();
            IF_SETONMOUSEREPEAT(callback(script-1, -2147483645, -1), 116916236);
            int2 = (int2 + 1);
        } else {
            IF_SETHIDE(true, comp(1784, 12));
        };
        if ((struct_getparam(int0, 5921) != -1 as graphic)) {
            IF_SETHIDE(false, comp(1784, 13));
            stack(struct_getparam(int0, 5921));
            stack(116916245);
            IF_SETGRAPHIC();
            stack(8799);
            stack(int0);
            stack(5925);
            struct_getparam();
            IF_SETONMOUSEREPEAT(callback(script-1, -2147483645, -1), 116916237);
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