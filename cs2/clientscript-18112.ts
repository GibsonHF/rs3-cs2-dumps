//
function script18112(int0: number, int1: number, int2: number, int3: number): void {
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
        int4 = script15891(string0, CC_GETWIDTH(), 209, 0);
    };
    if ((IF_FIND(comp(403, 27)) == 1)) {
        CC_SETSIZE(CC_GETWIDTH(), MIN(420, (int4 + 42)), 0, 0);
    };
    script16226(26411037, 26411038, 26411039, script17915(int0));
    IF_SETHIDE(false, comp(403, 12));
    return;
}