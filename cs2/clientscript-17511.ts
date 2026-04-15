//
function script17511(int0: dbrow, int1: int): [npc, int] {
    if ((script17495("necro_ritual_recipe_to_recipe_glyph_req_get", int0) == 1)) {
        return [-1 as npc, 0];
    };
    return dbrow_getfield(int0, 962736, int1);
}