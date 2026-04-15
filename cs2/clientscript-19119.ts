//
function script19119(): unknown_int {
    stack(1196304);
    stack(script12477());
    DB_FIND(0);
    dbrow_findnext();
    var int0 = stack();
    if ((int0 == -1)) {
        script12478("No active modifier found for today's date, defaulting.");
        int0 = 13456;
    };
    return int0;
}