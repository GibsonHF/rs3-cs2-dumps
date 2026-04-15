//
function script15123(int0: dbrow): string {
    var string0 = "";
    if ((int0 == -1 as dbrow)) {
        return "";
    };
    if ((DB_GETROWTABLE(int0) != 106)) {
        script12478("Invalid dbrow passed in, isn't part of the event_crafting_core_recipe table.");
        return "";
    };
    if ((DB_GETFIELDCOUNT(int0, 434224) > 0)) {
        string0 = dbrow_getfield(int0, 434224, 0);
    };
    var int1 = -1 as graphic;
    var int2 = -1 as obj;
    [int2, int1] = dbrow_getfield(int0, 434192, 0);
    if ((int2 == -1 as obj)) {
        script12478(`Mis-configured recipe, it doesn't have a display object OR a desc override. ITs ID is ${inttostring(dbrow_getfield(int0, 434176, 0), 10)}`);
        return "";
    };
    if ((STRING_LENGTH(string0) <= 0)) {
        string0 = OC_DESC(int2);
    };
    if ((OC_CATEGORY(int2) == 4702 as category)) {
        string0 = `${string0} This item will expire at the end of this event, make sure to use it before then!`;
    };
    return string0;
}