//
function script4183(int0: number): void {
    var string0 = enum_getvalue(0, 36, 7158 as cs2enum, int0);
    var string1 = IF_GETTEXT(90243189);
    if ((strcmp(string0, string1) == 0)) {
        IF_SETTEXT("Island Information", 90243189);
        IF_SETTEXT("", 90243190);
    };
    var int1 = enum_getvalue(0, 0, 6178 as cs2enum, int0);
    script2853(int1);
    return;
}