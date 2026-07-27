//
function script20607(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, string0: string): void {
    CC_DELETEALL(comp(1495, 43));
    IF_SETSCROLLSIZE(0, 0, comp(1495, 42));
    CC_DELETEALL(comp(1495, 42));
    var int9 = script20491(2100);
    var string1 = script20608(int0, int2);
    var string2 = script20855(int0);
    if ((STRING_LENGTH(string2) > 0)) {
        string1 = string2;
    };
    if ((STRING_LENGTH(string1) > 0)) {
        if ((STRING_LENGTH(string0) > 0)) {
            var string0 = strconcat(string0, "<br><br>");
        };
        string0 = strconcat(string0, string1);
    };
    if ((int5 == 1)) {
        if ((STRING_LENGTH(string0) > 0)) {
            string0 = strconcat(string0, "<br><br>");
        };
        string0 = strconcat(string0, "This purchase includes an offhand variant.");
    };
    var int10 = script15891(string0, IF_GETWIDTH(comp(1495, 42)), int9, 0);
    script2995(97976362, IF_GETNEXTSUBID(comp(1495, 42)), 0, 0, 0, 0, 0, int10, 1, 0, 2100, string0);
    var int11 = int10;
    string0 = "";
    var string3 = "";
    var string4 = "";
    if ((((int1 != -1 as dbrow) && (DB_GETROWTABLE(int1) == 348)) && (dbrow_getfield(int1, 1425728, 0) == true))) {
        if ((DB_GETFIELDCOUNT(int1, 1425744) > 0)) {
            if ((int7 == 1)) {
                string3 = `<col=32FA32>${dbrow_getfield(int1, 1425760, 0)}</col>`;
            } else {
                string3 = `<col=FA3232>${dbrow_getfield(int1, 1425744, 0)}</col>`;
            };
            string3 = strconcat("Purchase Requirements<br>", string3);
            int11 = script20854(int11, int9, 36219, string3);
        } else {
            unk11016("Earned item has been created but does not have the appropriate requirement strings added.");
        };
        if ((DB_GETFIELDCOUNT(int1, 1425776) > 0)) {
            string4 = dbrow_getfield(int1, 1425776, 0);
            string4 = strconcat("Equip Restrictions<br>", string4);
            int11 = script20854(int11, int9, 20969, string4);
        };
    };
    if ((int4 == 1)) {
        int10 = script15891("Discounts for partially owned packages are not supported at this time.", IF_GETWIDTH(comp(1495, 42)), int9, 0);
        script2995(97976362, IF_GETNEXTSUBID(comp(1495, 42)), 0, (int11 + 15), 0, 0, 0, int10, 1, 0, 2100, "Discounts for partially owned packages are not supported at this time.");
        int11 = (int11 + (int10 + 15));
    };
    var int12 = 0;
    var string5 = "";
    var int13 = -1;
    if ((int3 == 0)) {
        if ((PLAYERMEMBER() == true)) {
            switch (int0) {
                case 31861:
                case 31867:
                case 31868:
                case 31869: {
                    string5 = "As you're a member, this item is free for you!";
                    break;
                }
                case 52422: {
                    string5 = "As you're a 12-month member, this item is free for you!";
                    break;
                }
                default: {
                    if ((int6 > 0)) {
                        string5 = "As you're a member, this item is 10% cheaper for you! We've already added that discount to the price.";
                    };
                    break;
                }
            };
            int13 = 12978;
        } else {
            switch (int0) {
                case 31861:
                case 31867:
                case 31868:
                case 31869: {
                    string5 = "If you were a member, this item would be free for you!";
                    break;
                }
                default: {
                    if ((int6 > 0)) {
                        string5 = "If you were a member, this item would be 10% cheaper for you!";
                    };
                    break;
                }
            };
            int13 = 12979;
        };
        if (((STRING_LENGTH(string5) > 0) && (int13 != -1))) {
            int11 = script20854(int11, int9, int13, string5);
        };
    };
    if ((int11 > IF_GETHEIGHT(comp(1495, 42)))) {
        IF_SETSCROLLSIZE(0, int11, comp(1495, 42));
        script7791(97976363, 97976362);
    };
    return;
}