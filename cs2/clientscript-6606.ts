//
function script6606(int0: component): void {
    var int1 = 100;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    int3 = ENUM_GETOUTPUTCOUNT(6060 as cs2enum);
    int3 = (int3 + int1);
    if ((IF_FIND(comp(1324, 16)) == 1)) {
        int4 = CC_GETX();
        int5 = CC_GETY();
        int6 = CC_GETX();
        int7 = CC_GETY();
        int8 = (CC_GETHEIGHT() + CC_GETY());
        int9 = (CC_GETX() + CC_GETWIDTH());
    };
    while ((int1 < int3)) {
        if ((CC_FIND(int0, int1) == 1)) {
            if ((script6613(int2) < 1)) {
                if ((((((IF_FIND[1](int0) == 1) && (CC_GETX() > CC_GETX[1]())) && (CC_GETX() < (CC_GETX[1]() + CC_GETWIDTH[1]()))) && (CC_GETY() > CC_GETY[1]())) && (CC_GETY() < (CC_GETX[1]() + CC_GETWIDTH[1]())))) {
                    if ((CC_GETWIDTH() > CC_GETHEIGHT())) {
                        CC_SETPOSITION(int6, int5, 0, 0);
                    } else {
                        CC_SETPOSITION(int4, int7, 0, 0);
                    };
                    int4 = (int4 + CC_GETWIDTH());
                    int5 = (int5 + CC_GETHEIGHT());
                };
            } else if ((CC_FIND[1](int0, (script6613(int2) - 1)) == 1)) {
                CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
            };
        };
        int1 = (int1 + 1);
        int2 = (int2 + 1);
    };
    return;
}