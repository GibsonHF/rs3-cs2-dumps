//
function script19283(int0: component, int1: component, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int): void {
    var int10 = dbrow_getfield(varplayer_11901, 1216528, 0);
    var int11 = dbrow_getfield(int10, 1212608, 0);
    var int12 = script19218(int11, int5);
    var int13 = script16766(int3, int7, int8);
    var int14 = 42;
    var int15 = 0;
    var int16 = ((IF_GETWIDTH(int0) - ((int3 * int14) + ((int3 + 1) * int15))) / 2);
    var int17 = ((IF_GETHEIGHT(int0) - ((int4 * int14) + ((int4 + 1) * int15))) / 2);
    var int18 = (((int16 + int15) + (int14 * MODULO(int13, int3))) + (MODULO(int13, int3) * int15));
    var int19 = ((IF_GETHEIGHT(int0) - int17) - (((int15 + int14) + (int14 * (int13 / int3))) + ((int13 / int3) * int15)));
    script2994(int0, IF_GETNEXTSUBID(int0), int18, int19, 0, 0, int14, int14, 0, 0, dbrow_getfield(int12, 1237009, 0));
    CC_SET2DANGLE(script19220(int9));
    switch (int0) {
        case 84541489: {
            if ((int2 == (varbitplayer_56168 + 1))) {
                CC_SETGRAPHIC(dbrow_getfield(int12, 1237010, 0));
            };
            script2994(int0, IF_GETNEXTSUBID(int0), int18, int19, 0, 0, int14, int14, 0, 0, -1 as graphic);
            if ((int2 >= (varbitplayer_56168 + 1))) {
                if ((int2 == (varbitplayer_56168 + 1))) {
                    CC_SETGRAPHIC(dbrow_getfield(int12, 1237026, 0));
                } else {
                    CC_SETGRAPHIC(dbrow_getfield(int12, 1237025, 0));
                };
                CC_SET2DANGLE(script19220(int9));
            };
            break;
        }
        case 84541492: {
            if (((int2 == varbitplayer_56169) && (varbitplayer_56168 >= dbrow_getfield(varplayer_11902, 1220656, 0)))) {
                CC_SETGRAPHIC(dbrow_getfield(int12, 1237010, 0));
            };
            script2994(int0, IF_GETNEXTSUBID(int0), int18, int19, 0, 0, int14, int14, 0, 0, -1 as graphic);
            if ((int2 >= varbitplayer_56169)) {
                if (((int2 == varbitplayer_56169) && (varbitplayer_56168 >= dbrow_getfield(varplayer_11902, 1220656, 0)))) {
                    CC_SETGRAPHIC(dbrow_getfield(int12, 1237042, 0));
                } else {
                    CC_SETGRAPHIC(dbrow_getfield(int12, 1237041, 0));
                };
                CC_SET2DANGLE(script19220(int9));
            };
            break;
        }
        case 84541495: {
            if (((int2 == varbitplayer_56170) && (varbitplayer_56168 >= dbrow_getfield(varplayer_11902, 1220672, 0)))) {
                CC_SETGRAPHIC(dbrow_getfield(int12, 1237010, 0));
            };
            script2994(int0, IF_GETNEXTSUBID(int0), int18, int19, 0, 0, int14, int14, 0, 0, -1 as graphic);
            if ((int2 >= varbitplayer_56170)) {
                if (((int2 == varbitplayer_56170) && (varbitplayer_56168 >= dbrow_getfield(varplayer_11902, 1220672, 0)))) {
                    CC_SETGRAPHIC(dbrow_getfield(int12, 1237042, 0));
                } else {
                    CC_SETGRAPHIC(dbrow_getfield(int12, 1237041, 0));
                };
                CC_SET2DANGLE(script19220(int9));
            };
            break;
        }
    };
    script2994(int0, IF_GETNEXTSUBID(int0), (int18 + 3), (int19 + 3), 0, 0, 36, 36, 0, 0, -1 as graphic);
    switch (int6) {
        case 2: {
            break;
        }
        case 3: {
            if (((varbitplayer_56168 + 1) < DB_GETFIELDCOUNT(varplayer_11902, 1220688))) {
                CC_SETGRAPHIC(34463 as graphic);
            };
            break;
        }
    };
    if (((int0 == comp(1290, 49)) && (int2 == varbitplayer_56168))) {
        script2994(int0, IF_GETNEXTSUBID(int0), int18, int19, 0, 0, int14, int14, 0, 0, 34462 as graphic);
        script3537("You are here");
    };
    CC_CREATE(int1, 5, int2);
    CC_SETSIZE(int14, int14, 0, 0);
    CC_SETPOSITION(int18, int19, 0, 0);
    CC_SETOPCURSOR(1, 201);
    switch (int1) {
        case 84541490: {
            if ((int2 == (varbitplayer_56168 + 1))) {
                CC_SETOPBASE("<col=B8D1D1>Critical path</col>");
                CC_SETOP(1, "Navigate");
                CC_SETONOP(callback(script16367, 3, CC_GETID()));
                script2994(int0, IF_GETNEXTSUBID(int0), (int18 + 5), (int19 + 5), 0, 0, (int14 - 10), (int14 - 10), 0, 0, -1);
                if ((CC_FIND(int1, int2) == 1)) {
                    CC_SETONMOUSEOVER(callback(script5336, int0, (IF_GETNEXTSUBID(int0) - 1), 22112));
                    CC_SETONMOUSELEAVE(callback(script5336, int0, (IF_GETNEXTSUBID(int0) - 1), -1));
                };
            };
            break;
        }
        case 84541493: {
            if (((int2 == varbitplayer_56169) && (varbitplayer_56168 >= dbrow_getfield(varplayer_11902, 1220656, 0)))) {
                CC_SETOPBASE("<col=B8D1D1>Bonus path</col>");
                CC_SETOP(1, "Navigate");
                CC_SETONOP(callback(script16367, 4, CC_GETID()));
                script2994(int0, IF_GETNEXTSUBID(int0), (int18 + 5), (int19 + 5), 0, 0, (int14 - 10), (int14 - 10), 0, 0, -1);
                if ((CC_FIND(int1, int2) == 1)) {
                    CC_SETONMOUSEOVER(callback(script5336, int0, (IF_GETNEXTSUBID(int0) - 1), 22112));
                    CC_SETONMOUSELEAVE(callback(script5336, int0, (IF_GETNEXTSUBID(int0) - 1), -1));
                };
            };
            break;
        }
        case 84541496: {
            if (((int2 == varbitplayer_56170) && (varbitplayer_56168 >= dbrow_getfield(varplayer_11902, 1220672, 0)))) {
                CC_SETOPBASE("<col=B8D1D1>Bonus path</col>");
                CC_SETOP(1, "Navigate");
                CC_SETONOP(callback(script16367, 5, CC_GETID()));
                script2994(int0, IF_GETNEXTSUBID(int0), (int18 + 5), (int19 + 5), 0, 0, (int14 - 10), (int14 - 10), 0, 0, -1);
                if ((CC_FIND(int1, int2) == 1)) {
                    CC_SETONMOUSEOVER(callback(script5336, int0, (IF_GETNEXTSUBID(int0) - 1), 22112));
                    CC_SETONMOUSELEAVE(callback(script5336, int0, (IF_GETNEXTSUBID(int0) - 1), -1));
                };
            };
            break;
        }
    };
    return;
}