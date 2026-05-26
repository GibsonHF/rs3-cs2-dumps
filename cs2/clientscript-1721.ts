//[clientscript,contact_spell]
function script1721(): void {
    var int0 = 0;
    var int1 = 5;
    var int2 = (IF_GETWIDTH(5767168) / int1);
    var int3 = 0;
    var int4 = 0;
    var int5 = 125;
    var int6 = 15;
    var int7 = -1;
    var int8 = 2200;
    var string0 = "";
    var int9 = 0;
    var int10 = -1;
    var int11 = ENUM_GETOUTPUTCOUNT(869);
    var int12 = ((int11 / int1) * int5);
    if ((MODULO(int11, int1) != 0)) {
        int12 = (int12 + int5);
    };
    CC_DELETEALL(5767169);
    CC_DELETEALL(5767170);
    IF_SETSCROLLSIZE((int1 * int2), int12, 5767168);
    while ((int0 < int11)) {
        CC_CREATE(5767169, 6, int0);
        CC_SETSIZE(int2, int5, 0, 0);
        [int7, string0, int9, int8, int10] = script19775(int0);
        CC_SETMODEL(int7);
        CC_SETMODELANGLE(1, 20, 5, 1950, 0, int8);
        CC_SETPOSITION((int3 * int2), (int4 * int5), 0, 0);
        if ((int9 == 1)) {
            CC_SETOP(1, "Speak-to");
            CC_SETONMOUSEOVER(callback(script1860, -2147483643, int10));
            CC_SETONMOUSELEAVE(callback(script2607, -2147483643));
        };
        CC_CREATE(5767170, 4, int0);
        CC_SETSIZE(int2, (int5 - (int6 * 2)), 0, 0);
        CC_SETCOLOUR(16750901);
        CC_SETTEXTFONT(66);
        CC_SETTEXTSHADOW(1);
        CC_SETTEXT(string0);
        CC_SETTEXTALIGN(1, 0, 0);
        CC_SETPOSITION((int3 * int2), ((int4 * int5) + int6), 0, 0);
        if ((++int3 >= int1)) {
            int3 = 0;
            int4 = (int4 + 1);
        };
        int0 = (int0 + 1);
    };
    script7791(5767171, 5767168);
    return;
}