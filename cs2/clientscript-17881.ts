//
function script17881(int0: number): number {
    var int1 = MIN(script17862(7906), script17892(varplayer_11339));
    var int2 = 0;
    var int3 = 0;
    while ((int1 >= 1)) {
        if ((script17868(7906, int1) == 0)) {
            int2 = script17874(varplayer_11339, int1);
            if ((script17843(int2, int0) == 1)) {
                int3 = (int3 + script17875(varplayer_11339, int1));
            };
        };
        int1 = (int1 - 1);
    };
    return int3;
}