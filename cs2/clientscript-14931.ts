//
function script14931(int0: component, int1: dbrow): void {
    if ((script5759(int1) == 0)) {
        return;
    };
    var int2 = -1;
    if ((dbrow_getfield(int1, 409632, 0) == -1)) {
        CC_DELETEALL(int0);
        int2 = script5747(int1);
        if ((int2 == 0)) {
            return;
        };
        script14933(int0, IF_GETNEXTSUBID(int0), 0, 0, IF_GETWIDTH(int0), IF_GETHEIGHT(int0), dbrow_getfield(int1, 409776, 0));
        if ((dbrow_getfield(int1, 409760, 0) == true)) {
            script14934(int0, IF_GETNEXTSUBID(int0), int2, 0, 0, IF_GETWIDTH(int0), IF_GETHEIGHT(int0));
        };
    };
    return;
}