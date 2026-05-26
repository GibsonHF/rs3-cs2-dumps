//
function script15871(): void {
    var int0 = struct_getparam(37398, 3503);
    var int1 = script6430(IF_GETHIDE(18087963));
    if ((int0 != comp(-1, 65535))) {
        if (((varbitclient_44897 == 1) || (int1 == 1))) {
            IF_SETHIDE(1, int0);
        } else {
            IF_SETHIDE(0, int0);
        };
    };
    int0 = struct_getparam(19590, 3503);
    if ((int0 != comp(-1, 65535))) {
        if ((int1 == 1)) {
            IF_SETHIDE(1, int0);
        } else {
            IF_SETHIDE(0, int0);
        };
    };
    int0 = struct_getparam(21314, 3503);
    if ((int0 != comp(-1, 65535))) {
        if ((int1 == 1)) {
            IF_SETHIDE(1, int0);
        } else {
            IF_SETHIDE(0, int0);
        };
    };
    return;
}