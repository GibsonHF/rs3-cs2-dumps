//
function script18273(int0: component): void {
    CC_DELETEALL(int0);
    var int1 = DB_LISTALL(263);
    if ((varbitplayer_54610 > 1)) {
        int1 = DB_FIND_REFINE(1077280, varbitplayer_54610, 0);
    };
    dbrow_findnext();
    var int2 = stack();
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "This emote has other appearances available. Right click to customise.";
    if ((script6431() == 1)) {
        string3 = "This emote has other appearances available. Long press to customise.";
    };
    while ((int2 != -1 as dbrow)) {
        if ((DB_GETFIELDCOUNT(int2, 1077376) <= 0)) {
            int5 = script17716(int2);
            if ((int5 > 0)) {
                int2 = script18779(int2);
            };
            int3 = dbrow_getfield(int2, 1077296, 0);
            [int4, string1] = script450(int2);
            string0 = script18302(int2);
            string2 = string0;
            if (((varbitplayer_54610 != 1) || (int4 == 1))) {
                if ((varbitplayer_34815 == 0)) {
                    script8023(int0, int3, 0, 0, 0, 1, 1, 0, 0, 1, 1, script18301(int2));
                    CC_SETOP(1, string0);
                    if ((int5 > 0)) {
                        CC_SETOP(2, "Customise");
                        string2 = strconcat(string2, `<br>${string3}`);
                    };
                    CC_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643));
                    if ((int4 == 0)) {
                        CC_SETCOLOUR(4210752);
                    } else {
                        CC_SETCOLOUR(16777215);
                    };
                } else {
                    script15947(int0, int3, 0, 0, 0, 1, 1, 0, 0, 1, 1, 2100 as dbrow, string0);
                    CC_SETOP(1, string0);
                    if ((int5 > 0)) {
                        CC_SETOP(2, "Customise");
                        string2 = strconcat(string2, `<br>${string3}`);
                    };
                    CC_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643));
                    if ((int4 == 0)) {
                        script11024(3);
                    } else {
                        script11024(5);
                    };
                };
            };
        } else {
            int1 = (int1 - 1);
        };
        dbrow_findnext();
        int2 = stack();
    };
    IF_SETPARAM_INT(8348, int1, int0);
    IF_SETPOSITION(0, 0, 0, 0, int0);
    IF_SETSIZE(16, 0, 1, 1, int0);
    script5863(int0);
    return;
}