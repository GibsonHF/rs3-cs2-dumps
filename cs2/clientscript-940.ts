//
function script940(int0: int): string {
    if ((int0 < 0)) {
        return "";
    };
    if ((int0 < 10000)) {
        return inttostring(int0, 10);
    };
    if ((int0 < 10000000)) {
        return `${inttostring((int0 / 1000), 10)}K`;
    };
    return `${inttostring((int0 / 1000000), 10)}M`;
}