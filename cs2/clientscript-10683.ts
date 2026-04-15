//
function script10683(string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string): void {
    IF_SETHIDE(false, comp(1544, 29));
    var int0 = comp(1544, 2);
    IF_SETTEXT(string0, comp(1544, 1));
    var int1 = 0;
    var int2 = 22;
    var int3 = (IF_GETWIDTH(int0) - 20);
    var int4 = 9661 as graphic;
    [int1, int2] = script176(int0, int1, 10, int2, int3, int4, 8, 8, string2, 29166 as struct);
    int2 = (int2 + 6);
    [int1, int2] = script176(int0, int1, 10, int2, int3, int4, 8, 8, string3, 29166 as struct);
    int2 = (int2 + 6);
    IF_SETSIZE(20, int2, 1, 0, comp(1544, 2));
    IF_SETPOSITION(0, (int2 + 10), 1, 0, comp(1544, 28));
    int0 = comp(1544, 28);
    IF_SETTEXT(string1, comp(1544, 88));
    int1 = 0;
    int2 = 22;
    [int1, int2] = script176(int0, int1, 10, int2, int3, int4, 8, 8, string4, 29166 as struct);
    int2 = (int2 + 6);
    [int1, int2] = script176(int0, int1, 10, int2, int3, int4, 8, 8, string5, 29166 as struct);
    int2 = (int2 + 6);
    [int1, int2] = script176(int0, int1, 10, int2, int3, int4, 8, 8, string6, 29166 as struct);
    int2 = (int2 + 6);
    IF_SETSIZE(20, int2, 1, 0, comp(1544, 28));
    return;
}