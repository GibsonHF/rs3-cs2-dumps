//
function script17502(int0: number): number {
    if ((script17495("necro_ritual_recipe_to_recipe_hidden_get", int0) == 1)) {
        return -1;
    };
    return dbrow_getfield(int0, 962592, 0);
}