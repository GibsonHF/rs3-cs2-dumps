//
function script15127(int0: dbrow, int1: int): [obj, int, int, boolean] {
    if ((int0 == -1 as dbrow)) {
        script12478("event_crafting_recipe_get_ingredient_info called without a recipe!");
        return [-1 as obj, 0, 0, false];
    };
    var int2 = -1 as dbrow;
    if ((varbitplayer_47735 > 0)) {
        stack(434176);
        stack(varbitplayer_47735);
        DB_FIND(0);
        dbrow_findnext();
        int2 = stack();
    };
    if ((DB_GETFIELDCOUNT(int0, 434240) <= int1)) {
        script12478(`event_crafting_recipe_get_ingredient_info looking for slot ${inttostring(int1, 10)} however it is OUT OF BOUNDS on this recipe.`);
        return [-1 as obj, 0, 0, false];
    };
    var int3 = -1 as obj;
    var int4 = 0;
    [int3, int4] = dbrow_getfield(int0, 434240, int1);
    if ((int3 == -1 as obj)) {
        script12478(`We're expecting something at slot ${inttostring(int1, 10)} in event_crafting_recipe_get_active_ingredient_info.`);
    };
    if ((int0 != int2)) {
        return [int3, 0, int4, false];
    };
    var int5 = INV_GETOBJ(894 as inv, int1);
    var int6 = INV_GETNUM(894 as inv, int1);
    if (((int5 != -1 as obj) && (int5 != int3))) {
        script12478(`Event crafting inventory is OUT of sync! We're expecting a ${OC_NAME(int3)} and we got a ${OC_NAME(int5)} while crafting recipe ID ${inttostring(varbitplayer_47735, 10)}`);
    };
    var int7 = script15128(int1);
    if (((int6 == int4) && (int7 == false))) {
        script12478(`Active recipe ${inttostring(varbitplayer_47735, 10)}, should've had its 'completed var set, but didn't. (Has it not transmitted yet?)`);
    };
    return [int3, int6, int4, int7];
}