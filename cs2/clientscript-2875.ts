//
function script2875(): void {
    if ((varbitplayer_42884 == 2)) {
        script10416(comp(623, 66), comp(623, 67), "Apply advanced data on login", "The saved skybox data will be applied on login", "Don't apply save data", varbitplayer_42885);
        IF_SETHIDE(true, comp(623, 34));
        IF_SETHIDE(false, comp(623, 31));
        script5910();
        return;
    };
    IF_SETHIDE(false, comp(623, 34));
    IF_SETHIDE(true, comp(623, 31));
    var int0 = 15005 as cs2enum;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = varbitplayer_28041;
    var int7 = false;
    if ((varbitplayer_42884 == 1)) {
        int0 = 15006 as cs2enum;
        int6 = varbitplayer_42883;
        if ((varbitplayer_55460 == 1)) {
            IF_SETTEXT("<col=FF0000>Filter changes will not be visible while High Contrast Mode is active.</col>", comp(623, 39));
        } else {
            IF_SETTEXT("Filters can dramatically change the appearance of the world.", comp(623, 39));
        };
    } else if ((varbitplayer_55460 == 1)) {
        IF_SETTEXT("<col=FF0000>Skybox changes will be obscured while High Contrast Mode is active.</col>", comp(623, 39));
    } else {
        IF_SETTEXT("Skyboxes change the appearance of the sky and lighting of an area.", comp(623, 39));
    };
    CC_DELETEALL(comp(623, 36));
    CC_DELETEALL(comp(623, 37));
    if ((IF_FIND(comp(623, 34)) == 1)) {
        int5 = ((CC_GETWIDTH() / 2) - 10);
    };
    var int8 = ENUM_GETOUTPUTCOUNT(int0);
    while ((int1 < int8)) {
        if ((varbitplayer_42884 == 0)) {
            int7 = script12585(script2873(int1));
        } else {
            int7 = false;
        };
        if ((int1 == int6)) {
            int2 = script13998(comp(623, 36), comp(623, 37), 28556 as struct, int3, int4, (int5 - 10), 22, int2, int7, enum_getvalue(0, 36, int0, int1), 1);
        } else {
            int2 = script13998(comp(623, 36), comp(623, 37), 28556 as struct, int3, int4, (int5 - 10), 22, int2, int7, enum_getvalue(0, 36, int0, int1), 0);
        };
        if ((int3 == 0)) {
            int3 = int5;
        } else {
            int3 = 0;
            int4 = (int4 + 25);
        };
        int1 = (int1 + 1);
    };
    IF_SETSCROLLSIZE(0, (int4 + 25), comp(623, 35));
    script7791(comp(623, 38), comp(623, 35));
    return;
}