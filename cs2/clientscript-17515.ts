//
function script17515(int0: dbrow, int1: int): [obj, int] {
    if ((script17495("necro_ritual_recipe_to_recipe_reward_obj_get", int0) == 1)) {
        return [-1 as obj, 0];
    };
    return dbrow_getfield(int0, 962768, int1);
}