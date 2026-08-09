//
function script6710(int0: number, int1: number): void {
    var int2 = 1;
    var int3 = 120;
    var int4 = 3;
    var int5 = 0;
    var int6 = -1;
    var string0 = "";
    while ((int2 <= 6)) {
        stack(204800);
        stack(int2);
        DB_FIND(0);
        int6 = dbrow_findnext();
        script10410(int1, -1, 2830, int3, int4, 100, 34, int2, callback(script0));
        stack(int0);
        stack(5);
        stack(int5);
        int5 = (int5 + 1);
        CC_CREATE();
        CC_SETGRAPHIC(dbrow_getfield(int6, 204864, 0));
        CC_SETSIZE(30, 30, 0, 0);
        CC_SETPOSITION((int3 + 2), (int4 + 2), 0, 0);
        string0 = `${dbrow_getfield(int6, 204816, 0)} (${TOSTRING_LOCALISED(script6642(int2), 1)}/${TOSTRING_LOCALISED(script6641(), 1)})`;
        CC_SETONMOUSEREPEAT(callback(script8799, string0, int0, (int5 - 1)));
        CC_SETOP(1, "Information");
        CC_SETONOP(callback(script7774, string0, int0, int5, 2));
        stack(int0);
        stack(4);
        stack(int5);
        int5 = (int5 + 1);
        CC_CREATE();
        CC_SETSIZE(62, 32, 0, 0);
        CC_SETPOSITION((int3 + 32), int4, 0, 0);
        CC_SETTEXTFONT(28 as fontmetrics);
        CC_SETTEXTALIGN(2, 1, 0);
        script2733(int0, CC_GETID(), 3);
        CC_SETTEXT(TOSTRING_LOCALISED(script6642(int2), 1));
        CC_SETONMOUSEREPEAT(callback(script8799, string0, int0, (int5 - 2)));
        CC_SETOP(1, "Information");
        CC_SETONOP(callback(script7774, string0, int0, (int5 - 1), 2));
        int3 = (int3 + 110);
        int2 = (int2 + 1);
    };
    return;
}