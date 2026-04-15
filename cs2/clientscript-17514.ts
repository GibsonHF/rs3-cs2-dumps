//
function script17514(int0: dbrow, int1: int): [stat, int] {
    if ((script17495("necro_ritual_recipe_to_recipe_reward_xp_get", int0) == 1)) {
        return [-1 as stat, 0];
    };
    var int2 = -1 as stat;
    var int3 = 0;
    [int2, int3] = dbrow_getfield(int0, 962784, int1);
    var int4 = 0;
    if ((varplayer_11130 == 13402 as dbrow)) {
        int4 = (int4 + -20);
    };
    return [int2, SCALE(int3, 100, (100 + int4))];
}