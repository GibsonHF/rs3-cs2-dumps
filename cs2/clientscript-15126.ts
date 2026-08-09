//
function script15126(int0: number): [number, number] {
    if ((int0 == -1 as dbrow)) {
        return [-1, -1];
    };
    if ((DB_GETROWTABLE(int0) != 106)) {
        script12478("Invalid dbrow passed in, isn't part of the event_crafting_core_recipe table.");
        return [-1, -1];
    };
    var int1 = -1;
    var int2 = -1;
    [int1, int2] = dbrow_getfield(int0, 434192, 0);
    return [int1, int2];
}