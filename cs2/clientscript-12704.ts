//
function script12704(int0: component, int1: int, int2: int): void {
    if ((((int0 == comp(-1, 65535)) || (int1 == -1)) || (int2 < 1))) {
        return;
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    if ((CC_FIND(int0, int1) == 1)) {
        if (((CC_GETTRANS() == 255) && (IF_FIND[1](int0) == 1))) {
            if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
                int4 = CC_GETWIDTH[1]();
                int5 = CC_GETHEIGHT[1]();
                while ((++int6 < int2)) {
                    if ((CC_FIND[1](int0, ((int1 + int6) + 1)) == 1)) {
                        if ((((((CC_GETHIDE[1]() == true) || ((CC_GETX[1]() + CC_GETWIDTH[1]()) < 1)) || (CC_GETX[1]() >= int4)) || ((CC_GETY[1]() + CC_GETHEIGHT[1]()) < 1)) || (CC_GETY[1]() >= int5))) {
                            int3 = (int3 + 1);
                            CC_SETHIDE[1](true);
                        };
                    } else {
                        return;
                    };
                };
                if ((int3 == int2)) {
                    cc_setparam(5836, 4);
                    cc_setparam(5837, 3);
                    cc_setparam(5351, -1);
                    cc_setparam(4155, -1);
                    script12632(int0, int1);
                };
            };
        } else {
            if ((CC_GETTRANS() < 127)) {
                CC_SETOP(1, "Click");
            };
            script12632(int0, int1);
        };
    };
    return;
}