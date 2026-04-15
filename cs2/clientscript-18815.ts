//
function script18815(int0: int, int1: int): string {
    var string0 = "";
    if ((int0 > 1)) {
        string0 = `Increase all multipliers on the trail to at least ${script16595(int0)}x${inttostring(int0, 10)}</col>!`;
    } else if ((int1 > 0)) {
        string0 = `Increase all multipliers on the trail by <col=FF00>${inttostring(int1, 10)}</col>!<br>(Max multiplier: x7)`;
    };
    return string0;
}