//
function script6710(int0: unknown_int, int1: unknown_int): void {
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
        dbrow_findnext();
        int6 = stack();
        script10410(int1, -1, 2830, int3, int4, 100, 34, int2, 0, "");
        CC_CREATE(int0, 5, int5++);
        stack(int6);
        stack(204864);
        stack(0);
        dbrow_getfield();
        CC_SETGRAPHIC(stack());
        CC_SETSIZE(30, 30, 0, 0);
        CC_SETPOSITION((int3 + 2), (int4 + 2), 0, 0);
        stack(int6);
        stack(204816);
        stack(0);
        dbrow_getfield();
        string0 = `${stack()} (${TOSTRING_LOCALISED(script6642(int2), 1)}/${TOSTRING_LOCALISED(script6641(), 1)})`;
        CC_SETONMOUSEREPEAT(callback(script8799, string0, int0, (int5 - 1)));
        CC_SETOP(1, "Information");
        CC_SETONOP(callback(script7774, string0, int0, int5, 2));
        CC_CREATE(int0, 4, int5++);
        CC_SETSIZE(62, 32, 0, 0);
        CC_SETPOSITION((int3 + 32), int4, 0, 0);
        CC_SETTEXTFONT(28);
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