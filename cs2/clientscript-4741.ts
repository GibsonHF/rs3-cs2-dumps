//
function script4741(): void {
    var int0 = 0;
    var int1 = -1 as obj;
    var int2 = -1 as inv;
    var string0 = "Store";
    var string1 = "store";
    if (((varbitplayer_3080 < 99999) && (varbitplayer_3079 != 0))) {
        int2 = enum_getvalue(0, 39, 3879 as cs2enum, varbitplayer_3079);
        if ((CC_FIND(comp(1144, 0), varbitplayer_3080) == 1)) {  // wom2_inventory_display:items
            int0 = INV_GETNUM(int2, varbitplayer_3080);
            if (((int0 > 0) || (int2 == 95 as inv))) {
                int1 = INV_GETOBJ(int2, varbitplayer_3080);
                if ((int1 != -1 as obj)) {
                    if ((script6551(int1) == 0)) {
                        string0 = "Delete";
                        string1 = "delete";
                    };
                    IF_SETHIDE(false, comp(1144, 6));  // wom2_inventory_display:confirm_buy
                    if ((int0 <= 1)) {
                        IF_SETTEXT(`Are you sure you want to ${string1} ${OC_NAME(int1)}?`, comp(1144, 37));  // wom2_inventory_display:wom2_confirm_msg
                    } else {
                        IF_SETTEXT(`Are you sure you want to ${string1} ${OC_NAME(int1)}</col> (<col=FFFFFF>${inttostring(int0, 10)} items</col>)?`, comp(1144, 37));  // wom2_inventory_display:wom2_confirm_msg
                    };
                    IF_SETOBJECT(int1, int0, comp(1144, 18));  // wom2_inventory_display:confirm_delete_model
                    IF_SETTEXT(OC_NAME(int1), comp(1144, 14));  // wom2_inventory_display:wom2_item_name
                    IF_SETTEXT(string0, comp(1144, 36));  // wom2_inventory_display:wom2_delete_button_text
                };
            };
        };
    };
    return;
}