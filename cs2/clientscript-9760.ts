//
function script9760(): void {
    if ((varplayer_2662 == -1 as coordgrid)) {
        return;
    };
    script8844(1, 13, 8, comp(1145, 31), -1);
    var int0 = 0;
    var int1 = 16;
    var int2 = 0;
    var int3 = comp(-1, 65535);
    while ((int0 < ENUM_GETOUTPUTCOUNT(8839 as cs2enum))) {
        int2 = script9765(int0);
        int3 = enum_getvalue(0, 9, 8839 as cs2enum, int0);
        IF_SETONMOUSEOVER(callback(script9761, int0, int2), int3);
        IF_SETONMOUSEREPEAT(callback(script9762, int0, int2), int3);
        IF_SETONMOUSELEAVE(callback(script9763, int0, int2), int3);
        if ((int2 == 1)) {
            IF_SETOP(1, "Teleport", int3);
            stack(17601);
            stack(int3);
            IF_SETGRAPHIC();
            if ((int0 < 10)) {
                script8844(1, int1, 8, int3, -1);
            } else {
                switch (int0) {
                    case 10: {
                        script8844(1, 70, 8, int3, -1);
                        break;
                    }
                };
            };
        } else {
            IF_SETOP(1, "", int3);
            stack(17603);
            stack(int3);
            IF_SETGRAPHIC();
        };
        int0 = (int0 + 1);
        int1 = (int1 + 1);
    };
    return;
}