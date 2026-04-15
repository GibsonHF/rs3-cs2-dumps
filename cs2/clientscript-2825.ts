//
function script2825(int0: unknown_int): void {
    if ((varclient_1064 == (SPLINE_LENGTH(0) - 1))) {
        if ((int0 == 1)) {
            CAM_SMOOTHRESET();
        };
        IF_SETONCAMFINISHED(callback(), comp(89, 0));
        return;
    };
    CAM_MOVEALONG(0, varclient_1064, enum_getvalue(0, 0, varclient_1067, varclient_1064), enum_getvalue(0, 0, varclient_1067, (varclient_1064 + 1)), 1, varclient_1064);
    varclient_1064 = (varclient_1064 + 1);
    return;
}