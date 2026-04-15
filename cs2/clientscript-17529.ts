//
function script17529(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: dbrow, int4: int): [unknown_int, int] {
    var int5 = 1;
    var int6 = 0;
    if ((script17530(int1, script17532(int3)) == 0)) {
        int5 = 0;
        int6 = (int6 + 1);
        script17531(int5, int2, int6);
        return [0, int6];
    };
    if (((int0 == 1) && (script17530(int1, script17533(int3, int4)) == 0))) {
        int5 = 0;
        int6 = (int6 + 1);
    };
    if (((int0 == 0) && (script17530(int1, script17534(int3)) == 0))) {
        int5 = 0;
        int6 = (int6 + 1);
    };
    if ((script17530(int1, script17535(int3)) == 0)) {
        int5 = 0;
        int6 = (int6 + 1);
    };
    if ((script17530(int1, script17536(int3)) == 0)) {
        int5 = 0;
        int6 = (int6 + 1);
    };
    if ((script17530(int1, script17537(int3)) == 0)) {
        int5 = 0;
        int6 = (int6 + 1);
    };
    if ((script17530(int1, script17538(int3)) == 0)) {
        int5 = 0;
        int6 = (int6 + 1);
    };
    if ((script17530(int1, script17539(int3)) == 0)) {
        int5 = 0;
        int6 = (int6 + 1);
    };
    if ((int0 == 2)) {
        if ((script17530(int1, script17540()) == 0)) {
            int5 = 0;
            int6 = (int6 + 1);
        };
        if ((script17530(int1, script17541(varbitplayer_53865, varbitplayer_53853, varplayer_11175)) == 0)) {
            int5 = 0;
            int6 = (int6 + 1);
        };
        if ((script17530(int1, script17541(varbitplayer_53866, varbitplayer_53854, varplayer_11176)) == 0)) {
            int5 = 0;
            int6 = (int6 + 1);
        };
        if ((script17530(int1, script17541(varbitplayer_53867, varbitplayer_53855, varplayer_11177)) == 0)) {
            int5 = 0;
            int6 = (int6 + 1);
        };
    };
    script17531(int5, int2, int6);
    return [int5, int6];
}