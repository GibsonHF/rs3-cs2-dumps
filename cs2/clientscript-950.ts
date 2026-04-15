//
function script950(int0: struct): string {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = -1 as stat;
    var int6 = ENUM_GETOUTPUTCOUNT(681 as cs2enum);
    while ((++int1 <= int6)) {
        int5 = enum_getvalue(0, 17, 681 as cs2enum, int1);
        if ((script951(int0, int5) == 1)) {
            int4 = script952(int0, int5);
            if ((int4 > 0)) {
                string2 = enum_getvalue(17, 36, 680 as cs2enum, int5);
                if ((int2 > 0)) {
                    string0 = strconcat(string0, "<br>");
                };
                string0 = strconcat(string0, `<col=00ff00>${string2} +${inttostring(int4, 10)}`);
                int2 = (int2 + 1);
            } else if ((int4 < 0)) {
                string2 = enum_getvalue(0, 36, 108 as cs2enum, int1);
                if ((int3 > 0)) {
                    string1 = strconcat(string1, "<br>");
                };
                string1 = strconcat(string1, `<col=ff0000>${string2} ${inttostring(int4, 10)}`);
                int3 = (int3 + 1);
            };
        };
        int4 = 0;
        int5 = -1 as stat;
    };
    if ((int2 > 1)) {
        string0 = strconcat("Temporarily increases:<br>", string0);
    } else if ((int2 > 0)) {
        string0 = strconcat("Temporarily increases ", string0);
    };
    if ((int3 > 1)) {
        string1 = strconcat("Temporarily reduces:<br>", string1);
    } else if ((int3 > 0)) {
        string1 = strconcat("Temporarily reduces ", string1);
    };
    var string3 = "";
    if ((STRING_LENGTH(string0) > 0)) {
        string3 = string0;
    };
    if ((STRING_LENGTH(string1) > 0)) {
        if ((STRING_LENGTH(string0) > 0)) {
            string3 = strconcat(string3, "<br>");
        };
        string3 = strconcat(string3, string1);
    };
    return string3;
}