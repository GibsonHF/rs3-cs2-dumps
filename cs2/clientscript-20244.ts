//
function script20244(int0: component): void {
    var int1 = script20117(varplayer_12314);
    if ((script20132(int1) == 0)) {
        return;
    };
    if ((varbitplayer_58406 == 0)) {
        IF_SETONTIMER(callback(script20244, int0), int0);
        return;
    };
    IF_SETONTIMER(callback(), int0);
    var int2 = 12202555;
    var int3 = 16464712;
    var int4 = dbrow_getfield(int1, 1335584, 0);
    var int5 = 0;
    var int6 = varbitplayer_58389;
    CC_DELETEALL(int0);
    var int7 = dbrow_getfield(int1, 1335648, 0);
    var int8 = (varbitplayer_58406 - varbitplayer_58405);
    var int9 = (WORLDMAP_GETDISPLAYCOORD(int7) - varbitplayer_58405);
    var int10 = script20245();
    var string0 = `${TOSTRING_LOCALISED(int9, 1)} / ${TOSTRING_LOCALISED(int8, 1)} gained before the next relic unlock.`;
    if ((int10 != -1)) {
        string0 = "A relic is ready to unlock!";
        script20246(int0, 0, 0, int9, int9, 35253 as graphic, string0, int2, int3);
    } else {
        if ((int9 < 0)) {
            string0 = "";
        };
        script20246(int0, 0, 0, int8, int9, 35252 as graphic, string0, int2, int3);
    };
    if ((script20129() == true)) {
        if ((varbitplayer_58388 == 0)) {
            int5 = enum_getvalue(0, 0, int4, varbitplayer_58388);
        } else if ((varbitplayer_58388 < ENUM_GETOUTPUTCOUNT(int4))) {
            int6 = enum_getvalue(0, 0, int4, (varbitplayer_58388 - 1));
            int5 = (enum_getvalue(0, 0, int4, varbitplayer_58388) - int6);
            int6 = (varbitplayer_58389 - int6);
        } else {
            int5 = dbrow_getfield(int1, 1335408, 0);
        };
        script20246(int0, 1, 28, int5, int6, 8660 as graphic, "", int2, int3);
    };
    return;
}