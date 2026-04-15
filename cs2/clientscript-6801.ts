//
function script6801(int0: component, int1: component, int2: component, int3: component): void {
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    var int4 = 0;
    var int5 = 1;
    var int6 = 120;
    var string0 = "";
    IF_SETTEXT(`${inttostring(script2073(), 10)}/${inttostring(script2072(), 10)}`, comp(176, 44));
    IF_SETTEXT(`Max resources: ${TOSTRING_LOCALISED(script6641(), 1)}`, comp(176, 38));
    while ((int5 <= 6)) {
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETSIZE(100, 24, 0, 0);
        CC_SETPOSITION(int6, 10, 0, 0);
        CC_SETTEXTFONT(28 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXT(`${inttostring(((script5844(int5) * 10) * (60 / 10)), 10)}/hr`);
        script2733(int0, CC_GETID(), 3);
        string0 = "The amount of resources you will generate per hour";
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
        CC_SETGRAPHIC(967);
        CC_SETSIZE(54, 54, 0, 0);
        CC_SETPOSITION((int6 + 23), 34, 0, 0);
        int4 = IF_GETNEXTSUBID(int3);
        CC_CREATE(int2, 4, int4);
        CC_SETSIZE(54, 54, 0, 0);
        CC_SETPOSITION((int6 + 23), 34, 0, 0);
        CC_SETOP(1, "Assign workers");
        CC_CREATE(int3, 4, int4);
        CC_SETSIZE(100, 24, 0, 0);
        CC_SETPOSITION(int6, 67, 0, 0);
        CC_SETTEXTFONT(31);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXT(inttostring(script5844(int5), 10));
        CC_SETCOLOUR(16777215);
        script11605(int3, int2, 15006, (int6 + 25), 96, IF_GETNEXTSUBID(int3), 1, "Decrease workers - 1", "", "");
        if ((CC_FIND(int2, (IF_GETNEXTSUBID(int2) - 1)) == 1)) {
            CC_SETOP(2, "Decrease workers - 5");
            CC_SETOP(3, "Decrease workers - 10");
            CC_SETOP(4, "Decrease workers - X");
            CC_SETOP(5, "Decrease workers - All");
        };
        script11605(int3, int2, 15001 as struct, (int6 + 55), 96, IF_GETNEXTSUBID(int3), 1, "Increase workers - 1", "", "");
        if ((CC_FIND(int2, (IF_GETNEXTSUBID(int2) - 1)) == 1)) {
            CC_SETOP(2, "Increase workers - 5");
            CC_SETOP(3, "Increase workers - 10");
            CC_SETOP(4, "Increase workers - X");
            CC_SETOP(5, "Increase workers - All");
        };
        int6 = (int6 + 110);
        int5 = (int5 + 1);
    };
    return;
}