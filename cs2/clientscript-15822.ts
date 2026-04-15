//
function script15822(int0: int, int1: unknown_int): void {
    var int2 = -1 as struct;
    switch (int1) {
        case 0: {
            if ((script12115(4598 as dbrow) == 1)) {
                int2 = 45616 as struct;
            } else if ((PLAYERMEMBER() == true)) {
                int2 = 45311 as struct;
            } else {
                int2 = 45308 as struct;
            };
            break;
        }
        case 1: {
            if ((script12115(4842 as dbrow) == 1)) {
                int2 = 45640 as struct;
            } else if ((script13749() == true)) {
                int2 = 45310 as struct;
            } else {
                int2 = 45309 as struct;
            };
            break;
        }
        default: {
            return;
        }
    };
    var int3 = (100 + (2 * (255 + 30)));
    var int4 = comp(855, 5);
    var int5 = 0;
    var int6 = 0;
    script15938(int4, int0, int5++, int3, (14 + (MODULO(int0, 2) * 225)), 0, 0, 255, 205, 0, 0);
    CC_SETOP(1, "Select");
    CC_SETOPCURSOR(1, 46);
    script7918(int0, int5++, 0, 0, 0, 0, 0, 0, 1, 1, 14146 as graphic);
    script7918(int0, int5++, 0, 0, 0, 0, 0, 0, 1, 1, script3918(int2));
    script7918(int0, int5++, 0, 0, 0, 0, 0, 0, 1, 1, 11707 as graphic);
    script7918(int0, int5++, 0, 55, 0, 0, 251, 149, 0, 0, 11703 as graphic);
    script10485(int0, int5++, 30, 4, 0, 2, 44, 32, 1, 0, 1314 as dbrow, struct_getparam(int2, 2533));
    return;
}