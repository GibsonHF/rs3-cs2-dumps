//
function script14831(int0: dbrow): void {
    var int1 = -1 as graphic;
    var int2 = -1 as obj;
    var string0 = "???";
    var string1 = "No information available.";
    var string2 = "Unknown";
    var string3 = "Unknown";
    if ((int0 != -1 as dbrow)) {
        int1 = dbrow_getfield(int0, 364576, 0);
        int2 = dbrow_getfield(int0, 364640, 0);
        string0 = OC_NAME(int2);
        if (((script14500(int2) > 0) && (STRING_LENGTH(dbrow_getfield(int0, 364592, 0)) > 0))) {
            string1 = dbrow_getfield(int0, 364592, 0);
        };
        string2 = script14912(int0);
        string3 = script14913(int0);
    };
    stack(int1);
    stack(44892244);
    IF_SETGRAPHIC();
    IF_SETTEXT(string0, 44892245);
    IF_SETTEXT(string1, 44892246);
    IF_SETTEXT(string2, 44892248);
    IF_SETTEXT(string3, 44892253);
    return;
}