//[proc,friend_update]
function script125(int0: component, int1: int): void {
    var int2 = script3099(int0);
    var int3 = script10588(int0);
    var int4 = script10589(int0);
    var int5 = script11297(int0);
    var int6 = script3098(int0);
    var int7 = script3210(int0);
    var int8 = script3211(int0);
    var int9 = script12016(int0);
    var int10 = script12017(int0);
    var int11 = script12019(int0);
    var int12 = script3524(int0);
    var int13 = script3518(int0);
    var int14 = FRIEND_COUNT();
    if ((int14 < 0)) {
        if ((int14 == -2)) {
            IF_SETTEXT("Loading Friends List.<br>Please wait.", int10);
        } else {
            IF_SETTEXT("Connecting to Friend Server.<br>Please wait.", int10);
        };
        IF_SETHIDE(false, int10);
        IF_SETHIDE(true, int8);
        IF_SETHIDE(true, int9);
        return;
    };
    var int15 = script6431();
    var int16 = 0;
    var int17 = 200;
    var int18 = IF_GETWIDTH(int8);
    var int19 = IF_GETWIDTH(int7);
    if ((int15 == true)) {
        var int1 = SCALE(IF_GETWIDTH(int7), 4, 3);
        IF_SETDRAGGABLE(comp(-1, 65535), -1, int8);
        IF_CLEARSCRIPTHOOKS(int8);
    } else {
        if ((int1 < 0)) {
            int1 = IF_GETX(int8);
        };
        int1 = MAX(MIN(int1, (int19 - int18)), 0);
        if ((int19 > 0)) {
            varclient_1036 = int1;
        };
        IF_SETDRAGGABLE(int7, -1, int8);
        IF_SETONDRAGCOMPLETE(callback(script1579, -2147483647, int0), int8);
    };
    var int20 = (int1 + (script3365(int7) - script3365(int2)));
    var int21 = (IF_GETWIDTH(int2) - (int20 + int18));
    if ((PLAYERMEMBER() == true)) {
        int17 = 400;
    };
    define_array((int14 + 1));
    var int22 = -1;
    IF_SETPOSITION(int1, 0, 0, 1, int8);
    IF_SETSIZE(int21, 0, 0, 1, int4);
    IF_SETSIZE(int21, 0, 0, 1, int5);
    IF_SETHIDE(false, int8);
    IF_SETHIDE(true, int10);
    IF_SETMOUSEOVERCURSOR(149, int8);
    IF_SETTEXT(`${inttostring(int14, 10)} / ${inttostring(int17, 10)}`, int9);
    if ((int14 == 0)) {
        return;
    };
    var int23 = 155;
    var int24 = 185;
    if ((IF_GETWIDTH(int0) < int24)) {
        IF_SETHIDE(true, int9);
    } else {
        IF_SETHIDE(false, int9);
    };
    if ((IF_GETWIDTH(int0) < int23)) {
        IF_SETHIDE(true, int11);
        if ((int13 != comp(-1, 65535))) {
            IF_SETHIDE(false, int13);
        };
    } else {
        IF_SETHIDE(false, int11);
        if ((int13 != comp(-1, 65535))) {
            IF_SETHIDE(true, int13);
        };
    };
    var int25 = enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics);
    if ((int15 == true)) {
        int25 = enum_getvalue(25, 0, 8549 as cs2enum, 32 as fontmetrics);
    };
    int25 = (int25 + 4);
    if ((IF_GETNEXTSUBID(int2) == 0)) {
        while ((int16 < 400)) {
            CC_CREATE(int2, 4, int16);
            CC_SETSIZE(int20, int25, 0, 0);
            CC_CREATE(int3, 5, int16);
            CC_SETSIZE(14, 14, 0, 0);
            CC_CREATE(int5, 5, int16);
            CC_SETSIZE(24, 12, 0, 0);
            CC_CREATE(int4, 4, int16);
            CC_SETSIZE(int21, int25, 0, 0);
            int16 = (int16 + 1);
        };
        int16 = 0;
    };
    while ((int16 < int14)) {
        if ((CC_FIND(int2, int16) == 1)) {
            CC_SETSIZE(int20, int25, 0, 0);
            CC_CLEAROPS();
            CC_SETONTIMER(callback(script1101, int0, -2147483643, int20, int21));
            if ((strcmp(CC_GETTEXT(), "") == 0)) {
                CC_SETHIDE(false);
                if ((CC_FIND[1](int3, int16) == 1)) {
                    CC_SETHIDE[1](false);
                };
                if ((CC_FIND[1](int4, int16) == 1)) {
                    CC_SETHIDE[1](false);
                };
                if ((CC_FIND[1](int5, int16) == 1)) {
                    CC_SETHIDE[1](false);
                };
            };
            if ((CC_FIND(int4, int16) == 1)) {
                CC_SETSIZE(int21, int25, 0, 0);
            };
        };
        if (((int22 == -1) && (FRIEND_GETWORLD(int16) == 0))) {
            int22 = int16;
        };
        pop_array(int16, int16);
        int16 = (int16 + 1);
    };
    while ((int16 < 400)) {
        if ((CC_FIND(int2, int16) == 1)) {
            CC_SETSIZE(int20, int25, 0, 0);
            CC_SETTEXT("");
            CC_SETHIDE(true);
            cc_setparam(5435, -1);
            cc_setparam(5434, -1);
        };
        if ((CC_FIND(int3, int16) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int4, int16) == 1)) {
            CC_SETSIZE(int21, int25, 0, 0);
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int5, int16) == 1)) {
            CC_SETHIDE(true);
        };
        int16 = (int16 + 1);
    };
    pop_array(int14, -1);
    if ((int22 > 0)) {
        script11953(0, 0, (int22 - 1));
    } else {
        int22 = 0;
    };
    script11953(0, int22, (int14 - 1));
    IF_SETPARAM_INT(5434, push_array(0), int0);
    if ((int22 > 0)) {
        IF_SETPARAM_INT(5435, push_array((int22 - 1)), int0);
        if ((CC_FIND(int2, push_array(int22)) == 1)) {
            cc_setparam(5435, -1);
            cc_setparam(5434, -1);
        };
        int16 = int22;
        while ((int16 > 0)) {
            int16 = (int16 - 1);
            if ((CC_FIND(int2, push_array(int16)) == 1)) {
                if ((int16 > 0)) {
                    cc_setparam(5435, push_array((int16 - 1)));
                } else {
                    cc_setparam(5435, push_array((int14 - 1)));
                };
            };
        };
    } else {
        IF_SETPARAM_INT(5435, push_array((int14 - 1)), int0);
    };
    IF_SETPARAM_INT(5433, -2, int0);
    int16 = 0;
    while ((int16 < int14)) {
        if ((CC_FIND(int2, push_array(int16)) == 1)) {
            cc_setparam(5434, push_array((int16 + 1)));
            if (((int16 > 0) && (int16 > int22))) {
                cc_setparam(5435, push_array((int16 - 1)));
            };
        };
        int16 = (int16 + 1);
    };
    IF_SETONTIMER(callback(script1895, int0), int0);
    return;
}