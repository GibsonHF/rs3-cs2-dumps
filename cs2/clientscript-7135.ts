//
function script7135(int0: dbrow, int1: int): string {
    var string0 = "";
    var int2 = -1 as dbrow;
    var int3 = 0;
    var int4 = script6431();
    [int2, int3] = dbrow_getfield(int0, 213008, int1);
    if (((int2 != -1 as dbrow) && (int3 > 0))) {
        string0 = strconcat(string0, `Also requires: ${script7020(int2, int3)}${dbrow_getfield(int2, 208912, 0)} (Tier ${inttostring(int3, 10)})</col>`);
    };
    [int2, int3] = dbrow_getfield(int0, 213024, int1);
    if (((int2 != -1 as dbrow) && (int3 > 0))) {
        string0 = strconcat(string0, `, ${script7020(int2, int3)}${dbrow_getfield(int2, 208912, 0)} (Tier ${inttostring(int3, 10)})</col>`);
    };
    [int2, int3] = dbrow_getfield(int0, 213040, int1);
    if (((int2 != -1 as dbrow) && (int3 > 0))) {
        string0 = strconcat(string0, `, ${script7020(int2, int3)}${dbrow_getfield(int2, 208912, 0)} (Tier ${inttostring(int3, 10)})</col>`);
    };
    [int2, int3] = dbrow_getfield(int0, 213056, int1);
    if (((int2 != -1 as dbrow) && (int3 > 0))) {
        string0 = strconcat(string0, `, ${script7020(int2, int3)}${dbrow_getfield(int2, 208912, 0)} (Tier ${inttostring(int3, 10)})</col>`);
    };
    [int2, int3] = dbrow_getfield(int0, 213072, int1);
    if (((int2 != -1 as dbrow) && (int3 > 0))) {
        string0 = strconcat(string0, `, ${script7020(int2, int3)}${dbrow_getfield(int2, 208912, 0)} (Tier ${inttostring(int3, 10)})</col>`);
    };
    var int5 = -1 as stat;
    var int6 = 0;
    if ((STRING_LENGTH(string0) > 1)) {
        if ((int4 == true)) {
            string0 = strconcat(string0, "<br>");
        } else {
            string0 = strconcat(string0, "<br><br>");
        };
    };
    [int5, int6] = dbrow_getfield(int0, 213088, int1);
    if (((int5 != -1 as stat) && (int6 > 0))) {
        string0 = strconcat(string0, `Level requirements: ${script7021(int5, int6)}${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)}</col>`);
    };
    [int5, int6] = dbrow_getfield(int0, 213104, int1);
    if (((int5 != -1 as stat) && (int6 > 0))) {
        string0 = strconcat(string0, `, ${script7021(int5, int6)}${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)}</col>`);
    };
    [int5, int6] = dbrow_getfield(int0, 213120, int1);
    if (((int5 != -1 as stat) && (int6 > 0))) {
        string0 = strconcat(string0, `, ${script7021(int5, int6)}${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)}</col>`);
    };
    [int5, int6] = dbrow_getfield(int0, 213136, int1);
    if (((int5 != -1 as stat) && (int6 > 0))) {
        string0 = strconcat(string0, `, ${script7021(int5, int6)}${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)}</col>`);
    };
    [int5, int6] = dbrow_getfield(int0, 213152, int1);
    if (((int5 != -1 as stat) && (int6 > 0))) {
        string0 = strconcat(string0, `, ${script7021(int5, int6)}${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)}</col>`);
    };
    var int7 = -1 as obj;
    switch (int1) {
        case 0: {
            int7 = dbrow_getfield(int0, 213168, 0);
            break;
        }
        case 1: {
            int7 = dbrow_getfield(int0, 213184, 0);
            break;
        }
        case 2: {
            int7 = dbrow_getfield(int0, 213200, 0);
            break;
        }
    };
    if ((int7 != -1 as obj)) {
        if ((STRING_LENGTH(string0) > 1)) {
            if ((int4 == true)) {
                string0 = strconcat(string0, "<br>");
            } else {
                string0 = strconcat(string0, "<br><br>");
            };
        };
        string0 = strconcat(string0, `Item requirement: ${script7030(int7)}${OC_NAME(int7)}`);
    };
    return string0;
}