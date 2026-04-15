//
function script17517(int0: dbrow): string {
    if ((script17495("necro_ritual_recipe_to_recipe_reward_custom_string_get", int0) == 1)) {
        return "null";
    };
    return dbrow_getfield(int0, 962832, 0);
}