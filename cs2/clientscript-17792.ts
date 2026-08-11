//
function script17792(int0: number, int1: number): void {
    if ((CC_FIND(comp(1224, 34), int0) == 1)) {  // necro_ritual_recipe_selection:list_scroll_layer
        script7872(1, 1, 1, 1);
    };
    var int2 = DB_LISTALL(235);
    var int3 = 0;
    var int4 = -1;
    int4 = (int4 + 1);
    while ((int4 < int2)) {
        int3 = script17503(dbrow_findnext(), 0);
        if (((CC_FIND(comp(1224, 34), int3) == 1) && (int3 != int0))) {  // necro_ritual_recipe_selection:list_scroll_layer
            script7872(1, 1, 1, 0);
        };
    };
    script17793(int1);
    return;
}