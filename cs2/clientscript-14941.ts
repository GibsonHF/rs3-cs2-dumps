//
function script14941(int0: int, int1: int, int2: int): [int, int] {
    var int3 = 0;
    var int4 = 0;
    var string0 = "";
    var int5 = 0;
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var int6 = -1 as chatphrase;
    var string4 = "";
    var int7 = 0;
    var int8 = -1;
    var string5 = "";
    var int9 = 0;
    var int10 = -1;
    if ((int2 == -1)) {
        var int2 = 0;
    } else {
        int2 = CHAT_GETNEXTUID(int2);
    };
    stack(unk11059(int2));
    [int7, string0, int5, string1, string5, string2, string3, int6, string4, int8, int10] = stack();
    while ((int2 != -1)) {
        int9 = script5763(int1, int7, int5, string5, int8, int10);
        if ((script14942(int0, int7) == 1)) {
            if ((script5763(int0, int7, int5, string5, int8, int10) == 1)) {
                if (((int9 == 1) && ((script5762(int1) >= int2) || (script8314(int1) == int1)))) {
                } else {
                    int3 = (int3 + 1);
                };
            };
            if ((int9 == 1)) {
                int4 = (int4 + 1);
            };
        };
        int2 = CHAT_GETNEXTUID(int2);
        stack(unk11059(int2));
        [int7, string0, int5, string1, string5, string2, string3, int6, string4, int8, int10] = stack();
    };
    return [int3, int4];
}