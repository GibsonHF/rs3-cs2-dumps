//
function script4183(int0: int): void {
    var string0 = enum_getvalue(0, 36, 7158 as cs2enum, int0);
    var string1 = IF_GETTEXT(comp(1377, 117));
    if ((strcmp(string0, string1) == 0)) {
        IF_SETTEXT("Island Information", comp(1377, 117));
        IF_SETTEXT("", comp(1377, 118));
    };
    var int1 = enum_getvalue(0, 0, 6178 as cs2enum, int0);
    script2853(int1);
    return;
}