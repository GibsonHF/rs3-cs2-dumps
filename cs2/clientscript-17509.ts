//
function script17509(int0: dbrow, int1: int): quest {
    if ((script17495("necro_ritual_recipe_to_recipe_quest_req_get", int0) == 1)) {
        return -1 as quest;
    };
    return dbrow_getfield(int0, 962704, int1);
}