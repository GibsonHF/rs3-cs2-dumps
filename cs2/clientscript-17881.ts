//
function script17881(int0: boolean): int {
    var int1 = MIN(script17862(7906 as dbrow), script17892(varplayer_11339));
    var int2 = false;
    var int3 = 0;
    while ((int1 >= 1)) {
        if ((script17868(7906 as dbrow, int1) == false)) {
            int2 = script17874(varplayer_11339, int1);
            if ((script17843(int2, int0) == true)) {
                int3 = (int3 + script17875(varplayer_11339, int1));
            };
        };
        int1 = (int1 - 1);
    };
    return int3;
}