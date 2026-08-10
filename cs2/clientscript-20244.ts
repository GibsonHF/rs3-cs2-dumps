//
function script20244(int0: number): void {
    var int1 = script20117(varplayer_12314);
    if ((script20132(int1) == 0)) {
        return;
    };
    if (((varbitplayer_58406 == 0) || (varbitplayer_61498 == 0))) {
        script20147();
        IF_SETONTIMER(callback(script20244, int0), int0);
        return;
    };
    IF_SETONTIMER(callback(), int0);
    var int2 = 4227654;
    var int3 = 6734126;
    var string0 = "";
    var int4 = 86;
    var int5 = 90;
    var int6 = 2;
    CC_DELETEALL(int0);
    var int7 = dbrow_getfield(int1, 1335744, 0);
    var int8 = (varbitplayer_58406 - varbitplayer_58405);
    var int9 = (WORLDMAP_GETDISPLAYCOORD(int7) - varbitplayer_58405);
    var int10 = varbitplayer_61493;
    varbitplayer_61493 = 0;
    var int11 = script20245();
    if ((int11 != -1)) {
        string0 = "A relic is ready to unlock!";
        script20246(int0, 0, int6, 1, 1, 35251, string0, int2, int3);
        int6 = (int6 + 26);
    } else {
        string0 = `Earn ${TOSTRING_LOCALISED((int8 - int9), 1)} points to unlock the next relic.`;
        if ((int9 < 0)) {
            int4 = (int4 - 28);
            int5 = (int5 - 28);
        } else {
            script20246(int0, 0, int6, int8, int9, 35251, string0, int2, int3);
            int6 = (int6 + 26);
        };
    };
    varbitplayer_61493 = 1;
    int11 = script3979();
    int8 = (varbitplayer_61498 - varbitplayer_1668);
    int9 = (varbitplayer_61497 - varbitplayer_1668);
    if ((int11 != -1)) {
        string0 = "A blessing is ready to unlock!";
        script20246(int0, 1, int6, 1, 1, 36309, string0, int2, int3);
        int6 = (int6 + 28);
    } else {
        string0 = `Complete ${TOSTRING_LOCALISED((int8 - int9), 1)} blessing tasks to unlock the next blessing.`;
        if ((int9 < 0)) {
            int4 = (int4 - 28);
            int5 = (int5 - 28);
        } else {
            script20246(int0, 1, int6, int8, int9, 36309, string0, int2, int3);
            int6 = (int6 + 28);
        };
    };
    var int12 = dbrow_getfield(int1, 1335648, 0);
    var int13 = 0;
    var int14 = varbitplayer_58389;
    stack(varbitplayer_58388);
    if ((script3977(int12) == 1)) {
        int13 = enum_getvalue(0, 0, int12, varbitplayer_58388);
        if ((int14 > int13)) {
            string0 = "A region is ready to unlock!";
        } else {
            string0 = `Complete ${TOSTRING_LOCALISED((int13 - int14), 1)} tasks to unlock the next region.`;
        };
        script20246(int0, 2, int6, int13, int14, 8660, string0, int2, int3);
        int6 = (int6 + 28);
    } else {
        int4 = (int4 - 32);
        int5 = (int5 - 32);
    };
    IF_SETPOSITION(0, int4, 0, 0, comp(1361, 10));
    IF_SETPOSITION(0, int5, 1, 0, comp(1361, 11));
    IF_SETSIZE(0, (125 - (90 - int5)), 1, 1, comp(1361, 11));
    varbitplayer_61493 = int10;
    return;
}