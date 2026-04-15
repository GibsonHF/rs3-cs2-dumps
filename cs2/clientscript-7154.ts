//
function script7154(): void {
    var int0 = comp(186, 3);
    var int1 = comp(186, 4);
    var int2 = comp(186, 5);
    var int3 = comp(186, 8);
    var int4 = comp(186, 9);
    var int5 = IF_GETLAYER(int4);
    var int6 = -1 as obj;
    var string0 = "???";
    var int7 = 0;
    var int8 = 2;
    var int9 = ENUM_GETOUTPUTCOUNT(15296 as cs2enum);
    var int10 = 0;
    var int11 = 0;
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    while ((int7 < int9)) {
        int6 = enum_getvalue(0, 33, 15296 as cs2enum, int7);
        if ((int6 != -1 as obj)) {
            int11 = script6681(int6);
            if ((int11 == 0)) {
                int11 = script6681(item_getparam(int6, 2655));
            };
            if ((int11 == 0)) {
                int11 = script6681(item_getparam(int6, 2656));
            };
            if ((int11 == 0)) {
                int11 = script6681(item_getparam(int6, 2657));
            };
            if ((int11 == 1)) {
                string0 = OC_NAME(int6);
            } else {
                string0 = "???";
            };
            int10 = script1208((int7 + 1));
            script10410(int0, int1, 28556 as struct, 2, int8, (IF_GETWIDTH(int0) - 6), 28, int7, false, string0);
            if ((CC_FIND(int1, int7) == 1)) {
                CC_SETONOP(callback(script7218, int6, int11, int10));
            };
            int8 = (int8 + 30);
        };
        int7 = (int7 + 1);
    };
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(int0), int8), int0);
    IF_SETSCROLLPOS(0, 0, int0);
    script7791(int2, int0);
    IF_SETDRAGGABLE(int5, -1, int3);
    IF_SETONDRAG(callback(script8479, int3, int4, -1), int3);
    IF_SETONDRAGCOMPLETE(callback(script8480, int3, int4, -1), int3);
    IF_SETONVARTRANSMIT(callback(script7219, 8654, 8654, 8655, 8656, 8595, 5), int5);
    return;
}