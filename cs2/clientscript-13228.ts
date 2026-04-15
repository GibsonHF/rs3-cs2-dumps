//
function script13228(int0: component, int1: int): [string, string, string, int] {
    var string0 = "Rename Preset";
    var string1 = "Enter new name here.";
    var string2 = "Clear name";
    var int2 = 0;
    if ((int1 == -1)) {
        return [string0, string1, string2, int2];
    };
    var int3 = -1 as struct;
    var int4 = -1;
    var int5 = ENUM_GETOUTPUTCOUNT(12237 as cs2enum);
    while ((++int4 < int5)) {
        int3 = enum_getvalue(0, 73, 12237 as cs2enum, int4);
        if ((int3 != -1 as struct)) {
            if ((struct_getparam(int3, 6353) == int1)) {
                int4 = int5;
            } else {
                int3 = -1 as struct;
            };
        };
    };
    if ((int3 != -1 as struct)) {
        string0 = `Rename ${struct_getparam(int3, 2533)}`;
    } else {
        return [string0, string1, string2, int2];
    };
    var int6 = 0;
    var int7 = 4;
    int2 = 4;
    var int8 = (496 - (2 * int7));
    var int9 = 29 as fontmetrics;
    CC_CREATE(int0, 4, int6++);
    CC_SETTEXTFONT(int9);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETPOSITION(int7, int2, 0, 0);
    CC_SETCOLOUR(script10495(1));
    CC_SETTEXT("Current Name:");
    CC_SETSIZE((int7 * 2), script7593(CC_GETTEXT(), int8, CC_GETFONTMETRICS(), 0), 1, 0);
    int2 = (int2 + (CC_GETHEIGHT() + int7));
    var int10 = 26 as fontmetrics;
    CC_CREATE(int0, 4, int6++);
    CC_SETTEXTFONT(int10);
    CC_SETTEXTALIGN(0, 0, 0);
    CC_SETPOSITION(int7, int2, 0, 0);
    CC_SETCOLOUR(16777215);
    var string3 = "A";
    var int11 = 0;
    while ((++int11 < 2)) {
        string3 = `${string3}<br>A`;
    };
    CC_SETSIZE((int7 * 2), script7593(string3, int8, CC_GETFONTMETRICS(), 0), 1, 0);
    string3 = script13227(int3);
    CC_SETTEXT(script3930(string3, CC_GETWIDTH(), 2, CC_GETFONTMETRICS()));
    if ((strcmp(CC_GETTEXT(), string3) != 0)) {
        script14990(2, string3);
    };
    CC_SETONVARCSTRTRANSMIT(callback(script13229, -2147483645, -2147483643, int3, 5940, 5941, 5942, 5943, 4));
    int2 = (int2 + CC_GETHEIGHT());
    return [string0, string1, string2, int2];
}