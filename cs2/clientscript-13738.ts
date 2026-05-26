//
function script13738(string0: string, string1: string, string2: string, string3: string, string4: string, string5: string): void {
    IF_SETHIDE(0, 125370406);
    var int0 = 125370379;
    IF_SETTEXT(string0, 125370378);
    var int1 = 0;
    var int2 = 32;
    var int3 = (IF_GETWIDTH(int0) - 20);
    var int4 = 9661;
    [int1, int2] = script176(int0, int1, 10, int2, int3, int4, 8, 8, string2, 29166);
    int2 = (int2 + 16);
    [int1, int2] = script176(int0, int1, 10, int2, int3, int4, 8, 8, string3, 29166);
    int2 = (int2 + 16);
    IF_SETSIZE(20, int2, 1, 0, 125370379);
    IF_SETPOSITION(0, (int2 + 10), 1, 0, 125370405);
    int0 = 125370405;
    IF_SETTEXT(string1, 125370465);
    int1 = 0;
    int2 = 32;
    [int1, int2] = script176(int0, int1, 10, int2, int3, int4, 8, 8, string4, 29166);
    int2 = (int2 + 16);
    [int1, int2] = script176(int0, int1, 10, int2, int3, int4, 8, 8, string5, 29166);
    int2 = (int2 + 16);
    IF_SETSIZE(20, int2, 1, 0, 125370405);
    return;
}