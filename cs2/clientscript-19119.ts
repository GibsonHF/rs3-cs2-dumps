//
function script19119(): number {
    stack(1196304);
    stack(script12477());
    DB_FIND(0);
    var int0 = dbrow_findnext();
    if ((int0 == -1)) {
        script12478("No active modifier found for today's date, defaulting.");
        int0 = 13456;
    };
    return int0;
}