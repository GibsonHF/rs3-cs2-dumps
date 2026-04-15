//
function script18876(int0: dbrow, int1: unknown_int, int2: int): boolean {
    var string0 = "";
    var int3 = script18920(int0, 23);
    var int4 = 0;
    var int5 = 0;
    [int4, int5] = script18848(int0, int3);
    if ((int4 == 0)) {
        return false;
    };
    switch (int3) {
        case 1: {
            string0 = script18878(int0, int2, int3, 1);
            if ((STRING_LENGTH(string0) > 0)) {
                CC_SETONOP(callback(script15816, string0));
                return 1;
            };
            script12478(`^calendar_contextual_action_open_url set on column calendar_entry:contextual_action of row ${script15115(int0, int2)}, but missing a url!`);
            break;
        }
        case 2: {
            string0 = script18878(int0, int2, int3, 0);
            if ((STRING_LENGTH(string0) > 0)) {
                CC_SETONOP(callback(script5720, string0));
                return 1;
            };
            script12478(`^calendar_contextual_action_open_newspost set on column calendar_entry:contextual_action of row ${script15115(int0, int2)}, but missing a url!`);
            break;
        }
        case 3: {
            if (((script18920(int0, 27) != -1) && (script18920(int0, 28) != -1))) {
                return true;
            };
            script12478(`^calendar_contextual_action_open_interface set on column calendar_entry:contextual_action of row ${script15115(int0, int2)}, but missing calendar_entry:parent_interface_id or calendar_entry:parent_interface_tab_id!`);
            break;
        }
        case 4: {
            if ((script18926(int0, 26) != -1 as coordgrid)) {
                return true;
            };
            script12478(`^calendar_contextual_action_teleport set on column calendar_entry:contextual_action of row ${script15115(int0, int2)}, but missing calendar_entry:tele_coord!`);
            break;
        }
        case 5: {
            return true;
        }
        case 6: {
            return true;
        }
    };
    var int6 = script18925(int0, 16);
    if ((int6 != -1 as quest)) {
        return script6427(script18798(int6));
    };
    var int7 = script18924(int0, 15);
    if ((struct_getparam(int7, 1346) > 0)) {
        return true;
    };
    switch (int2) {
        case 0: {
            string0 = script18878(int0, int2, int3, 0);
            if ((STRING_LENGTH(string0) > 0)) {
                CC_SETONOP(callback(script5720, string0));
                return 1;
            };
            break;
        }
        case 3: {
            return true;
        }
        case 4: {
            string0 = enum_getvalue(0, 36, 15193 as cs2enum, script18920(int0, 13));
            CC_SETONOP(callback(script15816, string0));
            return 1;
        }
        case 5: {
            string0 = script18921(int0, 21);
            if ((STRING_LENGTH(string0) > 0)) {
                CC_SETONOP(callback(script18879, string0));
                return 1;
            };
            break;
        }
    };
    return false;
}