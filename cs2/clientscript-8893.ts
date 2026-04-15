//
function script8893(int0: component, int1: obj, int2: int, int3: int, int4: int, int5: int): [int, int] {
    var int6 = IF_GETWIDTH(int0);
    var string0 = inttostring(int2, 10);
    var string1 = OC_NAME(int1);
    switch (int1) {
        case 996:
        case 997:
        case 998:
        case 999:
        case 1000:
        case 1001:
        case 1002:
        case 1003:
        case 1004: {
            string1 = "Coins";
            break;
        }
        case 6530:
        case 6531:
        case 6532:
        case 6533:
        case 6534: {
            string1 = "Tokkul";
            break;
        }
    };
    if ((int1 == 24154 as obj)) {
        string0 = `${inttostring(int2, 10)} keys`;
        string1 = "Treasure Hunter key";
    };
    if ((int2 > 1)) {
        string1 = strconcat(string1, ` (${inttostring(int2, 10)})`);
    };
    if (((int3 + 45) > int6)) {
        var int3 = int5;
        if ((strcmp(string0, "") != 0)) {
            var int4 = (int4 + 55);
        } else {
            int4 = (int4 + 40);
        };
    };
    script10456(int0, int1, -1 as graphic, string1, int3, int4, 40);
    if ((int2 != -1)) {
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETSIZE(40, 15, 0, 0);
        CC_SETPOSITION(int3, (int4 + 40), 0, 0);
        CC_SETTEXT(string0);
        CC_SETMAXLINES(1);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(1, 0, 0);
    };
    return [++int3, int4];
}