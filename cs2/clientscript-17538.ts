//
function script17538(int0: dbrow): [unknown_int, string] {
    var int1 = 1;
    var string0 = "";
    var string1 = "";
    var int2 = DB_GETFIELDCOUNT(int0, 962704);
    if ((int2 == 0)) {
        return [int1, string0];
    };
    var int3 = -1;
    var int4 = -1 as quest;
    while ((++int3 < int2)) {
        int4 = script17509(int0, int3);
        if ((script2193(int4) != 2)) {
            string1 = script2103(int4);
            string0 = strconcat(string0, `<col=EB2F2F>You need to complete ${string1} for this ritual.<br>`);
            int1 = 0;
        };
    };
    return [int1, string0];
}