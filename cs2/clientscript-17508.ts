//
function script17508(int0: number, int1: number): number {
    if ((script17495("necro_ritual_recipe_to_recipe_site_req_get", int0) == 1)) {
        return -1 as dbrow;
    };
    return dbrow_getfield(int0, 962688, int1);
}