//
function script20209(int0: number, string0: string): void {
    var int1 = 16777215;
    var string1 = "Leagues: CATALYST";
    stack(PUSH_CONSTANT_INT[16]("<col=", int1));
    stack(inttostring());
    stack(">");
    stack(string1);
    stack(PUSH_CONSTANT_INT[16]("</col> is an alternative game mode for <col=", int1));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">RuneScape</col>, available from <col=", int1));
    stack(inttostring());
    stack(">");
    stack(script3381(8601));
    stack(PUSH_CONSTANT_INT[16]("</col> to <col=", int1));
    var string2 = `${stack()}${inttostring()}>${script3381(8657)}</col>.`;
    if ((STRING_LENGTH(string0) > 0)) {
        string2 = `${string2}<br><br>${string0}`;
    };
    var int2 = IF_GETWIDTH(91815948);
    var int3 = (script15891(string2, int2, IF_GETFONTMETRICS(91815949), 0) + 4);
    IF_SETTEXT(string2, 91815949);
    IF_SETSIZE(int2, int3, 0, 0, 91815948);
    script2731(91815949, -1, 3);
    if ((int0 == 1)) {
        int3 = (int3 + SCALE(IF_GETWIDTH(91815944), 500, 456));
        IF_SETPOSITION(0, int3, 1, 0, 91815950);
        IF_SETSIZE(0, int3, 1, 1, 91815950);
    };
    return;
}