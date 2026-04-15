//
function script17506(int0: dbrow, int1: int): [stat, int] {
    if ((script17495("necro_ritual_recipe_to_recipe_level_req_get", int0) == 1)) {
        return [-1 as stat, 0];
    };
    return dbrow_getfield(int0, 962640, int1);
}