//
function script1152(): void {
    CC_DELETEALL(comp(215, 29));
    var int0 = -1;
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = IF_GETNEXTSUBID(comp(215, 29));
    var int20 = 0;
    var int21 = 8;
    [int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, int14, int15, int16, int17] = script1153();
    while ((++int0 < 7)) {
        switch ((int0 + 1)) {
            case 1: {
                int2 = int4;
                int3 = int11;
                break;
            }
            case 2: {
                int2 = int5;
                int3 = int12;
                break;
            }
            case 3: {
                int2 = int6;
                int3 = int13;
                break;
            }
            case 4: {
                int2 = int7;
                int3 = int14;
                break;
            }
            case 5: {
                int2 = int8;
                int3 = int15;
                break;
            }
            case 6: {
                int2 = int9;
                int3 = int16;
                break;
            }
            case 7: {
                int2 = int10;
                int3 = int17;
                break;
            }
        };
        if ((int2 > 0)) {
            int18 = (int18 + 1);
            int1 = -1;
            while ((++int1 < int2)) {
                CC_CREATE(comp(215, 29), 5, int19++);
                CC_SETGRAPHIC(script227((int0 + 1)));
                if ((int1 < int3)) {
                    CC_CREATE[1](comp(215, 29), 5, int19++);
                    CC_SETGRAPHIC[1](31495 as graphic);
                    CC_SETSIZE[1](17, 16, 0, 0);
                    CC_SETPOSITION[1]((int20 + 13), (int21 + 15), 0, 0);
                };
                CC_SETSIZE(41, 50, 0, 0);
                CC_SETPOSITION(int20, int21, 0, 0);
                int20 = (int20 + 41);
            };
        };
    };
    return;
}