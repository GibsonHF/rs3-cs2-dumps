//
function script920(int0: int): int {
    varclient_742 = 0;
    var string0 = "";
    var int1 = 0;
    if ((varclient_741 != -1 as obj)) {
        if (((strcmp(OC_IOP(varclient_741, 2), "Wear") == 0) || (strcmp(OC_IOP(varclient_741, 2), "Wield") == 0))) {
            int1 = 1;
        };
        IF_SETOBJECT_NONUM(varclient_741, -1, comp(449, 5));
        IF_SETTEXT(OC_NAME(varclient_741), comp(449, 6));
        if (((MAP_MEMBERS() == 0) && (OC_MEMBERS(varclient_741) == 1))) {
            script922("This is a members item. Additional information is not available on this world.", 1, int0);
        } else {
            string0 = script914();
            if ((strcmp(string0, "") != 0)) {
                script922(string0, 1, int0);
                varclient_742 = (varclient_742 + 1);
            };
            script921(varclient_2354, 1, int0);
            if ((strcmp(item_getparam(varclient_741, 690), "") != 0)) {
                script921(" ", 1, int0);
                script921(item_getparam(varclient_741, 690), 1, int0);
            };
            if ((MODULO(item_getparam(varclient_741, 740), 2) == 1)) {
                if (((strcmp(varclient_2355, "") != 0) && (int1 == 1))) {
                    script921(varclient_2355, 0, int0);
                };
                if ((strcmp(varclient_2356, "") != 0)) {
                    script921(varclient_2356, 0, int0);
                };
            } else {
                if ((strcmp(varclient_2356, "") != 0)) {
                    script921(varclient_2356, 0, int0);
                };
                if (((strcmp(varclient_2355, "") != 0) && (int1 == 1))) {
                    script921(varclient_2355, 0, int0);
                };
            };
            string0 = script912(varclient_741);
            if ((strcmp(string0, "") != 0)) {
                script921(string0, 0, int0);
            };
            if (((strcmp(varclient_2357, "") != 0) && (int1 == 1))) {
                script923(varclient_2357, varclient_2358, varclient_2359, int0);
            };
        };
    } else {
        script921("Select an item to see its information.", 1, int0);
    };
    return ((6 * 2) + (varclient_742 * 11));
}