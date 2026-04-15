//
function script14940(): void {
    var int0 = dbrow_getfield(3473 as dbrow, 409744, 0);
    var int1 = dbrow_getfield(3473 as dbrow, 409776, 0);
    var int2 = dbrow_getfield(3473 as dbrow, 409760, 0);
    CC_DELETEALL(int0);
    if ((varbitclient_41275 != 2)) {
        return;
    };
    var int3 = 0;
    var int4 = 0;
    if ((script5762(18) != -1)) {
        if ((CHAT_GETNEXTUID(script5762(18)) != -1)) {
            [int3, int4] = script14941(19, 18, script5762(18));
        } else {
            int4 = 100;
        };
    };
    if ((int4 > 0)) {
        script14933(int0, IF_GETNEXTSUBID(int0), 0, 0, IF_GETWIDTH(int0), IF_GETHEIGHT(int0), int1);
        if ((int2 == true)) {
            script14934(int0, IF_GETNEXTSUBID(int0), int4, 0, 0, IF_GETWIDTH(int0), IF_GETHEIGHT(int0));
        };
    };
    return;
}