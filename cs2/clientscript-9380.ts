//
function script9380(int0: obj, int1: int, int2: unknown_int): void {
    var int3 = 0;
    var int4 = 0;
    var string0 = "";
    var int5 = 1;
    var int6 = -1;
    var int7 = -1 as struct;
    var string1 = "";
    script10187();
    int7 = item_getparam(int0, 2281);
    string1 = struct_getparam(int7, 2524);
    if ((STRING_LENGTH(string1) < 1)) {
        string1 = OC_NAME(int0);
    };
    CC_SETOPBASE(`${script4033(int0)}${string1}`);
    if ((int2 == 94)) {
        while ((int5 <= 8)) {
            [int3, string0] = script3290(int0, int5, 1, int1);
            if ((int3 == 1)) {
                CC_SETOP(int5, string0);
                int4 = 1;
            };
            int5 = (int5 + 1);
        };
        if ((int4 == 0)) {
            CC_SETOP(1, "Remove");
        };
    } else {
        script2833(int0, 0, -1, int1);
    };
    return;
}