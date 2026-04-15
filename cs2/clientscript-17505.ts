//
function script17505(int0: dbrow): int {
    if ((script17495("necro_ritual_recipe_to_recipe_focus_count_get", int0) == 1)) {
        return -1;
    };
    return DB_GETFIELDCOUNT(int0, 962608);
}