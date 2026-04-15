//
function script8018(int0: component, int1: fontmetrics, int2: int, int3: unknown_int, string0: string): void {
    if ((int2 != -1)) {
        IF_SETCOLOUR(int2, int0);
    } else {
        var int2 = IF_GETCOLOUR(int0);
    };
    if ((STRING_LENGTH(string0) != 0)) {
        IF_SETTEXT(string0, int0);
    };
    if ((int3 == 1)) {
        stack(PUSH_CONSTANT_INT[16]("<u=", int2));
        var string0 = `${stack()}${inttostring()}>${IF_GETTEXT(int0)}</u>`;
        IF_SETTEXT(string0, int0);
    };
    if ((int1 != -1 as fontmetrics)) {
        IF_SETTEXTFONT(int1, int0);
    };
    return;
}