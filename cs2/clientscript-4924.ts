//
function script4924(int0: struct, int1: unknown_int): string {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var string3 = "";
    var int6 = -1 as stat;
    var int7 = ENUM_GETOUTPUTCOUNT(681 as cs2enum);
    while ((++int2 <= int7)) {
        int6 = enum_getvalue(0, 17, 681 as cs2enum, int2);
        if ((script951(int0, int6) == 0)) {
            if ((int1 == 1)) {
                int5 = script5003(int0, int6);
                if ((int5 > 0)) {
                    string2 = enum_getvalue(17, 36, 680 as cs2enum, int6);
                    if ((int3 > 0)) {
                        string0 = strconcat(string0, "<br>");
                    };
                    string0 = strconcat(string0, `<col=00ff00>${string2} +${inttostring(int5, 10)}`);
                    int3 = (int3 + 1);
                } else if ((int5 < 0)) {
                    string2 = enum_getvalue(0, 36, 108 as cs2enum, int2);
                    if ((int4 > 0)) {
                        string1 = strconcat(string1, "<br>");
                    };
                    string1 = strconcat(string1, `<col=ff0000>${string2} ${inttostring(int5, 10)}`);
                    int4 = (int4 + 1);
                };
            } else {
                [int5, string3] = script17272(int0, int6);
                if ((int5 > 0)) {
                    string2 = enum_getvalue(17, 36, 680 as cs2enum, int6);
                    if ((int3 > 0)) {
                        string0 = strconcat(string0, "<br>");
                    };
                    string0 = strconcat(string0, `<col=00ff00>${string2} by ${string3}`);
                    int3 = (int3 + 1);
                } else if ((int5 < 0)) {
                    string2 = enum_getvalue(0, 36, 108 as cs2enum, int2);
                    if ((int4 > 0)) {
                        string1 = strconcat(string1, "<br>");
                    };
                    string1 = strconcat(string1, `<col=ff0000>${string2} by ${string3}`);
                    int4 = (int4 + 1);
                };
            };
        };
        int5 = 0;
        string3 = "";
        int6 = -1 as stat;
    };
    if ((int3 > 1)) {
        string0 = strconcat("Temporarily increases:<br>", string0);
    } else if ((int3 > 0)) {
        string0 = strconcat("Temporarily increases ", string0);
    };
    if ((int4 > 1)) {
        string1 = strconcat("Temporarily reduces:<br>", string1);
    } else if ((int4 > 0)) {
        string1 = strconcat("Temporarily reduces ", string1);
    };
    var string4 = "";
    if ((STRING_LENGTH(string0) > 0)) {
        string4 = string0;
    };
    if ((STRING_LENGTH(string1) > 0)) {
        if ((STRING_LENGTH(string0) > 0)) {
            string4 = strconcat(string4, "<br>");
        };
        string4 = strconcat(string4, string1);
    };
    return string4;
}