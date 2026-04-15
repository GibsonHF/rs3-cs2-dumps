//
function script8288(int0: int): void {
    if ((script8293(int0, -1) == 1)) {
        return;
    };
    var int1 = script8292(int0, -1);
    var int2 = 21301 as struct;
    var int3 = script8418(int2, 0);
    if ((int3 == -1 as struct)) {
        return;
    };
    var int4 = script13415(int0);
    if ((int4 == -1 as struct)) {
        return;
    };
    var int5 = struct_getparam(int2, 3503);
    if ((int5 == comp(-1, 65535))) {
        return;
    };
    var int6 = struct_getparam(int2, 3506);
    if ((int6 == comp(-1, 65535))) {
        return;
    };
    var int7 = struct_getparam(int2, 6320);
    var int8 = struct_getparam(int2, 6321);
    var int9 = struct_getparam(int2, 3505);
    if ((int9 == comp(-1, 65535))) {
        return;
    };
    var int10 = struct_getparam(int2, 3508);
    var int11 = struct_getparam(int3, 3550);
    var int12 = struct_getparam(int3, 3551);
    var int13 = struct_getparam(int3, 3547);
    var int14 = struct_getparam(int3, 3549);
    var int15 = 13;
    var int16 = 32;
    var int17 = 387;
    var int18 = 110;
    var int19 = script441(varbitplayer_18994);
    var int20 = -1 as struct;
    if ((((varbitplayer_33661 == 1) && (int0 == 4)) && (int19 == 6))) {
        int20 = script14441();
    };
    if ((varbitplayer_60053 == 1)) {
        script20393(1, 2);
    };
    switch (int0) {
        case 3: {
            if ((int19 == 3)) {
                IF_TRIGGEROP(comp(1477, 24), -1, 1);
            };
            break;
        }
        case 4: {
            if (((int19 == 6) || ((varbitplayer_52957 > 0) && (script14441() == -1 as struct)))) {
                IF_TRIGGEROP(comp(1477, 25), -1, 1);
            };
            break;
        }
    };
    var int21 = struct_getparam(int4, 6318);
    if (((varbitplayer_22875 == 2) || (varbitplayer_38842 == 1))) {
        script10396(int0, int20);
        IF_SETSIZE(742, 404, 0, 0, int9);
        IF_SETPOSITION(0, 70, 1, 0, int9);
        IF_SETPOSITION(struct_getparam(int3, 3583), 22, 0, 0, struct_getparam(int2, 3509));
        if ((IF_FIND(int7) == 1)) {
            CC_SETHIDE(true);
        };
        if (((int8 != comp(-1, 65535)) && (IF_FIND(int8) == 1))) {
            CC_SETPOSITION(8, -44, 2, 0);
            CC_SETSIZE((((int17 * 2) - 8) - 8), int18, 0, 0);
            if (((int21 == -1 as overlayinterface) || (IF_HASSUBOVERLAY(int8, int21) == 0))) {
                CC_SETHIDE(true);
            };
        };
        script20393(1, 2);
    } else {
        IF_SETSIZE(742, 450, 0, 0, int9);
        IF_SETPOSITION(0, 10, 1, 2, int9);
        IF_SETPOSITION((struct_getparam(int3, 3583) - 2), 66, 0, 0, struct_getparam(int2, 3509));
        IF_SETPOSITION(0, 66, 0, 0, int10);
        IF_SETSIZE(44, 102, 1, 1, struct_getparam(int2, 3504));
        IF_SETPOSITION(0, 4, 1, 2, struct_getparam(int2, 3504));
        script8289(int0, int20);
        if (((int7 != comp(-1, 65535)) && (IF_FIND(int7) == 1))) {
            CC_SETPOSITION(0, 66, 0, 0);
            CC_SETSIZE(0, 38, 1, 0);
            CC_SETHIDE(false);
            if ((CC_FIND(int7, 0) == 1)) {
                CC_SETPOSITION(0, 0, 1, 0);
                CC_SETSIZE(44, 0, 1, 1);
                CC_SETGRAPHIC(35507 as graphic);
                CC_SETTILING(true);
            };
            if ((CC_FIND(int7, 1) == 1)) {
                CC_SETPOSITION(0, 0, 0, 0);
                CC_SETSIZE(32, 0, 0, 1);
                CC_SETGRAPHIC(23859 as graphic);
                CC_SETTILING(true);
            };
            if ((CC_FIND(int7, 2) == 1)) {
                CC_SETPOSITION(0, 0, 2, 0);
                CC_SETSIZE(32, 0, 0, 1);
                CC_SETGRAPHIC(23859 as graphic);
                CC_SETHFLIP(true);
                CC_SETTILING(true);
            };
            if (((int8 != comp(-1, 65535)) && (IF_FIND(int8) == 1))) {
                CC_SETPOSITION(20, 0, 2, 0);
                CC_SETSIZE((((int17 * 2) - 8) - 8), int18, 0, 0);
                if (((int21 == -1 as overlayinterface) || (IF_HASSUBOVERLAY(int8, int21) == 0))) {
                    CC_SETHIDE(true);
                } else {
                    CC_SETHIDE(false);
                };
            };
        };
        if ((CC_FIND(int6, 0) == 1)) {
            CC_SETHIDE(true);
        };
    };
    IF_SETHIDE(false, struct_getparam(int2, 3509));
    IF_SETHIDE(false, struct_getparam(int2, 3508));
    IF_SETHIDE(false, struct_getparam(int2, 3504));
    IF_SETHIDE(false, int6);
    if ((int0 == 100)) {
        script8184(struct_getparam(int2, 3509), 0);
    } else {
        script8184(struct_getparam(int2, 3509), 1);
    };
    script8186(struct_getparam(int2, 3509));
    if (((varbitplayer_38842 == 0) && (varbitplayer_22875 != 2))) {
        if ((CC_FIND(int6, 6) == 1)) {
            CC_SETSIZE(int11, ((int14 + IF_GETY(struct_getparam(int2, 3508))) + IF_GETHEIGHT(struct_getparam(int2, 3508))), 0, 1);
            CC_SETPOSITION(0, int14, 0, 2);
        };
        if ((CC_FIND(int6, 7) == 1)) {
            CC_SETSIZE(int12, ((int14 + IF_GETY(struct_getparam(int2, 3508))) + IF_GETHEIGHT(struct_getparam(int2, 3508))), 0, 1);
            CC_SETPOSITION(0, int14, 2, 2);
        };
    };
    if ((int1 == 0)) {
        script8311(1001);
        script6739(9);
    };
    if (((varclient_4241 == -1) || ((script8292(varclient_4241, varclient_4242) == 0) && ((varclient_4241 != int0) || (varclient_4242 != int19))))) {
        script189(varclient_4241, varclient_4242);
        varclient_4241 = varbitplayer_18994;
        varclient_4242 = int19;
    };
    return;
}