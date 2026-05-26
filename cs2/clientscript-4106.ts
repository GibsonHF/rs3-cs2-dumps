//
function script4106(int0: number, string0: string): number {
    return ((IF_GETWIDTH(int0) + MAX(STRINGWIDTH(string0, 26 as fontmetrics), STRINGWIDTH(IF_GETTEXT(int0), 26 as fontmetrics))) / 2);
}