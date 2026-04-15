//
function script10681(int0: unknown_int, int1: struct): void {
    IF_SETHIDE(true, comp(1544, 23));
    IF_SETHIDE(false, comp(1544, 25));
    IF_SETHIDE(true, comp(1544, 27));
    IF_SETONOP(callback(script10682, 1), comp(1544, 29));
    var int2 = -1;
    if ((GENDER() == 0)) {
        int2 = struct_getparam(int1, 4605);
    } else {
        int2 = struct_getparam(int1, 4606);
    };
    IF_SETNPCMODEL(int2, comp(1544, 30));
    IF_SETTEXT(struct_getparam(int1, 4601), comp(1544, 8));
    var string0 = `Cost: ${TOSTRING_LOCALISED(struct_getparam(int1, 4600), 1)} ghostweave.<br>Allows ${inttostring(struct_getparam(int1, 4604), 10)} sweets (${inttostring(struct_getparam(int1, 4603), 10)} per day) from trick or treating.`;
    IF_SETTEXT(string0, comp(1544, 9));
    if ((int0 == 1)) {
        IF_SETTEXT("Recover", comp(1544, 82));
        IF_SETHIDE(true, comp(1544, 80));
        string0 = "You already own this costume. Click to recover lost pieces.";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 101187594);
    } else {
        IF_SETTEXT("Make", comp(1544, 82));
        if ((INV_TOTAL(93 as inv, 32440 as obj) < struct_getparam(int1, 4600))) {
            IF_SETHIDE(false, comp(1544, 80));
            string0 = "You don't have enough ghostweave to make this costume.";
            IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 101187664);
        } else {
            IF_SETHIDE(true, comp(1544, 80));
            string0 = `Make this costume from ${TOSTRING_LOCALISED(struct_getparam(int1, 4600), 1)} ghostweave. You will need 5 free inventory spaces.`;
            IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 101187594);
        };
    };
    return;
}