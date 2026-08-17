//
function script20806(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    if ((int2 == comp(1512, 16))) {  // house_furniture_catalogue:items_obj
        if ((varbitclient_61226 == 62)) {
            stack(int0);
            script20751(int1, int2, int3, int4, int5, varbitclient_61230, int7, 1);
            return;
        };
        if ((varbitclient_61875 == 1)) {
            stack(int0);
            stack(int1);
            stack(int2);
            stack(int3);
            stack(int4);
            stack(int5);
            stack(varbitclient_61228);
            stack(varbitclient_61876);
            stack(int7);
            stack(1);
            script20194();
            if (BRANCH_EQUALS(1)) {
                return;
            };
        };
        IF_SETHIDE(true, comp(1512, 14));  // house_furniture_catalogue:items_scrolling
        IF_SETSIZE(16, 0, 1, 1, int0);
        IF_SETSIZE(16, 0, 0, 1, int1);
    };
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    CC_DELETEALL(int5);
    var int9 = script12957(varbitclient_61226, varbitclient_61227, varclient_8426, varclient_8429);
    var int10 = 0;
    var int11 = 0;
    switch (varbitclient_61233) {
        case 0: {
            unk11023(int9, 1515664, script6427(varbitclient_61234));
            stack(int0);
            [int10, int11] = script20807(int1, int2, int3, int4, int5, int7);
            break;
        }
        case 1: {
            unk11023(int9, 1515536, script6427(varbitclient_61234));
            stack(int0);
            [int10, int11] = script20807(int1, int2, int3, int4, int5, int7);
            break;
        }
        default: {
            unk11023(int9, 1515664, script6427(varbitclient_61234));
            stack(int0);
            [int10, int11] = script20807(int1, int2, int3, int4, int5, int7);
            break;
        }
    };
    if ((int10 == 0)) {
        script20480(int2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2100, "No items available to display. Update your filter options or clear your category selections.", -1, 1, 1);
        script19620(int1, int0, int11, int2, int6, int8, -1, -1);
        return;
    };
    if ((int10 >= 400)) {
        int11 = (int11 + script5347(int2, IF_GETNEXTSUBID(int2), 0, int11, 0, 0, 0, 1, 2100, "Too many items to display. Update your filter options or select individual categories."));
    };
    script19620(int1, int0, int11, int2, int6, int8, -1, -1);
    script20808(int3);
    stack(int2);
    script20811(int3, int4, int5);
    return;
}