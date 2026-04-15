//
function script13031(int0: stat): unknown_int {
    var int1 = -1 as stat;
    var int2 = -1 as stat;
    var int3 = -1 as stat;
    var int4 = -1 as stat;
    var int5 = -1 as stat;
    var int6 = -1 as stat;
    [int1, int2, int3, int4, int5, int6] = script13029();
    if ((script12970(26 as stat) == 0)) {
        if ((int1 == 26 as stat)) {
            int1 = int6;
        } else if ((int2 == 26 as stat)) {
            int2 = int6;
        } else if ((int3 == 26 as stat)) {
            int3 = int6;
        } else if ((int4 == 26 as stat)) {
            int4 = int6;
        } else if ((int5 == 26 as stat)) {
            int5 = int6;
        };
    };
    if ((((((int0 == int1) || (int0 == int2)) || (int0 == int3)) || (int0 == int4)) || (int0 == int5))) {
        return 1;
    };
    return 0;
}