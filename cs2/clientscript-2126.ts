//
function script2126(int0: quest): string {
    var string0 = "";
    var int1 = 0;
    [int1, string0] = script2127(int0);
    var string1 = "";
    var int2 = 0;
    [int2, string1] = script2132(int0);
    var string2 = "";
    var int3 = 0;
    [int3, string2] = script2129(int0);
    var string3 = "";
    var int4 = 0;
    [int4, string3] = script2130(int0);
    var string4 = "";
    var int5 = 0;
    [int5, string4] = script2131(int0);
    var string5 = "";
    var int6 = 0;
    if ((quest_getparam(int0, 7862) == true)) {
        [int6, string5] = script7087(int0);
    };
    var string6 = "";
    var int7 = 0;
    [int7, string6] = script2128(int0);
    var string7 = "None.";
    if ((((((((int1 == 1) || (int7 == 1)) || (int3 == 1)) || (int4 == 1)) || (int6 == 1)) || (int5 == 1)) || (int2 == 1))) {
        string7 = `${string0}${string1}${string2}${string3}${string4}${string5}${string6}`;
    };
    return string7;
}