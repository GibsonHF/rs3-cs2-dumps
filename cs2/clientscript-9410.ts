//
function script9410(int0: int): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    var int9 = 0;
    var int10 = enum_getvalue(0, 73, 8211 as cs2enum, int0);
    [int1, int2, int3, int4, int9, int5, int6, int7, int8] = script9409(int0);
    if ((((int1 == comp(-1, 65535)) || (int2 == comp(-1, 65535))) || (int3 == comp(-1, 65535)))) {
        return;
    };
    var int11 = struct_getparam(int10, 3937);
    if (((int9 == 1) && (struct_getparam(int10, 3943) == 1))) {
        int11 = SCALE(40, 100, int11);
        if ((varbitplayer_21115 == 3)) {
            if (((script259(struct_getparam(int10, 3931)) == 0) && (varbitplayer_21223 == 0))) {
                int9 = 0;
            };
        } else if (((script259(struct_getparam(int10, 3932)) == 0) && (varbitplayer_21224 == 0))) {
            int9 = 0;
        };
    };
    if ((varclient_3859 == 1)) {
        int11 = SCALE(95, 100, int11);
    };
    if ((varbitplayer_21115 == 3)) {
        IF_SETTEXT(OC_NAME(struct_getparam(int10, 3931)), int1);
        IF_SETTEXT(`${TOSTRING_LOCALISED(int11, 1)} renown`, int2);
        if ((struct_getparam(int10, 3941) == 1)) {
            stack(struct_getparam(int10, 3948));
            stack(int3);
            IF_SETGRAPHIC();
        } else {
            IF_SETOBJECT(struct_getparam(int10, 3931), -1, int3);
        };
    } else {
        IF_SETTEXT(OC_NAME(struct_getparam(int10, 3932)), int1);
        IF_SETTEXT(`${TOSTRING_LOCALISED(int11, 1)} renown`, int2);
        if ((struct_getparam(int10, 3941) == 1)) {
            stack(struct_getparam(int10, 3949));
            stack(int3);
            IF_SETGRAPHIC();
        } else {
            IF_SETOBJECT(struct_getparam(int10, 3932), -1, int3);
        };
    };
    var int12 = struct_getparam(int10, 3939);
    var int13 = 0;
    CC_CREATE(int4, 5, int13);
    if ((int12 == 0)) {
        if ((varbitplayer_21115 == 3)) {
            CC_SETOBJECT(30254 as obj, -1);
        } else {
            CC_SETOBJECT(30259 as obj, -1);
        };
    } else if ((int12 == 1)) {
        if ((varbitplayer_21115 == 3)) {
            CC_SETOBJECT(30255 as obj, -1);
        } else {
            CC_SETOBJECT(30260 as obj, -1);
        };
    } else if ((int12 == 2)) {
        if ((varbitplayer_21115 == 3)) {
            CC_SETOBJECT(30256 as obj, -1);
        } else {
            CC_SETOBJECT(30261 as obj, -1);
        };
    } else if ((int12 == 3)) {
        if ((varbitplayer_21115 == 3)) {
            CC_SETOBJECT(30257 as obj, -1);
        } else {
            CC_SETOBJECT(30262 as obj, -1);
        };
    } else if ((int12 == 4)) {
        if ((varbitplayer_21115 == 3)) {
            CC_SETOBJECT(30258 as obj, -1);
        } else {
            CC_SETOBJECT(30263 as obj, -1);
        };
    };
    CC_SETSIZE(25, 25, 0, 0);
    CC_SETPOSITION((IF_GETX(int2) - 25), (IF_GETY(int2) - 3), 0, 0);
    CC_SETNOCLICKTHROUGH(true);
    CC_SETONMOUSEREPEAT(callback(script9418, int5, int12));
    CC_SETONMOUSELEAVE(callback(script8805));
    script9413(int0, int9);
    return;
}