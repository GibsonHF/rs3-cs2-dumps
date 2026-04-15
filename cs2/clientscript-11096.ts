//
function script11096(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: component): void {
    var int7 = script3609();
    if ((int7 == -1 as dbrow)) {
        return;
    };
    var int8 = 0;
    var int9 = DB_GETFIELDCOUNT(int7, 299328);
    var int10 = 0;
    var int11 = 0;
    var int12 = -1 as graphic;
    var int13 = -1 as graphic;
    var int14 = -1 as obj;
    var int15 = -1 as obj;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = -1 as obj;
    var int22 = -1 as struct;
    var int23 = varplayer_9062;
    if ((AND(int23, 170) == 0)) {
        int23 = (int23 * 3);
    };
    int8 = int1;
    while (((int8 < int9) && (int16 <= int0))) {
        [int16, int17, int21, int22, int18] = dbrow_getfield(int7, 299328, int8);
        if (((AND(int17, 85) != 0) && (AND(int17, varplayer_9062) != 0))) {
            if ((int4 > 0)) {
                if ((int10 == int2)) {
                    int12 = script3638(int22, int21, 0);
                    int14 = int21;
                    int19 = int18;
                };
                int10 = (int10 + 1);
            };
        } else if (((AND(int17, int23) != 0) && (int5 > 0))) {
            if ((int11 == int3)) {
                int13 = script3638(int22, int21, 0);
                int15 = int21;
                int20 = int18;
            };
            int11 = (int11 + 1);
        };
        int8 = (int8 + 1);
    };
    if ((int12 != -1 as graphic)) {
        int14 = -1 as obj;
    } else {
        int12 = 8933 as graphic;
    };
    if ((int13 != -1 as graphic)) {
        int15 = -1 as obj;
    } else {
        int13 = 8933 as graphic;
    };
    if ((CC_FIND(int6, ((int0 * 11) + 1)) == 1)) {
        CC_SETGRAPHIC(int12);
    };
    if ((CC_FIND(int6, ((int0 * 11) + 2)) == 1)) {
        CC_SETGRAPHIC(int13);
    };
    if ((CC_FIND(int6, ((int0 * 11) + 4)) == 1)) {
        CC_SETOBJECT(int14, -1);
    };
    if ((CC_FIND(int6, ((int0 * 11) + 5)) == 1)) {
        CC_SETOBJECT(int15, -1);
    };
    if ((CC_FIND(int6, ((int0 * 11) + 9)) == 1)) {
        CC_SETTEXT(`${inttostring(int19, 10)}x`);
    };
    if ((CC_FIND(int6, ((int0 * 11) + 10)) == 1)) {
        CC_SETTEXT(`${inttostring(int20, 10)}x`);
    };
    if (((int2 + 1) == int4)) {
        var int2 = 0;
    } else {
        int2 = (int2 + 1);
    };
    if (((int3 + 1) == int5)) {
        var int3 = 0;
    } else {
        int3 = (int3 + 1);
    };
    if ((CC_FIND(int6, (int0 * 11)) == 1)) {
        if ((int0 >= varplayer_9078)) {
            CC_SETONTIMER(callback(script9864, int0, int1, int2, int3, int4, int5, int6));
        } else {
            CC_SETONTIMER(callback());
        };
    };
    return;
}