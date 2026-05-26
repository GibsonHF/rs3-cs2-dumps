//
function script15822(int0: number, int1: number): void {
    var int2 = -1;
    switch (int1) {
        case 0: {
            if ((script12115(4598) == 1)) {
                int2 = 45616;
            } else if ((PLAYERMEMBER() == 1)) {
                int2 = 45311;
            } else {
                int2 = 45308;
            };
            break;
        }
        case 1: {
            if ((script12115(4842) == 1)) {
                int2 = 45640;
            } else if ((script13749() == 1)) {
                int2 = 45310;
            } else {
                int2 = 45309;
            };
            break;
        }
        default: {
            return;
        }
    };
    var int3 = (100 + (2 * (255 + 30)));
    var int4 = 56033285;
    var int5 = 0;
    var int6 = 0;
    script15938(int4, int0, int5++, int3, (14 + (MODULO(int0, 2) * 225)), 0, 0, 255, 205, 0, 0);
    CC_SETOP(1, "Select");
    CC_SETOPCURSOR(1, 46);
    script7918(int0, int5++, 0, 0, 0, 0, 0, 0, 1, 1, 14146);
    script7918(int0, int5++, 0, 0, 0, 0, 0, 0, 1, 1, script3918(int2));
    script7918(int0, int5++, 0, 0, 0, 0, 0, 0, 1, 1, 11707);
    script7918(int0, int5++, 0, 55, 0, 0, 251, 149, 0, 0, 11703);
    script10485(int0, int5++, 30, 4, 0, 2, 44, 32, 1, 0, 1314, struct_getparam(int2, 2533));
    return;
}