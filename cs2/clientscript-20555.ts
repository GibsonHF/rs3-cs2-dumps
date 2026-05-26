//
function script20555(): void {
    CC_DELETEALL(55902214);
    CC_DELETEALL(55902212);
    IF_SETSIZE(0, -8, 1, 1, 55902214);
    var int0 = ENUM_GETOUTPUTCOUNT(16365);
    if ((int0 <= 0)) {
        return;
    };
    var int1 = -1;
    var int2 = -1 as dbrow;
    var int3 = 0;
    var int4 = 0;
    var string0 = "";
    var int5 = -1 as graphic;
    var int6 = 0;
    while ((++int1 < int0)) {
        int2 = enum_getvalue(0, 74, 16365 as cs2enum, int1);
        if ((script12115(int2) == 1)) {
            string0 = dbrow_getfield(int2, 548864, 0);
            int5 = dbrow_getfield(int2, 548896, 0);
            int6 = dbrow_getfield(int2, 548960, 0);
            script15938(55902214, UI_GETCATEGORY(IF_GETNEXTSUBID(55902214)), UI_GETDYNID(IF_GETNEXTSUBID(55902214)), 0, 0, 1, 0, 176, 176, 0, 0);
            CC_SETOP(1, "Preview");
            CC_SETONOP(callback(script20556, int1));
            script20615(55902214, string0, int5, script20466(int6, -1, 2), 2, 1, 0, 0, 0);
            int3 = (int3 + 1);
        };
    };
    var int7 = script5276(int3, 3);
    var int8 = ((int7 * 176) + ((int7 + 1) * 8));
    if ((int8 > IF_GETHEIGHT(55902214))) {
        IF_SETSCROLLSIZE(0, int8, 55902214);
        script7791(55902212, 55902214);
        IF_SETHIDE(1, 55902258);
        IF_SETHIDE(0, 55902259);
    } else {
        IF_SETSCROLLSIZE(0, 0, 55902214);
        IF_SETSIZE(0, int8, 1, 0, 55902214);
        IF_SETHIDE(1, 55902258);
        IF_SETHIDE(1, 55902259);
    };
    return;
}