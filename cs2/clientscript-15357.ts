//
function script15357(int0: component, int1: component, int2: int, int3: int): void {
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = enum_getvalue(0, 41, 16072 as cs2enum, int7);
    var int9 = 0;
    var int10 = 0;
    while ((int7 <= ENUM_GETOUTPUTCOUNT(16072 as cs2enum))) {
        if ((script2457(int8) == 0)) {
            if ((int2 < int7)) {
                int10 = 0;
                if ((CC_FIND(int0, (int6 + int10)) == 1)) {
                    int4 = cc_getparam(7162);
                    int5 = CC_GETY();
                };
                while ((int10 < 15)) {
                    if ((CC_FIND(int0, (int6 + int10++)) == 1)) {
                        CC_SETPOSITION(CC_GETX(), ((int4 + (CC_GETY() - int5)) + int3), 0, 0);
                    };
                };
                if ((CC_FIND[1](int1, int9) == 1)) {
                    CC_SETPOSITION[1](CC_GETX[1](), (int4 + int3), 0, 0);
                };
            };
            int6 = (int6 + 15);
        };
        int9 = (int9 + 1);
        int7 = (int7 + 1);
        int8 = enum_getvalue(0, 41, 16072 as cs2enum, int7);
    };
    return;
}