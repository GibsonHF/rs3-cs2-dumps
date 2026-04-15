//
function script10150(int0: unknown_int): void {
    var int1 = 0;
    var int2 = -1;
    var string0 = "";
    var string1 = "";
    if (((varclient_4292 != -1) && (STRING_LENGTH(varclient_4291) > 0))) {
        IF_SETHIDE(true, comp(231, 3));
        stack(TTV_WEBCAM_GETDEVICE_BYUNIQUENAME(varclient_4291));
        [int2, string0, string1] = stack();
        int1 = TTV_WEBCAM_STOP(int2);
        if ((int0 == 1)) {
            script10158(0);
        } else {
            script10158(1);
        };
        if ((int0 == 1)) {
            varclient_4297 = 1;
            varbitclient_23070 = 1;
        };
    };
    return;
}