//
function script592(): void {
    var int0 = IF_GETWIDTH(33882228);
    var int1 = MAX(0, ((int0 - 180) / 7));
    var int2 = int1;
    var int3 = 0;
    var int4 = (1 + (9 * varbitplayer_49662));
    var int5 = 1;
    var int6 = (30 + int2);
    int2 = MAX(int2, 4);
    var int7 = int2;
    int1 = int2;
    CC_DELETEALL(33882231);
    CC_DELETEALL(33882229);
    CC_DELETEALL(33882230);
    CC_CREATE(33882231, 4, 0);
    while (((int5 <= 9) && (int4 < 19))) {
        script15924(int5, int2, int3);
        if ((int5 == 5)) {
            int2 = int7;
            int3 = (int3 + (30 + 4));
        } else {
            int2 = (int2 + int6);
        };
        int4 = (int4 + 1);
        int5 = (int5 + 1);
    };
    script15923(int1, int6);
    return;
}