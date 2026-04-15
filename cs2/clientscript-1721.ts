//[clientscript,contact_spell]
function script1721(): void {
    var int0 = 0;
    var int1 = 5;
    var int2 = (IF_GETWIDTH(comp(88, 0)) / int1);
    var int3 = 0;
    var int4 = 0;
    var int5 = 125;
    var int6 = 15;
    var int7 = -1 as model;
    var int8 = 2200;
    var string0 = "";
    var int9 = 0;
    var int10 = -1 as seq;
    var int11 = ENUM_GETOUTPUTCOUNT(869 as cs2enum);
    var int12 = ((int11 / int1) * int5);
    if ((MODULO(int11, int1) != 0)) {
        int12 = (int12 + int5);
    };
    CC_DELETEALL(comp(88, 1));
    CC_DELETEALL(comp(88, 2));
    IF_SETSCROLLSIZE((int1 * int2), int12, comp(88, 0));
    while ((int0 < int11)) {
        CC_CREATE(comp(88, 1), 6, int0);
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
        CC_CREATE(comp(88, 2), 4, int0);
        CC_SETSIZE(int2, (int5 - (int6 * 2)), 0, 0);
        CC_SETCOLOUR(16750901);
        CC_SETTEXTFONT(66 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXT(string0);
        CC_SETTEXTALIGN(1, 0, 0);
        CC_SETPOSITION((int3 * int2), ((int4 * int5) + int6), 0, 0);
        if ((++int3 >= int1)) {
            int3 = 0;
            int4 = (int4 + 1);
        };
        int0 = (int0 + 1);
    };
    script7791(comp(88, 3), comp(88, 0));
    return;
}