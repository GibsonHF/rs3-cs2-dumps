//
function script17503(int0: dbrow, int1: int): int {
    if ((script17495("necro_ritual_recipe_to_recipe_focus_id_get", int0) == 1)) {
        return -1;
    };
    return dbrow_getfield(int0, 962611, int1);
}