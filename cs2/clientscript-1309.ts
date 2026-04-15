//
function script1309(): void {
    if (((varbitplayer_3292 != 6) && (script6950() > 1))) {
        IF_SETOPKEY(1, 83, 0, comp(696, 13));
        IF_SETOPKEYIGNOREHELD(1, comp(696, 13));
    } else {
        IF_SETOPKEY(1, 83, 0, comp(696, 7));
        IF_SETOPKEYIGNOREHELD(1, comp(696, 7));
    };
    IF_SETOPKEY(1, 53, 0, comp(696, 15));
    IF_SETOPKEY(1, 55, 0, comp(696, 2));
    IF_SETOPKEY(1, 49, 0, comp(696, 1));
    IF_SETOPKEYIGNOREHELD(1, comp(696, 15));
    IF_SETOPKEYIGNOREHELD(1, comp(696, 2));
    IF_SETOPKEYIGNOREHELD(1, comp(696, 1));
    varclient_1993 = 0;
    return;
}