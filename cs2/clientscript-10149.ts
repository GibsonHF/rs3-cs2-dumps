//
function script10149(): void {
    var int0 = -1;
    var string0 = "";
    var string1 = "";
    var int1 = 0;
    var int2 = 0;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = 0;
    if ((varbitclient_23069 == 1)) {
        IF_SETHIDE(false, comp(231, 3));
        if (((varclient_4292 != -1) && (STRING_LENGTH(varclient_4291) > 0))) {
            stack(TTV_WEBCAM_GETDEVICE_BYUNIQUENAME(varclient_4291));
            [int0, string0, string1] = stack();
            int8 = TTV_WEBCAM_START(int0, varclient_4292);
            script10158(0);
        };
    };
    return;
}