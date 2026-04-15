//
function script17500(int0: dbrow): string {
    if ((script17495("necro_ritual_recipe_to_recipe_name_get", int0) == 1)) {
        return "null";
    };
    return dbrow_getfield(int0, 962560, 0);
}