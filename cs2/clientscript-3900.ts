//
function script3900(int0: unknown_int, int1: component, int2: int, int3: component, int4: unknown_int, int5: unknown_int): void {
    if ((((int0 == -1) || (int1 == comp(-1, 65535))) || (int3 == comp(-1, 65535)))) {
        return;
    };
    if (((int0 == 94) && (varclient_3822 != -1 as obj))) {
        var int2 = OC_WEARPOS(varclient_3822);
        if ((int2 == 17)) {
            int2 = 17;
        };
    };
    varclient_4135 = int3;
    varclient_4136 = int2;
    if ((((varclient_3822 == -1 as obj) || (varclient_3823 == -1 as inv)) || (int4 == 0))) {
        if ((CC_FIND(int3, int2) == 1)) {
            CC_SETHIDE(true);
        };
        varclient_4136 = -1;
        IF_SETONMOUSEREPEAT(callback(), int1);
        return;
    };
    var int6 = -1 as obj;
    var int7 = 15777401;
    if ((CC_FIND(int1, int2) == 1)) {
        if ((int0 == 94)) {
            if ((varclient_3823 != 94 as inv)) {
                int6 = CC_GETINVOBJECT();
                if (((OC_WEARPOS(varclient_3822) == -1) || (((int5 == 1) && (script9221(varclient_3822) != 0)) || ((int5 == 0) && (script3848(varclient_3822, -1 as inv) != 0))))) {
                    int7 = 16711680;
                };
            };
        } else if ((varclient_3823 != 93 as inv)) {
            int6 = CC_GETINVOBJECT();
            if ((((int5 == 1) && (script9224(varclient_3822, int6) == 1)) || ((int5 == 0) && (script3851(varclient_3822, int6) == 1)))) {
                int7 = 16711680;
            };
        };
    } else {
        IF_SETONMOUSEREPEAT(callback(), int1);
        varclient_4136 = -1;
        return;
    };
    if ((CC_FIND(int3, int2) == 1)) {
        if ((int7 == 16711680)) {
            IF_SETONMOUSEREPEAT(callback(script3901, int0, int1, int2, int3, (CLIENTCLOCK() + 25), varclient_3822, varclient_3823), int1);
        } else {
            IF_SETONMOUSEREPEAT(callback(), int1);
        };
        if ((script6431() == true)) {
            CC_SETSIZE(44, 44, 0, 0);
        } else {
            CC_SETSIZE(36, 36, 0, 0);
        };
        CC_SETCOLOUR(int7);
        CC_SETHIDE(false);
    };
    return;
}