//
function script17516(int0: dbrow, int1: int): [int, obj, int] {
    if ((script17495("necro_ritual_recipe_to_recipe_reward_focus_get", int0) == 1)) {
        return [0, -1 as obj, 0];
    };
    return dbrow_getfield(int0, 962800, int1);
}