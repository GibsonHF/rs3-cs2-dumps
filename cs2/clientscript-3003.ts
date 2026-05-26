//
function script3003(int0: number): void {
    var int1 = 101711880;
    var int2 = 101711889;
    var int3 = 101711907;
    var int4 = 101711898;
    var int5 = script10405(17);
    var int6 = comp(-1, 65535);
    if ((int5 != -1)) {
        int6 = struct_getparam(int5, 3505);
    };
    if (((int6 != comp(-1, 65535)) && (IF_HASSUBOVERLAY(int6, 1669) == 1))) {
        int1 = 109379594;
        int2 = 109379603;
        int3 = 109379612;
        int4 = 109379621;
    };
    if ((int0 == 1)) {
        script8844(1, 16, 8, int1, -1);
        script8844(1, 17, 8, int2, -1);
        script8844(1, 18, 8, int3, -1);
        script8844(1, 19, 8, int4, -1);
    } else {
        IF_SETOPKEY(1, 0, 0, int1);
        IF_SETOPKEY(1, 0, 0, int2);
        IF_SETOPKEY(1, 0, 0, int3);
        IF_SETOPKEY(1, 0, 0, int4);
    };
    return;
}