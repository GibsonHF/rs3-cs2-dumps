//
function script6781(int0: unknown_int): void {
    var int1 = -1;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var string0 = "";
    var string1 = "";
    var int5 = -1 as dbrow;
    switch (int0) {
        case 1: {
            int1 = varbitplayer_54405;
            int2 = comp(631, 51);
            int3 = comp(631, 52);
            int4 = comp(631, 50);
            break;
        }
        case 2: {
            int1 = varbitplayer_54406;
            int2 = comp(631, 58);
            int3 = comp(631, 59);
            int4 = comp(631, 57);
            break;
        }
        case 3: {
            int1 = varbitplayer_54407;
            int2 = comp(631, 64);
            int3 = comp(631, 65);
            int4 = comp(631, 63);
            break;
        }
        default: {
            return;
        }
    };
    int5 = script6733(int1);
    var int6 = dbrow_getfield(int5, 663600, 0);
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
            string1 = `<col=DEA73E>Next ${inttostring(int6, 10)} crates:</col><br>`;
        } else {
            string1 = "<col=DEA73E>Next crates:</col>";
        };
        CC_CREATE(int4, 5, int7);
        int7 = (int7 + 1);
        CC_SETGRAPHIC(5389 as graphic);
        CC_SETSIZE(17, 18, 0, 0);
        CC_SETPOSITION(1, 6, 2, 2);
        CC_CREATE(int4, 5, int7);
        int7 = (int7 + 1);
        CC_SETGRAPHIC(script6742(int6));
        CC_SETSIZE(17, 18, 0, 0);
        CC_SETPOSITION(20, 6, 2, 2);
        if ((DB_GETFIELDCOUNT(int5, 663712) > 0)) {
            [int8, int9] = dbrow_getfield(int5, 663712, 0);
            if ((IF_FIND(int8) == 1)) {
                CC_CREATE(int4, 6, int7);
                int7 = (int7 + 1);
                CC_SETMODEL(130951 as model);
                CC_SETMODELANGLE(2, 12, 28, 1995, 11, 550);
                CC_SETRETEX(0, 14513, int9);
                CC_SETPOSITION(0, 0, 1, 1);
                CC_SETSIZE(80, 80, 0, 0);
            };
            if ((DB_GETFIELDCOUNT(int5, 663648) > 0)) {
                [int12, int13] = dbrow_getfield(int5, 663648, 0);
                string0 = `${dbrow_getfield(int5, 663760, 0)} Crate`;
                string1 = `${string1}Additionally contain ${OC_NAME(int12)} x ${inttostring(int13, 10)}`;
            };
        } else if ((DB_GETFIELDCOUNT(int5, 663632) > 0)) {
            string0 = "Multiplier";
            int10 = dbrow_getfield(int5, 663632, 0);
            string1 = `${string1} <col=00FF00>x${inttostring(int10, 10)}</col> multiplier`;
            CC_CREATE(int4, 5, int7);
            int7 = (int7 + 1);
            CC_SETGRAPHIC(script10980(int10));
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETSIZE(100, 100, 0, 0);
        } else if ((DB_GETFIELDCOUNT(int5, 663616) > 0)) {
            string0 = "Rarity Modifier";
            int11 = dbrow_getfield(int5, 663616, 0);
            string1 = `${string1} Guaranteed ${script10979(int11)}${script10876(int11)}</col> rarity`;
            CC_CREATE(int4, 5, int7);
            int7 = (int7 + 1);
            CC_SETGRAPHIC(script8948(int11));
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETSIZE(82, 100, 0, 0);
        };
    } else if ((DB_GETFIELDCOUNT(int5, 663664) > 0)) {
        string1 = "<col=DEA73E>Instant Prize:</col><br>";
        [int12, int13] = dbrow_getfield(int5, 663664, 0);
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
        if ((DB_GETFIELDCOUNT(int5, 663728) > 0)) {
            [int14, int16, int17, int15, int18, int19, int20] = dbrow_getfield(int5, 663728, 0);
            CC_CREATE(int4, 6, int7);
            int7 = (int7 + 1);
            CC_SETMODEL(int14);
            CC_SETMODELANGLE(int16, int17, int18, int19, int20, int15);
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETSIZE(80, 80, 0, 0);
            int21 = DB_GETFIELDCOUNT(int5, 663744);
            while ((int21 > 0)) {
                CC_SETRECOL(int21, dbrow_getfield(int5, 663744, (int21 - 1)));
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
    if ((DB_GETFIELDCOUNT(int5, 663584) > 0)) {
        string1 = `${string1}<br>${dbrow_getfield(int5, 663584, 0)}`;
    };
    if ((int1 > 0)) {
        IF_SETTEXT(string0, int2);
        IF_SETTEXT(string1, int3);
    };
    return;
}