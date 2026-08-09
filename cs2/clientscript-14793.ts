//
function script14793(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): number {
    var int6 = 0;
    int6 = script7960(int0, 27);
    var int7 = item_getparam(int0, 6663);
    var int8 = 0;
    var int9 = 0;
    if ((int7 != -1 as dbrow)) {
        int8 = script14579(int7);
        int9 = dbrow_getfield(int7, 389136, 0);
    };
    var int10 = script14090(49539);
    var int11 = INV_GETOBJ(94 as inv, 3);
    if ((((int11 != -1 as obj) && (int10 != -1 as obj)) && (script7960(int11, 27) > script7960(int10, 27)))) {
        int10 = int11;
    };
    var int12 = script7960(int10, 27);
    var int13 = -1 as dbrow;
    var int14 = 0;
    var int15 = 0;
    if ((int10 != -1 as obj)) {
        int13 = item_getparam(int10, 6663);
        if ((int13 != -1 as dbrow)) {
            int14 = script14579(int13);
            int15 = dbrow_getfield(item_getparam(int10, 6663), 389136, 0);
        };
    };
    var string0 = "";
    if ((int10 == -1 as obj)) {
        string0 = "<col=FF00>";
    } else if ((int6 > int12)) {
        string0 = "<col=FF00>";
    } else if ((int6 < int12)) {
        string0 = "<col=FF0000>";
    } else {
        string0 = GET_COL_TAG(int1);
    };
    if ((int0 == 59630)) {
    } else {
        var int5 = script7235(`Level : ${string0}${inttostring(int6, 10)}</col>`, "", int2, int3, int4, int5);
    };
    var string1 = "";
    if ((int7 != -1 as dbrow)) {
        if ((int10 == -1 as obj)) {
            string0 = "<col=FF00>";
        } else if ((int8 > int14)) {
            string0 = "<col=FF00>";
        } else if ((int8 < int14)) {
            string0 = "<col=FF0000>";
        } else {
            string0 = GET_COL_TAG(int1);
        };
        int5 = script7235(`Precision : ${string0}${inttostring(int8, 10)}</col>`, "", int2, int3, int4, int5);
        if ((int10 == -1 as obj)) {
            string0 = "<col=FF00>";
        } else if ((int9 > int15)) {
            string0 = "<col=FF00>";
        } else if ((int9 < int15)) {
            string0 = "<col=FF0000>";
        } else {
            string0 = GET_COL_TAG(int1);
        };
        int5 = script7235(`Focus: ${string0}${inttostring(int9, 10)}</col>`, "", int2, int3, int4, int5);
    };
    return int5;
}