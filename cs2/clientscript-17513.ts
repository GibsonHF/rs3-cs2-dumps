//
function script17513(int0: dbrow): int {
    if ((script17495("necro_ritual_recipe_to_recipe_durability_req_get", int0) == 1)) {
        return -1;
    };
    return dbrow_getfield(int0, 962656, 0);
}