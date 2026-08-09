//
function script17514(int0: number, int1: number): [number, number] {
    if ((script17495("necro_ritual_recipe_to_recipe_reward_xp_get", int0) == 1)) {
        return [-1, 0];
    };
    var int2 = -1;
    var int3 = 0;
    [int2, int3] = dbrow_getfield(int0, 962784, int1);
    var int4 = 0;
    if ((varplayer_11130 == 13402)) {
        int4 = (int4 + -20);
    };
    return [int2, SCALE(int3, 100, (100 + int4))];
}