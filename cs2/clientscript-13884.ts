//
function script13884(int0: number, int1: number, int2: number): number {
    if (((int0 != 33882317) && (int0 != 33882318))) {
        return 0;
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    if ((int1 > 1)) {
        if ((varbitplayer_45141 == 1)) {
            int3 = script14372(int1);
        } else {
            int3 = int1;
        };
        [int5, int4] = script5787(int3);
    } else {
        int4 = script14337();
    };
    int4 = MAX(0, (int4 - 1));
    if (((CC_FIND(33882313, int4) == 1) && (CC_FIND[1](33882329, int4) == 1))) {
        if ((int2 == 0)) {
            if (((IF_GETX(33882321) == ((CC_GETX() + CC_GETWIDTH()) - 1)) && (IF_GETY(33882321) == (CC_GETY() - 1)))) {
                IF_SETHIDE(1, 33882321);
            };
        } else {
            IF_SETPOSITION(((CC_GETX() + CC_GETWIDTH()) - 1), (CC_GETY() - 1), 0, 0, 33882321);
            IF_SETSIZE((CC_GETWIDTH[1]() + 2), (CC_GETHEIGHT[1]() + 2), 0, 0, 33882321);
            IF_SETHIDE(0, 33882321);
            IF_SETHIDE(1, 33882323);
            IF_SETHIDE(1, 33882326);
        };
    };
    return 1;
}