//
function script20806(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    if ((int2 == comp(1512, 15))) {  // house_furniture_catalogue:items_bg
        if ((varbitclient_61226 == 62)) {
            script20751(int0, int1, int2, int3, int4, varbitclient_61230, int6, 1);
            return;
        };
        IF_SETHIDE(true, comp(1512, 13));  // house_furniture_catalogue:items_stairs_toggle
        IF_SETSIZE(16, 0, 1, 1, int0);
        IF_SETSIZE(16, 0, 0, 1, int1);
    };
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    var int8 = script12957(varbitclient_61226, varbitclient_61227, varclient_8426, varclient_8429);
    var int9 = 0;
    var int10 = 0;
    switch (varbitclient_61233) {
        case 0: {
            unk11023(int8, 1515664, script6427(varbitclient_61234));
            [int9, int10] = script20807(int0, int1, int2, int3, int4, int6);
            break;
        }
        case 1: {
            unk11023(int8, 1515536, script6427(varbitclient_61234));
            [int9, int10] = script20807(int0, int1, int2, int3, int4, int6);
            break;
        }
        default: {
            unk11023(int8, 1515664, script6427(varbitclient_61234));
            [int9, int10] = script20807(int0, int1, int2, int3, int4, int6);
            break;
        }
    };
    if ((int9 == 0)) {
        script20480(int2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2100, "No items available to display. Update your filter options or clear your category selections.", -1, 1, 1);
        script19620(int1, int0, int10, int2, int5, int7, -1, -1);
        return;
    };
    if ((int9 >= 400)) {
        int10 = (int10 + script5347(int2, IF_GETNEXTSUBID(int2), 0, int10, 0, 0, 0, 1, 2100, "Too many items to display. Update your filter options or select individual categories."));
    };
    script19620(int1, int0, int10, int2, int5, int7, -1, -1);
    script20808(int3);
    script20811(int2, int3, int4);
    return;
}