//
function script8358(int0: int, int1: int): void {
    var int2 = script10405(int0);
    var int3 = struct_getparam(int2, 3509);
    var int4 = struct_getparam(int2, 3508);
    var int5 = script8374(int3);
    var int6 = script8373(int1);
    if (((CC_FIND(int3, int6) == 1) && (cc_getparam(3536) == int0))) {
        return;
    };
    var string0 = "null";
    while ((CC_FIND[1](int3, (int6 + 4)) == 1)) {
        if ((CC_FIND(int3, int6) == 1)) {
            CC_SETPARAM_INT(3536, cc_getparam[1](3536));
            CC_SETONCLICK(callback(script8364, int0, cc_getparam(3536)));
            if ((varbitplayer_27169 == 0)) {
                string0 = struct_getparam(script10405(cc_getparam(3536)), 3493);
            } else if ((strcmp(struct_getparam(script10405(cc_getparam(3536)), 4471), "") == 0)) {
                if (((script6431() == true) && (strcmp(struct_getparam(script10405(cc_getparam(3536)), 8095), "") != 0))) {
                    string0 = struct_getparam(script10405(cc_getparam(3536)), 8095);
                } else {
                    string0 = struct_getparam(script10405(cc_getparam(3536)), 3493);
                };
            } else {
                string0 = struct_getparam(script10405(cc_getparam(3536)), 4471);
            };
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        };
        if (((CC_FIND(int3, (int6 + 1)) == 1) && (CC_FIND[1](int3, ((int6 + 4) + 1)) == 1))) {
            CC_SETGRAPHIC(CC_GETGRAPHIC[1]());
        };
        int6 = (int6 + 4);
    };
    if ((CC_FIND(int3, (int6 + 1)) == 1)) {
        CC_DELETE();
    };
    if ((CC_FIND(int3, int6) == 1)) {
        CC_DELETE();
    };
    var int7 = -1;
    int7 = script8371(int3, (int1 - 1));
    if ((int7 != -1)) {
        script8355(int0, int7);
        script8705(int7);
    };
    int7 = script8371(int3, int1);
    if ((int7 != -1)) {
        script8355(int0, int7);
        script8705(int7);
    };
    if (((int5 - 1) == 1)) {
        script8378(1, int0);
    };
    return;
}