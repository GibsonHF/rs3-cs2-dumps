//
function script8350(int0: int, int1: int, int2: unknown_int): void {
    if ((varbitplayer_38842 == 1)) {
        var int0 = 14;
    };
    var int3 = script10405(int1);
    var int4 = struct_getparam(int3, 3509);
    var int5 = struct_getparam(int3, 3508);
    if (((int4 == comp(-1, 65535)) || (struct_getparam(int3, 3521) == false))) {
        return;
    };
    var int6 = 0;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    if (((struct_getparam(int3, 5770) == false) || (script12609(int0, int1) == 0))) {
        int9 = script8727(int0, int1);
        int10 = int1;
    };
    define_array(128);
    while ((int9 != -1)) {
        if (((int2 == 0) || (((int9 == int1) || (script8730(int0, int9) == 0)) && (push_array(int9) != 1)))) {
            if ((script19633(int9) == false)) {
                int9 = script8727(int0, int9);
            } else {
                pop_array(int9, 1);
                int10 = int9;
                int9 = script8727(int0, int9);
            };
        } else {
            int9 = -1;
        };
    };
    CC_DELETEALL(int4);
    while ((int10 != -1)) {
        if (((int2 == 0) || (((int10 == int1) || (script8730(int0, int10) == 0)) && (script8351(int10) == 0)))) {
            if ((script19633(int10) == false)) {
                int10 = script8728(int0, int10);
            } else {
                if ((int10 == int1)) {
                    int7 = int6;
                };
                script8362(int1, int10, int6);
                int10 = script8728(int0, int10);
                int6 = (int6 + 1);
            };
        } else {
            int10 = -1;
        };
    };
    if (((int7 == -1) && (script19633(int1) == true))) {
        int7 = int6;
        script8362(int1, int1, int6);
        int6 = (int6 + 1);
    };
    script8359(int1, int6, int7);
    script8370(int1, int7);
    if ((int6 > 1)) {
        script8378(0, int1);
    } else {
        script8378(1, int1);
    };
    return;
}