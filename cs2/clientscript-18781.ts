//
function script18781(int0: int): graphic {
    stack(1077296);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 == -1)) {
        script12478(`Attempting to get graphic for an emote with invalid id = ${inttostring(int0, 10)}.`);
        return -1 as graphic;
    };
    return script18301(int1);
}