//
function script18781(int0: number): number {
    stack(1077296);
    stack(int0);
    DB_FIND(0);
    var int1 = dbrow_findnext();
    if ((int1 == -1)) {
        script12478(`Attempting to get graphic for an emote with invalid id = ${inttostring(int0, 10)}.`);
        return -1;
    };
    return script18301(int1);
}