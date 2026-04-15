//
function script15122(int0: dbrow): string {
    if ((int0 == -1 as dbrow)) {
        return "";
    };
    if ((DB_GETROWTABLE(int0) != 106)) {
        script12478("Invalid dbrow passed in, isn't part of the event_crafting_core_recipe table.");
        return "";
    };
    if ((DB_GETFIELDCOUNT(int0, 434208) > 0)) {
        return dbrow_getfield(int0, 434208, 0);
    };
    var int1 = -1 as graphic;
    var int2 = -1 as obj;
    [int2, int1] = dbrow_getfield(int0, 434192, 0);
    if ((int2 == -1 as obj)) {
        script12478(`Mis-configured recipe, it doesn't have a display object OR a name override. ITs ID is ${inttostring(dbrow_getfield(int0, 434176, 0), 10)}`);
        return "";
    };
    return OC_NAME(int2);
}