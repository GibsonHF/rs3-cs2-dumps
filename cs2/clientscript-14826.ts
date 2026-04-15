//
function script14826(int0: component, int1: component, int2: dbrow, int3: int, int4: int, int5: int, int6: int, int7: int): unknown_int {
    var int8 = ((int6 - 64) / 2);
    var int9 = int3;
    var int10 = int4;
    var int11 = ((int5 - 64) - (2 * int8));
    var int12 = dbrow_getfield(int2, 376880, 0);
    var int13 = dbrow_getfield(int12, 352400, 0);
    var int14 = struct_getparam(script9984(int13, 1), 3909);
    var int15 = enum_getvalue(0, 23, 14081 as cs2enum, dbrow_getfield(int2, 376864, 0));
    var int16 = script14586(int2);
    var string0 = script14585(int2);
    script7924(int0, IF_GETNEXTSUBID(int0), 64, 64, (int9 + int8), int10, int15, false, false, false, 0);
    script7924(int0, IF_GETNEXTSUBID(int0), 64, 64, (int9 + int8), int10, int16, false, false, false, 0);
    int9 = (int9 + (64 + (2 * int8)));
    if ((int12 != -1 as dbrow)) {
        script7924(int0, IF_GETNEXTSUBID(int0), 20, 20, int9, (int10 - 2), int14, false, false, false, 0);
        script7801(int0, IF_GETNEXTSUBID(int0), ((int11 - 20) - 2), 16, 0, 0, ((int9 + 20) + 2), int10, 0, 0, dbrow_getfield(int2, 376848, 0), 0, 29 as fontmetrics, 0, 1, enum_getvalue(25, 0, 8584 as cs2enum, 29 as fontmetrics), false);
    } else {
        script7801(int0, IF_GETNEXTSUBID(int0), int11, 16, 0, 0, int9, int10, 0, 0, dbrow_getfield(int2, 376848, 0), 0, 29 as fontmetrics, 0, 1, enum_getvalue(25, 0, 8584 as cs2enum, 29 as fontmetrics), false);
    };
    script7801(int0, IF_GETNEXTSUBID(int0), int11, 28, 0, 0, int9, (int10 + 16), 0, 0, string0, 0, 26 as fontmetrics, 0, 0, enum_getvalue(25, 0, 8584 as cs2enum, 26 as fontmetrics), false);
    int10 = (int10 + (16 + 28));
    var int17 = DB_GETFIELDCOUNT(int2, 376896);
    var int18 = DB_GETFIELDCOUNT(int2, 376912);
    var int19 = -1 as dbrow;
    var int20 = -1 as obj;
    var int21 = 0;
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var int22 = -1 as graphic;
    var int23 = -1;
    while ((++int23 < (int17 + int18))) {
        if ((int23 < int17)) {
            int19 = dbrow_getfield(int2, 376896, int23);
            int20 = script18962(int19);
            string1 = script13044(int19);
            int21 = script13022(int19);
            string4 = "Read";
            int22 = 10322 as graphic;
        } else {
            int19 = dbrow_getfield(int2, 376912, (int23 - int17));
            int20 = script18968(int19);
            string1 = script18967(int19);
            int21 = script18965(int19);
            string4 = "Play";
            int22 = 33821 as graphic;
        };
        string2 = script18977(int19);
        if ((STRING_LENGTH(string2) == 0)) {
            string3 = string1;
        } else {
            string3 = `${string1}<br><br>${string2}`;
        };
        script7924(int0, IF_GETNEXTSUBID(int0), 20, 20, int9, int10, 10321 as graphic, false, false, false, 0);
        CC_SETSIZE(20, 20, 0, 0);
        CC_CREATE[1](int1, 4, (int7 + int23));
        CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
        if ((int21 == 1)) {
            CC_SETOPBASE[1](string1);
            CC_SETGRAPHIC(int22);
            CC_SETONMOUSEREPEAT(callback(script3876, string3, -2147483645, -2147483643));
            CC_SETOP[1](1, string4);
            CC_SETOPCURSOR[1](1, 50);
        } else {
            script3537(string3);
            CC_CLEAROPS[1]();
        };
        int9 = (int9 + (20 + 1));
    };
    return 0;
}