//[clientscript,lore_blanktip]
function script782(int0: int, int1: component, int2: component, int3: unknown_int, string0: unknown_string): void {
    CC_DELETEALL(int1);
    var int4 = (2 + (13 * PARAHEIGHT("This space is reserved", 177, 67 as fontmetrics)));
    var int5 = (2 + (13 * PARAHEIGHT("You cannot make this pouch.", 177, 66 as fontmetrics)));
    var int6 = (((((2 + int4) + int5) + 32) + 14) + 2);
    var int7 = 5;
    var int8 = 5;
    var int9 = 1;
    var int10 = 1;
    if ((CC_FIND(int2, int0) == 1)) {
        int6 = ((int6 - 32) - 14);
        int7 = ((CC_GETY() - IF_GETSCROLLY(int2)) + 110);
        if ((int7 > 200)) {
            int7 = (((CC_GETY() - IF_GETSCROLLY(int2)) - int6) + 45);
        };
        int8 = (CC_GETX() - 60);
        if ((int8 < 0)) {
            int8 = 5;
        };
        if ((int8 > 270)) {
            int8 = 285;
        };
        CC_CREATE(int1, 3, 0);
        CC_SETPOSITION(int8, int7, 0, 0);
        CC_SETSIZE(180, int6, 0, 0);
        CC_SETFILL(1);
        CC_SETCOLOUR(0);
        CC_SETTRANS(42);
        CC_CREATE(int1, 3, 1);
        CC_SETPOSITION((int8 + 1), (int7 + 1), 0, 0);
        CC_SETSIZE(179, (int6 - 1), 0, 0);
        CC_SETFILL(0);
        CC_SETCOLOUR(3025699);
        CC_CREATE(int1, 3, 2);
        CC_SETPOSITION(int8, int7, 0, 0);
        CC_SETSIZE(179, (int6 - 1), 0, 0);
        CC_SETFILL(0);
        CC_SETCOLOUR(7496785);
        CC_CREATE(int1, 4, 3);
        CC_SETPOSITION((int8 + 2), (int7 + 2), 0, 0);
        CC_SETSIZE(177, int4, 0, 0);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXTFONT(67 as fontmetrics);
        CC_SETCOLOUR(16750623);
        CC_SETTEXTSHADOW(false);
        CC_SETTEXT("This space is reserved.");
    };
    return;
}