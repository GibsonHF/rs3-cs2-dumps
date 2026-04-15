//
function script2579(int0: obj, int1: int, int2: struct, int3: component, int4: component, int5: int): int {
    var int6 = 0;
    int6 = script7960(int0, 14 as stat);
    var int7 = item_getparam(int0, 7796);
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    if ((int7 != -1 as dbrow)) {
        int8 = dbrow_getfield(int7, 147472, 0);
        int9 = (int8 + dbrow_getfield(int7, 147488, 0));
        int10 = dbrow_getfield(int7, 147456, 0);
        int11 = item_getparam(int0, 7804);
        if ((int11 > 0)) {
            int8 = (int8 + int11);
            int9 = (int9 + int11);
        };
    };
    var int12 = script14090(1265 as obj);
    var int13 = INV_GETOBJ(94 as inv, 3);
    if ((((int13 != -1 as obj) && (int12 != -1 as obj)) && (script7960(int13, 14 as stat) > script7960(int12, 14 as stat)))) {
        int12 = int13;
    };
    var int14 = script7960(int12, 14 as stat);
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    if (((int12 != -1 as obj) && (item_getparam(int12, 7796) != -1 as dbrow))) {
        int15 = dbrow_getfield(item_getparam(int12, 7796), 147472, 0);
        int16 = (int15 + dbrow_getfield(item_getparam(int12, 7796), 147488, 0));
        int17 = dbrow_getfield(item_getparam(int12, 7796), 147456, 0);
        int18 = item_getparam(int12, 7804);
        if ((int18 > 0)) {
            int15 = (int15 + int18);
            int16 = (int16 + int18);
        };
    };
    var string0 = "";
    if ((int12 == -1 as obj)) {
        string0 = "<col=00ff00>";
    } else if ((int6 > int14)) {
        string0 = "<col=00ff00>";
    } else if ((int6 < int14)) {
        string0 = "<col=ff0000>";
    } else {
        string0 = GET_COL_TAG(int1);
    };
    var int5 = script7235(`Level : ${string0}${inttostring(int6, 10)}</col>`, "", int2, int3, int4, int5);
    var string1 = "";
    if ((int7 != -1 as dbrow)) {
        string1 = "Mining damage : ";
        if ((int12 == -1 as obj)) {
            string0 = "<col=00ff00>";
        } else if ((int8 > int15)) {
            string0 = "<col=00ff00>";
        } else if ((int8 < int15)) {
            string0 = "<col=ff0000>";
        } else {
            string0 = GET_COL_TAG(int1);
        };
        string1 = strconcat(string1, `${string0}${inttostring(int8, 10)}</col> - `);
        if ((int12 == -1 as obj)) {
            string0 = "<col=00ff00>";
        } else if ((int9 > int16)) {
            string0 = "<col=00ff00>";
        } else if ((int9 < int16)) {
            string0 = "<col=ff0000>";
        } else {
            string0 = GET_COL_TAG(int1);
        };
        string1 = strconcat(string1, `${string0}${inttostring(int9, 10)}</col>`);
        int5 = script7235(string1, "", int2, int3, int4, int5);
        if ((int12 == -1 as obj)) {
            string0 = "<col=00ff00>";
        } else if ((int10 > int17)) {
            string0 = "<col=00ff00>";
        } else if ((int10 < int17)) {
            string0 = "<col=ff0000>";
        } else {
            string0 = GET_COL_TAG(int1);
        };
        int5 = script7235(`Rock penetration : ${string0}${inttostring(int10, 10)}</col>`, "", int2, int3, int4, int5);
    };
    return int5;
}