//
function script18112(int0: dbrow, int1: int, int2: unknown_int, int3: dbrow): void {
    var string0 = script17916(int0);
    string0 = strconcat(string0, `<br><br>You have <col=2EF8FF>${TOSTRING_LOCALISED(int1, 1)}</col> ${script4583(int1, "charge", "charges")} remaining of this buff.`);
    string0 = strconcat(string0, `<br>${script17917(int0)}`);
    var string1 = script18113(int0, int3);
    if ((STRING_LENGTH(string1) > 0)) {
        string0 = strconcat(string0, `<br><br>${string1}`);
    };
    if ((DB_GETFIELDCOUNT(int0, 1036336) > 0)) {
        string0 = strconcat(string0, `<br><br>${script17918(int0)}`);
    };
    string0 = strconcat(string0, "<br><br>");
    string0 = strconcat(string0, "Expires at the end of this pass.");
    var int4 = 0;
    if ((IF_FIND(comp(403, 28)) == 1)) {
        CC_SETTEXT(string0);
        int4 = script15891(string0, CC_GETWIDTH(), 209 as fontmetrics, 0);
    };
    if ((IF_FIND(comp(403, 27)) == 1)) {
        CC_SETSIZE(CC_GETWIDTH(), MIN(420, (int4 + 42)), 0, 0);
    };
    script16226(comp(403, 29), comp(403, 30), comp(403, 31), script17915(int0));
    IF_SETHIDE(false, comp(403, 12));
    return;
}