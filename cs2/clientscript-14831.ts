//
function script14831(int0: number): void {
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
    IF_SETGRAPHIC(int1, comp(685, 84));
    IF_SETTEXT(string0, comp(685, 85));
    IF_SETTEXT(string1, comp(685, 86));
    IF_SETTEXT(string2, comp(685, 88));
    IF_SETTEXT(string3, comp(685, 93));
    return;
}