//
function script14903(int0: component, int1: component, int2: cs2enum, int3: dbrow, int4: int, int5: int, int6: int, int7: int): void {
    var string0 = dbrow_getfield(int3, 372768, 0);
    var int8 = dbrow_getfield(int3, 372800, 0);
    var int9 = script14670(int3);
    var int10 = 0;
    var int11 = script14678(int3);
    switch (int9) {
        case 0: {
            break;
        }
        case 1: {
            break;
        }
        case 2: {
            int10 = 180;
            break;
        }
        case 3: {
            string0 = "Unknown";
            int8 = -1 as graphic;
            break;
        }
    };
    script13998(int0, int1, 28548 as struct, int4, int5, (60 + 8), 90, int6, false, "", int7);
    if ((CC_FIND(int1, int6) == 1)) {
        CC_SETOPBASE(dbrow_getfield(int3, 372768, 0));
        CC_SETOPCURSOR(1, 172);
        CC_SETOP(1, "Info");
        CC_SETONOP(callback(script14891, int2, int6));
    };
    script7924(int0, IF_GETNEXTSUBID(int0), (60 - 4), (60 - 4), ((int4 + 2) + 5), (int5 + 2), int8, false, false, false, int10);
    script6203(int0, ((60 + 8) - 4), (30 - 2), (int4 + 2), (int5 + 60), 206 as fontmetrics, string0, 3);
    CC_SETMAXLINES(2);
    CC_SETTEXTALIGN(1, 1, 0);
    if ((int11 > 0)) {
        script7924(int0, IF_GETNEXTSUBID(int0), 16, 16, (int4 + 2), (int5 + 2), 21747 as graphic, false, false, false, 0);
    };
    return;
}