//
function script12896(int0: int): string {
    if ((int0 <= 0)) {
        return "0m";
    };
    var int1 = (int0 / 60);
    var int2 = (int0 - (int1 * 60));
    if (((int1 > 0) && (int2 > 0))) {
        return `${TOSTRING_LOCALISED(int1, 1)}h ${TOSTRING_LOCALISED(int2, 1)}m`;
    };
    if ((int1 > 0)) {
        return `${TOSTRING_LOCALISED(int1, 1)}h`;
    };
    return `${TOSTRING_LOCALISED(int2, 1)}m`;
}