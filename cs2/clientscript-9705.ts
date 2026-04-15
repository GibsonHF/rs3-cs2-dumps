//
function script9705(int0: int): void {
    var int1 = 1;
    var int2 = -1;
    var int3 = comp(-1, 65535);
    while ((int1 <= 10)) {
        int3 = script5819(int1);
        IF_SETPOSITION((IF_GETX(int3) + int0), 0, 0, 1, int3);
        if ((IF_GETX(int3) < -90)) {
            script4767(int1, varclient_3997);
            int2 = script9706(int3);
            IF_SETPOSITION((int2 + 90), 0, 0, 1, int3);
            varclient_3997 = (varclient_3997 + 1);
            if ((varclient_3997 >= script16172())) {
                varclient_3997 = 0;
            };
        };
        if ((IF_GETX(int3) > 810)) {
            varclient_3997 = script5233(1);
            script4767(int1, varclient_3997);
            int2 = script9707(int3);
            IF_SETPOSITION((int2 - 90), 0, 0, 1, int3);
        };
        if ((IF_GETX(int3) <= 0)) {
            varclient_4139 = IF_GETX(int3);
        };
        int1 = (int1 + 1);
    };
    return;
}