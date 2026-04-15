//
function script12630(int0: component): void {
    var int1 = (33 - 1);
    var int2 = 0;
    if (((MODULO(CLIENTCLOCK(), 50) == 0) && (IF_FIND[1](int0) == 1))) {
        while ((CC_FIND(int0, ++int1) == 1)) {
            if ((((((CC_GETX() + CC_GETWIDTH()) < 1) || (CC_GETX() >= CC_GETWIDTH[1]())) || ((CC_GETY() + CC_GETHEIGHT()) < 1)) || (CC_GETY() >= CC_GETHEIGHT[1]()))) {
                int2 = (int2 + 1);
            };
        };
        if ((IF_GETNEXTSUBID(int0) == (int2 + 33))) {
            int1 = (33 - 1);
            while ((CC_FIND(int0, ++int1) == 1)) {
                CC_SETPOSITION(0, 0, 1, 1);
                cc_setparam(4421, -2147483648);
                cc_setparam(4422, -2147483648);
                cc_setparam(5926, -1);
                cc_setparam(5927, -1);
                cc_setparam(5833, 0);
                cc_setparam(5834, 0);
                script12642(script12641(2000, ((CC_GETID() - 33) * 4)));
            };
        };
    };
    return;
}