//
function script9664(): string {
    var int0 = STAT_BASE(18 as stat);
    if ((int0 < 5)) {
        return "50";
    };
    if ((int0 < 15)) {
        return "100";
    };
    if ((int0 < 25)) {
        return "150";
    };
    if ((int0 < 35)) {
        return "200";
    };
    return "250";
}