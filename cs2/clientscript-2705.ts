//
function script2705(): unknown_int {
    var int0 = CHAT_GETNEXTUID(MAX((varclient_3937 - 1), 0));
    if ((int0 == -1)) {
        int0 = CHAT_LASTUID();
        if ((int0 == -1)) {
            return 0;
        };
    };
    var int1 = 0;
    define_array(147);
    var int2 = 0;
    var int3 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var int4 = -1 as chatphrase;
    var string5 = "";
    var int5 = -1;
    var int6 = script1960();
    var int7 = -1;
    stack(unk11059(int0));
    [int2, string0, int3, string1, string2, string3, string4, int4, string5, int5, int7] = stack();
    while ((int0 <= int6)) {
        if ((((int2 != -1) && (script8507(18, int2, 0, int7) == 1)) && (script8508(18, int2, int3, string2, int5, int7) == 1))) {
            return 1;
        };
        int0 = CHAT_GETNEXTUID(int0);
        if ((int0 != -1)) {
            stack(unk11059(int0));
            [int2, string0, int3, string1, string2, string3, string4, int4, string5, int5, int7] = stack();
        } else {
            return 0;
        };
    };
    return 0;
}