//
function script17504(int0: dbrow, int1: int, int2: int): [obj, int] {
    if ((script17495("necro_ritual_recipe_to_recipe_focus_get", int0) == 1)) {
        return [-1 as obj, 0];
    };
    if ((int2 != -1)) {
        return [dbrow_getfield(int0, 962609, int2), dbrow_getfield(int0, 962610, int2)];
    };
    var int3 = script17505(int0);
    var int4 = -1;
    while ((++int4 < int3)) {
        if ((script17503(int0, int4) == int1)) {
            return [dbrow_getfield(int0, 962609, int4), dbrow_getfield(int0, 962610, int4)];
        };
    };
    return [-1 as obj, 0];
}