//
function script19348(int0: int): int {
    var int1 = script19595(0, (200 - 1));
    script12478(`Slot ${inttostring(int0, 10)} is out of range (${inttostring(200, 10)}). First freeslot is ${inttostring(varplayer_11958, 10)}. Empty proc found at: ${inttostring(int1, 10)}. If the free slot isn't null that will be used instead.`);
    if ((int1 != -1)) {
        return int1;
    };
    return int0;
}