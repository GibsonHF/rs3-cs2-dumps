//
function script14935(int0: component, int1: component, int2: int, int3: dbrow): void {
    var int4 = -1;
    var int5 = dbrow_getfield(int3, 409776, 0);
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    if (((CC_FIND[1](int0, int2) == 1) && (CC_GETHIDE[1]() == false))) {
        int4 = script5747(int3);
        if ((int4 > 0)) {
            int6 = SCALE(CC_GETWIDTH[1](), 100, 65);
            int7 = (((CC_GETX[1]() + CC_GETWIDTH[1]()) - (int6 / 2)) - 5);
            int8 = ((CC_GETY[1]() - (int6 / 2)) + 5);
            script14933(int1, IF_GETNEXTSUBID(int1), int7, int8, int6, int6, int5);
            if ((dbrow_getfield(int3, 409760, 0) == true)) {
                script14934(int1, IF_GETNEXTSUBID(int1), int4, int7, int8, int6, int6);
            };
        };
    };
    return;
}