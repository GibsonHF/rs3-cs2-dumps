//
function script20293(int0: unknown_int, int1: component, int2: component, int3: component, int4: unknown_int): void {
    CC_DELETEALL(int2);
    CC_DELETEALL(int1);
    var int5 = script20117(varplayer_12314);
    if ((script20132(int5) == 0)) {
        script20323(int2, int1);
        return;
    };
    var int6 = dbrow_getfield(int5, 1335472, 0);
    var int7 = 1;
    if ((int0 == 1)) {
        varbitclient_58403 = script12377(varbitclient_58403, 0, DB_GETFIELDCOUNT(int6, 1372256));
        int7 = varbitclient_58403;
    };
    var int8 = dbrow_getfield(int6, 1372256, int7);
    var int9 = dbrow_getfield(int6, 1372163, 0);
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    if ((DB_GETROWTABLE(int8) == 133)) {
        int11 = (DB_GETFIELDCOUNT(int8, 544768) - 1);
    } else {
        int11 = DB_GETFIELDCOUNT(int8, 1376272);
    };
    var string0 = "";
    var string1 = "";
    var int13 = -1 as graphic;
    var int14 = 0;
    var int15 = 30208 as graphic;
    while ((int10 < int11)) {
        if ((DB_GETROWTABLE(int8) == 133)) {
            int12 = (200 + int10);
            stack(dbrow_getfield(int8, 544768, (int10 + 1)));
            [string0, int13] = stack();
            string1 = inttostring(enum_getvalue(0, 0, int9, (int10 + 1)), 10);
        } else {
            int12 = (200 + dbrow_getfield(int8, 1376273, int10));
            int13 = dbrow_getfield(int8, 1376274, int10);
            string0 = dbrow_getfield(int8, 1376275, int10);
            string1 = inttostring(enum_getvalue(0, 0, int9, int10), 10);
        };
        if ((unk11011(int12, 0, int1) == 0)) {
            int14 = script20171(int7, (int12 - 200));
            script15945(int1, int12, 0, 0, 0, 0, 0, 0, 40, 1, 0, 1, 4);
            cc_setparam(9334, 40);
            cc_setparam(9336, 0);
            cc_setparam(9337, 0);
            script15937(int12, 1, 0, 0, 0, 0, 0, 40, 1, 0);
            CC_SENDTOFRONT();
            script7858(int12, 2, 0, 0, 0, 0, 0, 0, 1, 1, 4479 as dbrow, "");
            if ((int14 == 1)) {
                int15 = 30205 as graphic;
                CC_SETOP(1, "Expand");
            } else {
                int15 = 30208 as graphic;
                CC_SETOP(1, "Collapse");
            };
            CC_SETONBUTTONCLICK(callback(script20311, int1, int2, int3, int12, int7));
            CC_SETONSCROLLWHEEL(callback(script36, int3, int2, -2147483646));
            script7918(int12, 3, 2, 0, 0, 1, 30, 30, 0, 0, int13);
            if ((int7 == 0)) {
                script10485(int12, 4, 35, 2, 0, 0, 85, 7373, 1, 2, 2141 as dbrow, string0);
                script10485(int12, 5, 35, 2, 0, 2, 85, 7373, 1, 2, 17514 as dbrow, `${string1} points per task completed.`);
            } else {
                script10485(int12, 4, 35, 0, 0, 1, 85, 0, 1, 1, 2141 as dbrow, string0);
            };
            script7918(int12, 6, 2, 0, 2, 1, 13, 13, 0, 0, int15);
            script10485(int12, 7, 17, 0, 2, 1, 25, 0, 0, 1, 2101 as dbrow, "");
            CC_SETTEXTALIGN(2, 1, 0);
        };
        int10 = (int10 + 1);
    };
    var int16 = -1;
    if ((int0 == 1)) {
        int16 = script20169(varbitclient_58393, varbitclient_58395, varbitclient_58397, varbitclient_58399, 0);
    } else {
        int16 = script20168(dbrow_getfield(int5, 1335616, 0));
        varclient_8334 = IF_GETWIDTH(comp(1361, 7));
        varclient_8335 = IF_GETHEIGHT(comp(1361, 7));
    };
    var int17 = 0;
    var int18 = 0;
    switch (int7) {
        case 1: {
            unk11023(int16, 1368144, 1);
            int18 = script20294(int1, int8, int7);
            break;
        }
        default: {
            unk11023(int16, 1368160, 1);
            int18 = script20295(int1, int7);
            break;
        }
    };
    if ((int18 == 0)) {
        script20309(int1, int2, int3);
    };
    script7791(int3, int2);
    return;
}