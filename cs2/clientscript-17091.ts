//
function script17091(int0: component, int1: component, string0: string): int {
    if ((((int0 == comp(-1, 65535)) || (int1 == comp(-1, 65535))) || (STRING_LENGTH(string0) == 0))) {
        return 0;
    };
    var int2 = script15891(string0, IF_GETWIDTH(int1), IF_GETFONTMETRICS(int0), 0);
    IF_SETTEXT(string0, int0);
    IF_SETSIZE(0, int2, 1, 0, int0);
    IF_SETSIZE(0, (int2 + 5), 1, 1, int1);
    return (int2 + 5);
}