//
function script20209(int0: number, string0: string): void {
    var int1 = 16777215;
    var string1 = script20128();
    var string2 = `${inttostring(PUSH_CONSTANT_INT[16]("<col=", int1))}>${string1}${inttostring(PUSH_CONSTANT_INT[16]("</col> is an alternative game mode for <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">RuneScape</col>, available from <col=", int1))}>${script3381(8930)}${inttostring(PUSH_CONSTANT_INT[16]("</col> to <col=", int1))}>${script3381(8972)}</col>.`;
    if ((STRING_LENGTH(string0) > 0)) {
        string2 = `${string2}<br><br>${string0}`;
    };
    var int2 = IF_GETWIDTH(comp(1401, 12));
    var int3 = (script15891(string2, (int2 - 16), IF_GETFONTMETRICS(comp(1401, 13)), 0) + 4);
    IF_SETTEXT(string2, comp(1401, 13));
    IF_SETSIZE(int2, int3, 0, 0, comp(1401, 12));
    script2731(91815949, -1, 3);
    var int4 = 0;
    var int5 = 0;
    [int4, int5] = IF_GETGRAPHICDIMENSIONS(comp(1401, 10));
    if ((int0 == 1)) {
        int3 = (int3 + SCALE(IF_GETWIDTH(comp(1401, 8)), int4, int5));
        IF_SETPOSITION(0, int3, 1, 0, comp(1401, 14));
        IF_SETSIZE(0, int3, 1, 1, comp(1401, 14));
    };
    return;
}