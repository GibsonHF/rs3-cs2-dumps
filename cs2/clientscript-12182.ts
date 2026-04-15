//
function script12182(int0: obj, int1: component, int2: int, int3: component, int4: int): void {
    var int5 = -1 as dbrow;
    var int6 = 1;
    if ((CC_FIND(int1, int2) == 1)) {
        if (((int3 == int1) && (int4 >= 0))) {
            if ((CC_FIND[1](int3, int4) == 1)) {
                if (((script12064(int0, int4) == 1) && (script12064(int0, int2) == 1))) {
                    int5 = cc_getparam(5529);
                    if ((((int2 == int4) || (cc_getparam[1](5529) == -1 as dbrow)) || (int5 == -1 as dbrow))) {
                        int6 = 0;
                    };
                    script12176(cc_getparam[1](5529), 1);
                    if ((CC_FIND(int3, int4) == 1)) {
                        script12176(int5, int6);
                    };
                } else {
                    script12176(-1 as dbrow, 1);
                };
            };
        } else {
            if ((int3 == comp(-1, 65535))) {
                return;
            };
            script12176(-1 as dbrow, 1);
        };
        script12172();
    };
    return;
}