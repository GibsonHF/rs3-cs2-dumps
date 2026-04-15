//
function script3(): void {
    script10428(comp(753, 119), comp(753, 120), 9030 as cs2enum, -1, "View different category information.", varplayer_4517, 0);
    CC_DELETEALL(comp(753, 4));
    if (((varplayer_4517 < 0) || (varplayer_4517 == -1))) {
        return;
    };
    if ((varplayer_4517 == 1)) {
        IF_SETHIDE(true, comp(753, 1));
        IF_SETHIDE(false, comp(753, 96));
        IF_SETHIDE(true, comp(753, 107));
        return;
    };
    if ((varplayer_4517 == 2)) {
        IF_SETHIDE(true, comp(753, 1));
        IF_SETHIDE(true, comp(753, 96));
        IF_SETHIDE(false, comp(753, 107));
        return;
    };
    IF_SETHIDE(false, comp(753, 1));
    IF_SETHIDE(true, comp(753, 96));
    IF_SETHIDE(true, comp(753, 107));
    var int0 = 9031 as cs2enum;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = -1 as struct;
    while ((int1 < ENUM_GETOUTPUTCOUNT(int0))) {
        int4 = enum_getvalue(0, 73, int0, int1);
        if ((IF_FIND(comp(753, 4)) == 1)) {
            int3 = script10410(comp(753, 4), comp(753, 5), 28556 as struct, 0, (int1 * 32), CC_GETWIDTH(), 30, int3, false, script16337(int4));
        };
        int1 = (int1 + 1);
    };
    CC_DELETEALL(comp(753, 6));
    if ((((int1 * 32) + 2) > IF_GETHEIGHT(comp(753, 2)))) {
        IF_SETSCROLLSIZE(0, ((int1 * 32) + 2), comp(753, 3));
        IF_SETSCROLLPOS(0, 0, comp(753, 3));
        script31(comp(753, 6), comp(753, 3), 4343 as graphic, 4340 as graphic, 4341 as graphic, 4342 as graphic, 4337 as graphic, 4336 as graphic);
    };
    return;
}