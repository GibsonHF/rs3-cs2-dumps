//
function script8203(int0: component, int1: component, int2: int, int3: int): void {
    var int4 = comp(-1, 65535);
    if (((int0 == comp(-1, 65535)) || (int1 == comp(-1, 65535)))) {
        if (((int2 == -1) || (int3 == -1))) {
            return;
        };
        var [int0, int4, int1] = script8215(int2, int3);
    };
    var string0 = IF_GETTEXT(int1);
    var string1 = "";
    if (((int2 != -1) && (int3 != -1))) {
        string0 = script8204(int2, int3);
        script8206(int2, int3, 6);
    };
    int4 = IF_GETLAYER(int0);
    if ((int4 != comp(-1, 65535))) {
        IF_SETPOSITION(5, 0, 2, 1, int4);
        IF_SETSIZE(155, 24, 0, 0, int4);
    };
    IF_SETPOSITION(5, 0, 0, 1, int1);
    IF_SETSIZE(170, 24, 0, 0, int1);
    IF_SETTEXT(string0, int1);
    IF_SETTEXTALIGN(0, 1, 12, int1);
    IF_SETCOLOUR(script10495(3), int1);
    return;
}