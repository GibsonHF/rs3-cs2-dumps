//
function script9581(int0: component): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int1 = 0;
    var int2 = -1;
    var int3 = 0;
    var int4 = 0;
    define_array[9](10);
    var int5 = 0;
    if ((IF_FIND(int0) == 1)) {
        int2 = CC_GETHEIGHT();
        pop_array(0, cc_getparam(4041));
        pop_array(1, cc_getparam(4042));
        pop_array(2, cc_getparam(4043));
        pop_array(3, cc_getparam(4044));
        pop_array(4, cc_getparam(4045));
        pop_array(5, cc_getparam(4046));
        pop_array(6, cc_getparam(4047));
        pop_array(7, cc_getparam(4048));
        pop_array(8, cc_getparam(4049));
        pop_array(9, cc_getparam(4050));
    };
    while (((int5 < 10) && (push_array(int5) != -1))) {
        if ((((IF_FIND(push_array(int5)) == 1) && (cc_getparam(4040) != comp(-1, 65535))) && (CC_GETHIDE() == false))) {
            if ((IF_GETHIDE(cc_getparam(4040)) == true)) {
                CC_SETSIZE(0, cc_getparam(4051), 1, 0);
                int2 = (int2 - cc_getparam(4051));
            } else if ((cc_getparam(4052) != -1)) {
                CC_SETSIZE(0, (cc_getparam(4051) + cc_getparam(4052)), 1, 0);
                int2 = ((int2 - cc_getparam(4051)) - cc_getparam(4052));
            } else {
                int2 = (int2 - cc_getparam(4051));
                int3 = (int3 + 1);
            };
        };
        int5 = (int5 + 1);
    };
    int5 = 0;
    if (((int3 > 0) && ((int2 / int3) >= 40))) {
        int4 = 1;
    };
    while (((int5 < 10) && (push_array(int5) != -1))) {
        if (((IF_FIND(push_array(int5)) == 1) && (CC_GETHIDE() == false))) {
            if ((cc_getparam(4040) != comp(-1, 65535))) {
                CC_SETPOSITION(0, int1, 0, 0);
                if ((IF_GETHIDE(cc_getparam(4040)) == false)) {
                    if ((cc_getparam(4052) == -1)) {
                        if ((int4 == 1)) {
                            CC_SETSIZE(0, (cc_getparam(4051) + (int2 / int3)), 1, 0);
                            int2 = ((int2 + cc_getparam(4051)) - CC_GETHEIGHT());
                            int3 = (int3 - 1);
                        } else if ((cc_getparam(4053) != -1)) {
                            CC_SETSIZE(0, (cc_getparam(4051) + cc_getparam(4053)), 1, 0);
                        } else {
                            CC_SETSIZE(0, (cc_getparam(4051) + 40), 1, 0);
                        };
                    };
                    IF_CALLONRESIZE(push_array(int5));
                };
            };
            int1 = (int1 + CC_GETHEIGHT());
        };
        int5 = (int5 + 1);
    };
    var int6 = comp(-1, 65535);
    if ((IF_FIND(int0) == 1)) {
        int6 = cc_getparam(5022);
        if ((int6 != comp(-1, 65535))) {
            if ((int1 <= IF_GETHEIGHT(int0))) {
                if ((IF_GETHIDE(int6) == false)) {
                    IF_SETHIDE(true, int6);
                    int5 = 0;
                    while (((int5 < 10) && (push_array(int5) != -1))) {
                        if ((IF_FIND(push_array(int5)) == 1)) {
                            CC_SETSIZE(0, CC_GETHEIGHT(), 1, 0);
                        };
                        int5 = (int5 + 1);
                    };
                };
                IF_SETSCROLLPOS(0, 0, int0);
                IF_SETSCROLLSIZE(0, 0, int0);
            } else {
                if ((IF_GETHIDE(int6) == true)) {
                    IF_SETHIDE(false, int6);
                };
                int5 = 0;
                while (((int5 < 10) && (push_array(int5) != -1))) {
                    if ((IF_FIND(push_array(int5)) == 1)) {
                        CC_SETSIZE(16, CC_GETHEIGHT(), 1, 0);
                        CC_CALLONRESIZE();
                    };
                    int5 = (int5 + 1);
                };
                IF_SETSCROLLSIZE(0, int1, int0);
                script7791(int6, int0);
            };
        };
    };
    return;
}