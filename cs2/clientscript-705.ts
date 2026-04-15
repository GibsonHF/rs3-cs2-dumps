//
function script705(int0: int, int1: int): int {
    var int2 = script14353(0, (1820 - 1));
    script12478(`Tab ${inttostring(int1, 10)} returned slot ${inttostring(int0, 10)} which is out of range (${inttostring(1820, 10)}). First freeslot is ${inttostring(varplayer_8970, 10)}. Empty proc found at: ${inttostring(int2, 10)}. If the free slot isn't null that will be used instead.`);
    if ((int2 != -1)) {
        return int2;
    };
    return int0;
}