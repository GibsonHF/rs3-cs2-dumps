//
function script17535(int0: dbrow): [unknown_int, string] {
    var int1 = 1;
    var string0 = "";
    var int2 = DB_GETFIELDCOUNT(int0, 962640);
    if ((int2 == 0)) {
        return [int1, string0];
    };
    var int3 = -1;
    var int4 = 0;
    var int5 = -1 as stat;
    while ((++int3 < int2)) {
        [int5, int4] = script17506(int0, int3);
        if ((STAT(int5) < int4)) {
            string0 = strconcat(string0, `<col=EB2F2F>You need level ${inttostring(int4, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} for this ritual.<br>`);
            int1 = 0;
        };
    };
    return [int1, string0];
}