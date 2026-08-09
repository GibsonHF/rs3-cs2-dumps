//
function script18782(int0: number): string {
    stack(1077296);
    stack(int0);
    DB_FIND(0);
    var int1 = dbrow_findnext();
    if ((int1 == -1)) {
        script12478(`Attempting to get name for an emote with invalid id = ${inttostring(int0, 10)}.`);
        return "null";
    };
    return script18302(int1);
}