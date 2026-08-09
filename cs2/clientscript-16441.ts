//
function script16441(int0: number): void {
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var string0 = "";
    var string1 = "";
    var int5 = -1;
    switch (int0) {
        case 1: {
            int1 = varbitplayer_51025;
            int2 = 43843634;
            int3 = 43843635;
            int4 = 43843633;
            break;
        }
        case 2: {
            int1 = varbitplayer_51026;
            int2 = 43843641;
            int3 = 43843642;
            int4 = 43843640;
            break;
        }
        case 3: {
            int1 = varbitplayer_51027;
            int2 = 43843647;
            int3 = 43843648;
            int4 = 43843646;
            break;
        }
        default: {
            return;
        }
    };
    int5 = script16420(int1);
    var int6 = dbrow_getfield(int5, 688176, 0);
    CC_DELETEALL(int4);
    var int7 = 0;
    var int8 = -1;
    var int9 = -1;
    var int10 = 0;
    var int11 = 0;
    var int12 = -1;
    var int13 = 0;
    var int14 = -1;
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
        CC_SETGRAPHIC(script16427(int6));
        CC_SETSIZE(17, 18, 0, 0);
        CC_SETPOSITION(20, 6, 2, 2);
        if ((DB_GETFIELDCOUNT(int5, 688288) > 0)) {
            [int8, int9] = dbrow_getfield(int5, 688288, 0);
            if ((IF_FIND(int8) == 1)) {
                CC_CREATE(int4, 6, int7);
                int7 = (int7 + 1);
                CC_SETMODEL(124993 as model);
                CC_SETMODELANGLE(2, 12, 28, 1995, 11, 550);
                CC_SETRETEX(0, 14513, int9);
                CC_SETPOSITION(0, 0, 1, 1);
                CC_SETSIZE(80, 80, 0, 0);
            };
            if ((DB_GETFIELDCOUNT(int5, 688224) > 0)) {
                [int12, int13] = dbrow_getfield(int5, 688224, 0);
                string0 = `${dbrow_getfield(int5, 688336, 0)} Parcel`;
                string1 = `${string1}Additionally contain ${OC_NAME(int12)} x ${inttostring(int13, 10)}`;
            };
        } else if ((DB_GETFIELDCOUNT(int5, 688208) > 0)) {
            string0 = "Multiplier";
            int10 = dbrow_getfield(int5, 688208, 0);
            string1 = `${string1} <col=00FF00>x${inttostring(int10, 10)}</col> multiplier`;
            CC_CREATE(int4, 5, int7);
            int7 = (int7 + 1);
            CC_SETGRAPHIC(script10980(int10));
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETSIZE(100, 100, 0, 0);
        } else if ((DB_GETFIELDCOUNT(int5, 688192) > 0)) {
            string0 = "Rarity Modifier";
            int11 = dbrow_getfield(int5, 688192, 0);
            string1 = `${string1} Guaranteed ${script10979(int11)}${script10876(int11)}</col> rarity`;
            CC_CREATE(int4, 5, int7);
            int7 = (int7 + 1);
            CC_SETGRAPHIC(script9718(int11));
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETSIZE(80, 113, 0, 0);
        };
    } else if ((DB_GETFIELDCOUNT(int5, 688240) > 0)) {
        string1 = "<col=DEA73E>Instant Prize:</col><br>";
        [int12, int13] = dbrow_getfield(int5, 688240, 0);
        switch (int12) {
            case 52865:
            case 52863:
            case 52861:
            case 54409:
            case 56377:
            case 56375:
            case 56376: {
                string0 = "<col=B32AB6>Rare Prize!";
                break;
            }
            default: {
                string0 = "Instant reward";
                break;
            }
        };
        if ((int13 > 1)) {
            string1 = `${string1}${OC_NAME(int12)} x ${inttostring(int13, 10)}`;
        } else {
            string1 = `${string1}${OC_NAME(int12)}`;
        };
        if ((DB_GETFIELDCOUNT(int5, 688304) > 0)) {
            [int14, int16, int17, int15, int18, int19, int20] = dbrow_getfield(int5, 688304, 0);
            CC_CREATE(int4, 6, int7);
            int7 = (int7 + 1);
            CC_SETMODEL(int14);
            CC_SETMODELANGLE(int16, int17, int18, int19, int20, int15);
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETSIZE(80, 80, 0, 0);
            int21 = DB_GETFIELDCOUNT(int5, 688320);
            while ((int21 > 0)) {
                CC_SETRECOL(int21, dbrow_getfield(int5, 688320, (int21 - 1)));
                int21 = (int21 - 1);
            };
        } else if ((int12 != -1)) {
            CC_CREATE(int4, 5, int7);
            int7 = (int7 + 1);
            CC_SETOBJECT(int12, int13);
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETSIZE(32, 32, 0, 0);
        };
    };
    if ((DB_GETFIELDCOUNT(int5, 688160) > 0)) {
        string1 = `${string1}<br>${dbrow_getfield(int5, 688160, 0)}`;
    };
    if ((int1 > 0)) {
        IF_SETTEXT(string0, int2);
        IF_SETTEXT(string1, int3);
    };
    return;
}