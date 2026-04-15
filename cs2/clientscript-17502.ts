//
function script17502(int0: dbrow): boolean {
    if ((script17495("necro_ritual_recipe_to_recipe_hidden_get", int0) == 1)) {
        return false;
    };
    return dbrow_getfield(int0, 962592, 0);
}