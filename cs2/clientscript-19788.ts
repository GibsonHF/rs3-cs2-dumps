//
function script19788(int0: unknown_int): void {
    var int1 = -1;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var string0 = "";
    var string1 = "";
    var int5 = -1 as dbrow;
    switch (int0) {
        case 1: {
            int1 = varbitplayer_57146;
            int2 = comp(1320, 88);
            int3 = comp(1320, 89);
            int4 = comp(1320, 87);
            break;
        }
        case 2: {
            int1 = varbitplayer_57147;
            int2 = comp(1320, 95);
            int3 = comp(1320, 96);
            int4 = comp(1320, 94);
            break;
        }
        default: {
            return;
        }
    };
    int5 = script19751(int1);
    var int6 = dbrow_getfield(int5, 1282096, 0);
    CC_DELETEALL(int4);
    var int7 = 0;
    var int8 = comp(-1, 65535);
    var int9 = -1 as material;
    var int10 = 0;
    var int11 = 0;
    var int12 = -1 as obj;
    var int13 = 0;
    var int14 = -1 as model;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    if ((int6 > 0)) {
        if ((int6 > 1)) {
            string1 = `<col=DEA73E>Next ${inttostring(int6, 10)} parcels:</col><br>`;
        } else {
            string1 = "<col=DEA73E>Next parcels:</col>";
        };
        CC_CREATE(int4, 5, int7);
        int7 = (int7 + 1);
        CC_SETGRAPHIC(5389 as graphic);
        CC_SETSIZE(17, 18, 0, 0);
        CC_SETPOSITION(1, 6, 2, 2);
        CC_CREATE(int4, 5, int7);
        int7 = (int7 + 1);
        CC_SETGRAPHIC(script19761(int6));
        CC_SETSIZE(17, 18, 0, 0);
        CC_SETPOSITION(20, 6, 2, 2);
        if ((DB_GETFIELDCOUNT(int5, 1282208) > 0)) {
            [int8, int9] = dbrow_getfield(int5, 1282208, 0);
            if ((IF_FIND(int8) == 1)) {
                CC_CREATE(int4, 6, int7);
                int7 = (int7 + 1);
                CC_SETMODEL(124993 as model);
                CC_SETMODELANGLE(2, 12, 28, 1995, 11, 550);
                CC_SETRETEX(0, 14513, int9);
                CC_SETPOSITION(0, 0, 1, 1);
                CC_SETSIZE(80, 80, 0, 0);
            };
            if ((DB_GETFIELDCOUNT(int5, 1282144) > 0)) {
                [int12, int13] = dbrow_getfield(int5, 1282144, 0);
                string0 = `${dbrow_getfield(int5, 1282256, 0)} Parcel`;
                string1 = `${string1}Additionally contain ${OC_NAME(int12)} x ${inttostring(int13, 10)}`;
            };
        } else {
            string0 = "Modifiers";
            if ((DB_GETFIELDCOUNT(int5, 1282128) > 0)) {
                int10 = dbrow_getfield(int5, 1282128, 0);
                string1 = `${string1} <col=00FF00>x${inttostring(int10, 10)}</col> multiplier`;
                CC_CREATE(int4, 5, int7);
                int7 = (int7 + 1);
                CC_SETGRAPHIC(script10980(int10));
                CC_SETPOSITION(10, 0, 0, 0);
                CC_SETSIZE(100, 100, 0, 0);
            } else {
                script12478(`Setting up trh205 bonus. Bonus with id ${inttostring(dbrow_getfield(int5, 1282048, 0), 10)} doesn't have a multiplier.`);
            };
            if ((DB_GETFIELDCOUNT(int5, 1282112) > 0)) {
                int11 = dbrow_getfield(int5, 1282112, 0);
                if ((int11 >= 5)) {
                    string1 = strconcat(string1, `<br>${script10979(int11)}${script10876(int11)}</col> rarity`);
                } else {
                    string1 = strconcat(string1, `<br>${script10979(int11)}${script10876(int11)}</col> rarity plus`);
                };
                CC_CREATE(int4, 5, int7);
                int7 = (int7 + 1);
                CC_SETGRAPHIC(script19209(int11));
                CC_SETPOSITION(80, 30, 0, 0);
                CC_SETSIZE(66, 82, 0, 0);
            } else {
                script12478(`Setting up trh205 bonus. Bonus with id ${inttostring(dbrow_getfield(int5, 1282048, 0), 10)} doesn't have a rarity`);
            };
        };
    } else if ((DB_GETFIELDCOUNT(int5, 1282160) > 0)) {
        string1 = "<col=DEA73E>Instant Prize:</col><br>";
        [int12, int13] = dbrow_getfield(int5, 1282160, 0);
        switch (int12) {
            default: {
                break;
            }
        };
        string0 = "Instant reward";
        if ((int13 > 1)) {
            string1 = `${string1}${OC_NAME(int12)} x ${inttostring(int13, 10)}`;
        } else {
            string1 = `${string1}${OC_NAME(int12)}`;
        };
        if ((DB_GETFIELDCOUNT(int5, 1282224) > 0)) {
            [int14, int16, int17, int15, int18, int19, int20] = dbrow_getfield(int5, 1282224, 0);
            CC_CREATE(int4, 6, int7);
            int7 = (int7 + 1);
            CC_SETMODEL(int14);
            CC_SETMODELANGLE(int16, int17, int18, int19, int20, int15);
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETSIZE(80, 80, 0, 0);
            int21 = DB_GETFIELDCOUNT(int5, 1282240);
            while ((int21 > 0)) {
                CC_SETRECOL(int21, dbrow_getfield(int5, 1282240, (int21 - 1)));
                int21 = (int21 - 1);
            };
        } else if ((int12 != -1 as obj)) {
            CC_CREATE(int4, 5, int7);
            int7 = (int7 + 1);
            CC_SETOBJECT(int12, int13);
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETSIZE(32, 32, 0, 0);
        };
    };
    if ((DB_GETFIELDCOUNT(int5, 1282080) > 0)) {
        string1 = `${string1}<br>${dbrow_getfield(int5, 1282080, 0)}`;
    };
    if ((int1 > 0)) {
        IF_SETTEXT(string0, int2);
        IF_SETTEXT(string1, int3);
    };
    return;
}