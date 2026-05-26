//
function script10681(int0: number, int1: number): void {
    IF_SETHIDE(1, 101187607);
    IF_SETHIDE(0, 101187609);
    IF_SETHIDE(1, 101187611);
    IF_SETONOP(callback(script10682, 1), 101187613);
    var int2 = -1;
    if ((GENDER() == 0)) {
        int2 = struct_getparam(int1, 4605);
    } else {
        int2 = struct_getparam(int1, 4606);
    };
    IF_SETNPCMODEL(int2, 101187614);
    IF_SETTEXT(struct_getparam(int1, 4601), 101187592);
    var string0 = `Cost: ${TOSTRING_LOCALISED(struct_getparam(int1, 4600), 1)} ghostweave.<br>Allows ${inttostring(struct_getparam(int1, 4604), 10)} sweets (${inttostring(struct_getparam(int1, 4603), 10)} per day) from trick or treating.`;
    IF_SETTEXT(string0, 101187593);
    if ((int0 == 1)) {
        IF_SETTEXT("Recover", 101187666);
        IF_SETHIDE(1, 101187664);
        string0 = "You already own this costume. Click to recover lost pieces.";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 101187594);
    } else {
        IF_SETTEXT("Make", 101187666);
        if ((INV_TOTAL(93, 32440) < struct_getparam(int1, 4600))) {
            IF_SETHIDE(0, 101187664);
            string0 = "You don't have enough ghostweave to make this costume.";
            IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 101187664);
        } else {
            IF_SETHIDE(1, 101187664);
            string0 = `Make this costume from ${TOSTRING_LOCALISED(struct_getparam(int1, 4600), 1)} ghostweave. You will need 5 free inventory spaces.`;
            IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 101187594);
        };
    };
    return;
}