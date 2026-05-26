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
            IF_SETHIDE(0, 116916230);
            return;
        };
        script92();
    };
    if ((int0 != -1)) {
        if (((struct_getparam(int0, 6139) == 3) || (struct_getparam(int0, 6139) == 5))) {
            IF_SETHIDE(1, 118095873);
            IF_SETHIDE(0, 118096122);
            if ((struct_getparam(int0, 6139) == 3)) {
                IF_SETHIDE(1, 118096123);
                IF_SETHIDE(0, 118096155);
            } else {
                IF_SETHIDE(0, 118096123);
                IF_SETHIDE(1, 118096155);
            };
        } else {
            IF_SETHIDE(0, 118095873);
            IF_SETHIDE(1, 118096122);
        };
        IF_SETHIDE(1, 116916230);
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
            IF_SETHIDE(0, 116916234);
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
            IF_SETHIDE(1, 116916234);
        };
        if ((struct_getparam(int0, 5911) != -1 as graphic)) {
            IF_SETHIDE(0, 116916235);
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
            IF_SETHIDE(1, 116916235);
        };
        if ((struct_getparam(int0, 5916) != -1 as graphic)) {
            IF_SETHIDE(0, 116916236);
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
            IF_SETHIDE(1, 116916236);
        };
        if ((struct_getparam(int0, 5921) != -1 as graphic)) {
            IF_SETHIDE(0, 116916237);
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
            IF_SETHIDE(1, 116916237);
        };
        if ((struct_getparam(int0, 5909) == comp(-1, 65535))) {
            script92();
        };
    } else {
        IF_SETHIDE(0, 116916230);
    };
    return;
}