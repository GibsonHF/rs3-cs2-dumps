//
function script10223(int0: unknown_int, int1: unknown_int, string0: unknown_string): void {
    var int2 = -1;
    var string1 = "";
    var string2 = "";
    if ((((varbitclient_23069 == 1) && (varclient_4292 != -1)) && (STRING_LENGTH(varclient_4291) > 0))) {
        stack(TTV_WEBCAM_GETDEVICE_BYUNIQUENAME(varclient_4291));
        [int2, string1, string2] = stack();
        if ((int2 != -1)) {
            return;
        };
        script10145();
        printmessage("A new webcam has been detected.");
    };
    return;
}