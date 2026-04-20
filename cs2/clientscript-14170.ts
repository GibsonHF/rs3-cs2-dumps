//
function script14170(): void {
    var int0 = script8074();
    if ((IF_HASSUB(int0) == 0)) {
        return;
    };
    var int1 = 0;
    var int2 = -1 as interface;
    var int3 = comp(-1, 65535);
    DB_LISTALL(360);
    dbrow_findnext();
    var int4 = stack();
    while (((int4 != -1 as dbrow) && (int1 == 0))) {
        int2 = dbrow_getfield(int4, 1474560, 0);
        int3 = dbrow_getfield(int4, 1474576, 0);
        if ((IF_HASSUBMODAL(int0, int2) == 1)) {
            int1 = 1;
        };
        dbrow_findnext();
        int4 = stack();
    };
    if ((int1 == 0)) {
        script12478("[proc,interface_zoom_set_fullmodal] called, however, no interface was setup using [interface_fullscreen_interface]");
        return;
    };
    if ((int2 == 1253 as interface)) {
        IF_SETSIZE(800, 600, 0, 0, struct_getparam(40393, 3503));
    };
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    if (((varclient_6403 != 2) && (IF_FIND(int3) == 1))) {
        int9 = CC_GETWIDTH();
        if (((IF_HASSUB(struct_getparam(21300, 3505)) == 1) || (IF_HASSUB(comp(1477, 739)) == 1))) {
            int9 = (int9 + (210 + 10));
        };
        script4452((IF_GETX(comp(1477, 724)) + CC_GETX()), (IF_GETY(comp(1477, 724)) + CC_GETY()), int9, CC_GETHEIGHT());
        script14171(comp(1477, 722));
        script4204(5);
        return;
    };
    [int7, int8, int9, int10] = UNKNOWN_COMMAND_126();
    if ((IF_FIND(int3) == 1)) {
        int5 = (IF_GETX(comp(1477, 724)) + CC_GETX());
        int6 = (IF_GETY(comp(1477, 724)) + CC_GETY());
        if ((int5 < int7)) {
            int9 = (int9 + (int7 - int5));
            int7 = int5;
        };
        if ((int6 < int8)) {
            int10 = (int10 + (int8 - int6));
            int8 = int6;
        };
        int9 = MAX(int9, CC_GETWIDTH());
        int10 = MAX(int10, CC_GETHEIGHT());
        if (((IF_HASSUB(struct_getparam(21300, 3505)) == 1) || (IF_HASSUB(comp(1477, 739)) == 1))) {
            int9 = (int9 + (210 + 10));
        };
        script4452(int7, int8, int9, int10);
        script14172(comp(1477, 707), comp(1477, 722));
        script4204(5);
    };
    return;
}