//
function script10681(int0: number, int1: number): void {
    IF_SETHIDE(true, comp(1544, 23));  // trh31_costume:main_layer
    IF_SETHIDE(false, comp(1544, 25));  // trh31_costume:preview_layer
    IF_SETHIDE(true, comp(1544, 27));  // trh31_costume:info_layer
    IF_SETONOP(callback(script10682, 1), comp(1544, 29));  // trh31_costume:help_button
    var int2 = -1 as npc;
    if ((GENDER() == 0)) {
        int2 = struct_getparam(int1, 4605);
    } else {
        int2 = struct_getparam(int1, 4606);
    };
    IF_SETNPCMODEL(int2, comp(1544, 30));  // trh31_costume:preview_model
    IF_SETTEXT(struct_getparam(int1, 4601), comp(1544, 8));  // trh31_costume:preview_title
    var string0 = `Cost: ${TOSTRING_LOCALISED(struct_getparam(int1, 4600), 1)} ghostweave.<br>Allows ${inttostring(struct_getparam(int1, 4604), 10)} sweets (${inttostring(struct_getparam(int1, 4603), 10)} per day) from trick or treating.`;
    IF_SETTEXT(string0, comp(1544, 9));  // trh31_costume:preview_text
    if ((int0 == 1)) {
        IF_SETTEXT("Recover", comp(1544, 82));  // trh31_costume:make_button_text
        IF_SETHIDE(true, comp(1544, 80));  // trh31_costume:make_button_disabled_layer
        string0 = "You already own this costume. Click to recover lost pieces.";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), comp(1544, 10));  // trh31_costume:make_layer
    } else {
        IF_SETTEXT("Make", comp(1544, 82));  // trh31_costume:make_button_text
        if ((INV_TOTAL(93 as inv, 32440 as obj) < struct_getparam(int1, 4600))) {
            IF_SETHIDE(false, comp(1544, 80));  // trh31_costume:make_button_disabled_layer
            string0 = "You don't have enough ghostweave to make this costume.";
            IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), comp(1544, 80));  // trh31_costume:make_button_disabled_layer
        } else {
            IF_SETHIDE(true, comp(1544, 80));  // trh31_costume:make_button_disabled_layer
            string0 = `Make this costume from ${TOSTRING_LOCALISED(struct_getparam(int1, 4600), 1)} ghostweave. You will need 5 free inventory spaces.`;
            IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), comp(1544, 10));  // trh31_costume:make_layer
        };
    };
    return;
}