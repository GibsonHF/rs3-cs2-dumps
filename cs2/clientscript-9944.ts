//
function script9944(): void {
    var int0 = -1 as struct;
    int0 = script10405(18);
    IF_SETHIDE(false, struct_getparam(int0, 3503));
    if ((script9947() == 1)) {
        script9946();
    } else {
        script9949(189, 1);
    };
    if ((varclient_3693 != 1)) {
        int0 = script10405(1004);
        IF_SETHIDE(false, struct_getparam(int0, 3503));
        int0 = script10405(1002);
        IF_SETHIDE(false, struct_getparam(int0, 3503));
        int0 = script10405(18);
        IF_SETHIDE(false, struct_getparam(int0, 3503));
        int0 = script10405(1032);
        IF_SETHIDE(false, struct_getparam(int0, 3503));
        int0 = script10405(1033);
        IF_SETHIDE(false, struct_getparam(int0, 3503));
    } else {
        int0 = script10405(1004);
        IF_SETHIDE(true, struct_getparam(int0, 3503));
        int0 = script10405(1002);
        IF_SETHIDE(true, struct_getparam(int0, 3503));
        int0 = script10405(18);
        IF_SETHIDE(true, struct_getparam(int0, 3503));
        int0 = script10405(1032);
        IF_SETHIDE(true, struct_getparam(int0, 3503));
        int0 = script10405(1033);
        IF_SETHIDE(true, struct_getparam(int0, 3503));
    };
    return;
}