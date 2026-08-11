//
function script13736(int0: number, int1: number): void {
    IF_SETHIDE(true, comp(1913, 32));  // trh131_costume:main_layer
    IF_SETHIDE(false, comp(1913, 34));  // trh131_costume:preview_layer
    IF_SETHIDE(true, comp(1913, 36));  // trh131_costume:info_layer
    IF_SETONOP(callback(script13737, 1), comp(1913, 38));  // trh131_costume:help_button
    var int2 = struct_getparam(int1, 5549);
    if ((GENDER() == 0)) {
        int2 = struct_getparam(int1, 5548);
    };
    IF_SETNPCMODEL(int2, comp(1913, 39));  // trh131_costume:preview_model
    IF_SETTEXT(struct_getparam(int1, 5547), comp(1913, 17));  // trh131_costume:preview_title
    var string0 = `Cost: ${TOSTRING_LOCALISED(struct_getparam(int1, 5546), 1)} ghostweave.`;
    IF_SETTEXT(string0, comp(1913, 18));  // trh131_costume:preview_text
    if ((int0 == 1)) {
        IF_SETTEXT("Recover", comp(1913, 91));  // trh131_costume:make_button_text
        IF_SETHIDE(true, comp(1913, 89));  // trh131_costume:make_button_disabled_layer
        string0 = "You already own this costume. Click to recover lost pieces.";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), comp(1913, 19));  // trh131_costume:make_layer
    } else {
        IF_SETTEXT("Make", comp(1913, 91));  // trh131_costume:make_button_text
        if ((INV_TOTAL(93 as inv, 41239 as obj) < struct_getparam(int1, 5546))) {
            IF_SETHIDE(false, comp(1913, 89));  // trh131_costume:make_button_disabled_layer
            string0 = "You don't have enough ghostweave to make this costume.";
            IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), comp(1913, 89));  // trh131_costume:make_button_disabled_layer
        } else {
            IF_SETHIDE(true, comp(1913, 89));  // trh131_costume:make_button_disabled_layer
            string0 = `Make this costume from ${TOSTRING_LOCALISED(struct_getparam(int1, 5546), 1)} ghostweave. You will need 5 free inventory spaces.`;
            IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), comp(1913, 19));  // trh131_costume:make_layer
        };
    };
    return;
}