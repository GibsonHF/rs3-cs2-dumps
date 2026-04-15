//
function script17501(int0: dbrow): int {
    if ((script17495("necro_ritual_recipe_to_recipe_type_get", int0) == 1)) {
        return -1;
    };
    return dbrow_getfield(int0, 962576, 0);
}