//
function script8393(int0: int, int1: int): void {
    var int2 = script10405(int0);
    var int3 = script8418(int2, 0);
    if ((struct_getparam(int2, 3533) == false)) {
        if ((int1 == 0)) {
            script20526(int0, struct_getparam(int2, 3503));
            if ((CC_FIND[1](comp(1475, 3), int0) == 1)) {
                var int1 = cc_getparam[1](7194);
            } else {
                int1 = script8730(9, int0);
            };
            if ((int1 == 1)) {
                IF_SETHIDE(false, struct_getparam(int2, 3503));
                script20538(struct_getparam(int2, 3505), false);
                if (((varclient_3477 == true) && (int0 != 1002))) {
                    script20538(struct_getparam(int2, 3513), false);
                    if ((((int0 == 1004) && (varbitplayer_60446 == 1)) && (CC_FIND(struct_getparam(int2, 3513), 0) == 1))) {
                        CC_SETTRANS(255);
                    };
                } else {
                    script20538(struct_getparam(int2, 3513), true);
                };
            } else {
                IF_SETHIDE(true, struct_getparam(int2, 3503));
            };
        } else {
            if (((int0 == 1004) && (varbitplayer_60446 == 1))) {
                script20537(int2);
                script20529(int2, 52718, int0, script20523(int2));
                IF_SETHIDE(false, struct_getparam(int2, 3504));
                IF_SETHIDE(false, struct_getparam(int2, 3506));
                int1 = 1;
                if ((CC_FIND(struct_getparam(int2, 3513), 0) == 1)) {
                    CC_SETTRANS(75);
                };
            };
            IF_SETHIDE(false, struct_getparam(int2, 3503));
        };
        if ((struct_getparam(int2, 3507) != comp(-1, 65535))) {
            IF_SETNOCLICKTHROUGH(0, struct_getparam(int2, 3507));
        };
        if ((varclient_3477 == true)) {
            switch (int0) {
                case 1032:
                case 1033:
                case 1034:
                case 1035: {
                    script8707(int0);
                    break;
                }
            };
        };
    } else {
        script9554(struct_getparam(int2, 3504), struct_getparam(int2, 3506), struct_getparam(int2, 3505), struct_getparam(int2, 3493), int3);
        IF_SETHIDE(false, struct_getparam(int2, 3505));
        if (((int1 == 1) && (script20518() == 0))) {
            int1 = 0;
        };
    };
    var int4 = true;
    if ((int1 == 1)) {
        int4 = false;
    };
    switch (int2) {
        case 30967: {
            if ((STAFFMODLEVEL() == 0)) {
                int4 = true;
            };
            break;
        }
        case 21306: {
            int4 = true;
            break;
        }
    };
    var int5 = struct_getparam(int2, 3505);
    var int6 = struct_getparam(int2, 3509);
    if ((struct_getparam(int2, 3533) == true)) {
        IF_SETHIDE(int4, struct_getparam(int2, 3504));
        IF_SETHIDE(int4, struct_getparam(int2, 3506));
    };
    var int7 = 0;
    if (((int6 != comp(-1, 65535)) && (IF_GETHIDE(int6) == false))) {
        int7 = (int7 + struct_getparam(int3, 3577));
    };
    if ((struct_getparam(int2, 3533) == true)) {
        IF_SETSIZE(0, 0, 1, 1, int5);
        IF_SETPOSITION(0, 0, 0, 0, int5);
    } else if ((int4 == true)) {
        IF_SETSIZE(0, int7, 1, 1, int5);
        IF_SETPOSITION(0, int7, 0, 0, int5);
    } else {
        IF_SETSIZE((struct_getparam(int3, 3550) + struct_getparam(int3, 3551)), ((struct_getparam(int3, 3547) + struct_getparam(int3, 3549)) + int7), 1, 1, int5);
        IF_SETPOSITION(struct_getparam(int3, 3550), (struct_getparam(int3, 3550) + int7), 0, 0, int5);
    };
    script8390(int0);
    return;
}