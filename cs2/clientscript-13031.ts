//
function script13031(int0: number): number {
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    [int1, int2, int3, int4, int5, int6] = script13029();
    if ((script12970(26) == 0)) {
        if ((int1 == 26)) {
            int1 = int6;
        } else if ((int2 == 26)) {
            int2 = int6;
        } else if ((int3 == 26)) {
            int3 = int6;
        } else if ((int4 == 26)) {
            int4 = int6;
        } else if ((int5 == 26)) {
            int5 = int6;
        };
    };
    if ((((((int0 == int1) || (int0 == int2)) || (int0 == int3)) || (int0 == int4)) || (int0 == int5))) {
        return 1;
    };
    return 0;
}