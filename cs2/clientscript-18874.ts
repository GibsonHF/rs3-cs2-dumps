//
function script18874(int0: dbrow, string0: string): string {
    var int1 = script18920(int0, 4);
    if ((STRING_LENGTH(string0) > 0)) {
        var string0 = strconcat(string0, "<br>");
    };
    string0 = strconcat(string0, `Event Time: ${script18847(int0, -1, -1)}<br>`);
    var int2 = script18920(int0, 17);
    var string1 = script18921(int0, 18);
    if ((STRING_LENGTH(string1) > 0)) {
        string0 = strconcat(string0, `Location: ${string1}<br>`);
    } else if ((int2 > 0)) {
        string0 = strconcat(string0, `Location: ${enum_getvalue(0, 36, 11811 as cs2enum, int2)}<br>`);
    } else if ((int1 > 0)) {
        string0 = strconcat(string0, `Location: ${enum_getvalue(0, 36, 11811 as cs2enum, int1)}<br>`);
    };
    var int3 = script18920(int0, 19);
    if ((int3 > 0)) {
        string0 = strconcat(string0, `World: ${inttostring(int3, 10)}<br>`);
    };
    var string2 = script18921(int0, 20);
    if ((STRING_LENGTH(string2) > 0)) {
        string0 = strconcat(string0, `Host: ${string2}<br>`);
    };
    var string3 = script18921(int0, 21);
    if ((STRING_LENGTH(string3) > 0)) {
        string0 = strconcat(string0, `Friends Chat: ${string3}<br>`);
    };
    return string0;
}