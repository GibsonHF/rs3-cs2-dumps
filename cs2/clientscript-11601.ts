//
function script11601(int0: int, int1: unknown_int): string {
    if ((int0 < 0)) {
        return "";
    };
    if ((int0 < 10000)) {
        return TOSTRING_LOCALISED(int0, int1);
    };
    if ((int0 < 10000000)) {
        return `${TOSTRING_LOCALISED((int0 / 1000), int1)}K`;
    };
    return `${TOSTRING_LOCALISED((int0 / 1000000), int1)}M`;
}