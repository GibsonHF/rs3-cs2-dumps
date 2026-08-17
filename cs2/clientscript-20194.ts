//
function script20194(): void {
    IF_SETHIDE(true, comp(1512, 14));  // house_furniture_catalogue:items_scrolling
    IF_SETSIZE(16, 0, 1, 1, int0);
    IF_SETSIZE(16, 0, 0, 1, int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    CC_DELETEALL(int5);
    var int10 = script11651(int6);
    if ((int10 == -1)) {
        stack(0);
        return;
    };
    var int11 = dbrow_getfield(int10, 1515856, 0);
    if ((int11 == -1 as dbrow)) {
        stack(0);
        return;
    };
    var int12 = INV_TOTAL(1004 as inv, dbrow_getfield(int10, 1515584, 0));
    var int13 = DB_GETFIELDCOUNT(int11, 1572864);
    var int14 = -1;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = IF_GETWIDTH(int0);
    var int19 = -1;
    var int20 = 0;
    var int21 = 18459;
    var string0 = "";
    var int22 = -1;
    var int23 = 0;
    var int24 = 0;
    var string1 = "";
    var int25 = 0;
    var int26 = dbrow_getfield(int10, 1515584, 0);
    var string2 = dbrow_getfield(int10, 1515536, 0);
    var string3 = `<sprite=35194>${script17372(INT_TO_LONG(int13), 3, 1)}`;
    if ((int12 == 0)) {
        int21 = 18460;
    };
    stack(int2);
    stack(200);
    stack(int17);
    script20195("Base Appearance");
    int17 = [];
    stack(int0);
    stack(int1);
    stack(int2);
    stack(int3);
    stack(int4);
    stack(int5);
    stack(int8);
    stack(0);
    stack(int16);
    stack(int17);
    stack(int24);
    stack(int25);
    stack(int21);
    stack(int26);
    stack(string2);
    stack(string0);
    stack(int12);
    script20197(string3);
    int17 = ((int17 + 72) + 4);
    stack(int2);
    stack(201);
    stack(int17);
    script20195("Overrides");
    int17 = [];
    while ((int15 < int13)) {
        int14 = dbrow_getfield(int11, 1572864, int15);
        string2 = dbrow_getfield(int14, 1576960, 0);
        int26 = dbrow_getfield(int14, 1576992, 0);
        int22 = dbrow_getfield(int14, 1577008, 0);
        int23 = dbrow_getfield(int14, 1577024, 0);
        string1 = dbrow_getfield(int14, 1577040, 0);
        int25 = dbrow_getfield(int14, 1577056, 0);
        if (((int22 == -1) || (WORLDMAP_GETDISPLAYCOORD(int22) >= int23))) {
            int21 = 18459;
            string0 = "";
            string3 = "";
        } else {
            switch (int25) {
                case 0: {
                    string3 = "";
                    break;
                }
                case 1: {
                    string3 = "<sprite=18861>";
                    if ((STRING_LENGTH(string1) == 0)) {
                        string1 = "You can unlock this override by playing the game.";
                    };
                    break;
                }
                case 2: {
                    string3 = "<sprite=35195>";
                    if ((STRING_LENGTH(string1) == 0)) {
                        string1 = "You can obtain this override from the Marketplace.";
                    };
                    break;
                }
            };
            int21 = 18460;
            int24 = 1;
            string0 = `Locked<br>${string1}`;
        };
        stack(int0);
        stack(int1);
        stack(int2);
        stack(int3);
        stack(int4);
        stack(int5);
        stack(int8);
        stack((int15 + 1));
        stack(int16);
        stack(int17);
        stack(int24);
        stack(int25);
        stack(int21);
        stack(int26);
        stack(string2);
        stack(string0);
        stack(0);
        script20197(string3);
        int16 = ((int16 + 80) + 4);
        if (((int16 + 80) > int18)) {
            int16 = 0;
            int17 = ((int17 + 72) + 4);
        };
        int24 = 0;
        int15 = (int15 + 1);
    };
    if ((int16 != 0)) {
        int17 = ((int17 + 72) + 4);
    };
    script19620(int1, int0, int17, int2, int7, int9, -1, -1);
    stack(1);
    return;
}