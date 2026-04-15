//
function script9668(int0: component, int1: component, int2: component, int3: component): void {
    var int4 = 0;
    var int5 = 5;
    var string0 = "";
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    var int6 = 5;
    var int7 = 0;
    while ((int4 < 60)) {
        CC_CREATE(int0, 4, int4);
        CC_SETTEXT(`Floor ${inttostring((int4 + 1), 10)}`);
        CC_SETSIZE(((IF_GETWIDTH(int2) / 4) - 40), 25, 0, 0);
        CC_SETPOSITION((int6 + 35), int5, 0, 0);
        CC_SETTEXTFONT(27 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETCOLOUR(7705248);
        CC_CREATE[1](int1, 5, int4);
        CC_SETSIZE[1](25, 25, 0, 0);
        CC_SETPOSITION[1](int6, int5, 0, 0);
        if ((script9669((int4 + 1)) == 1)) {
            string0 = "You have completed this floor on hard mode.";
            CC_SETGRAPHIC[1](19713 as graphic);
            CC_SETONMOUSEREPEAT[1](callback(script8799, string0, int1, int4));
        } else {
            string0 = "You have not completed this floor on hard mode.";
            CC_SETGRAPHIC[1](19712 as graphic);
            CC_SETONMOUSEREPEAT[1](callback(script8799, string0, int1, int4));
        };
        int5 = ((int5 + CC_GETHEIGHT()) + 5);
        if ((MODULO(++int4, 15) == 0)) {
            int6 = ((CC_GETWIDTH() + CC_GETX()) + 10);
            int5 = 5;
        };
        int7 = (CC_GETY() + CC_GETHEIGHT());
    };
    IF_SETSCROLLSIZE(0, int7, int2);
    script7791(int3, int2);
    return;
}