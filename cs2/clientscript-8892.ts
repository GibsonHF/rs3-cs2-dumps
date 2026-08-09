//
function script8892(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): [number, number] {
    var int6 = IF_GETWIDTH(int0);
    var int7 = script8894(int1);
    var string0 = "";
    var string1 = `${enum_getvalue(17, 36, 680 as cs2enum, int1)} XP`;
    if ((int2 != -1)) {
        string0 = `${inttostring(int2, 10)} XP`;
        string1 = `${inttostring(int2, 10)} ${enum_getvalue(17, 36, 680, int1)} XP`;
    };
    if (((int3 + 45) > int6)) {
        var int3 = int5;
        if ((strcmp(string0, "") != 0)) {
            var int4 = (int4 + 55);
        } else {
            int4 = (int4 + 40);
        };
    };
    script10456(int0, -1, int7, string1, int3, int4, 40);
    if ((strcmp(string0, "") != 0)) {
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETSIZE(40, 15, 0, 0);
        CC_SETPOSITION(int3, (int4 + 40), 0, 0);
        CC_SETTEXT(string0);
        CC_SETMAXLINES(1);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(1, 0, 0);
    };
    int3 = (int3 + 44);
    return [int3, int4];
}