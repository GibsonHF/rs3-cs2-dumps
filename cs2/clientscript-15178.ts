//
function script15178(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, string0: string): void {
    if (((int0 == -1 as obj) || (int1 <= 0))) {
        return;
    };
    IF_SETTEXT(OC_NAME(int0), comp(653, 92));  // event_crafting:info_object_name
    IF_SETOPBASE(OC_NAME(int0), comp(653, 102));  // event_crafting:give_button
    IF_SETOPBASE(OC_NAME(int7), comp(653, 104));  // event_crafting:skip_button
    IF_SETHIDE(true, comp(653, 89));  // event_crafting:info_object_graphic
    IF_SETHIDE(false, comp(653, 90));  // event_crafting:info_object_icon_holder
    IF_SETOBJECT(int0, int1, comp(653, 277));  // event_crafting:info_object
    IF_SETTEXT(string0, comp(653, 93));  // event_crafting:info_description_text
    IF_SETTEXT(`${TOSTRING_LOCALISED(int2, 1)} available in your inventory.`, comp(653, 99));  // event_crafting:info_stats_inventory_text
    if ((item_getparam(int0, 59) == 1)) {
        IF_SETTEXT(`${OC_NAME(int0)} isn't bankable.`, comp(653, 278));  // event_crafting:info_stats_bank_text
    } else {
        IF_SETTEXT(`${TOSTRING_LOCALISED(int3, 1)} available in your bank.`, comp(653, 278));  // event_crafting:info_stats_bank_text
    };
    IF_SETOBJECT(int0, int5, comp(653, 281));  // event_crafting:info_stats_required_graphic
    IF_SETOBJECT_NONUM(int7, 0, comp(653, 283));  // event_crafting:info_stats_skip_price_graphic
    var int8 = 0;
    if ((int6 == 1)) {
        if ((int5 != int1)) {
            IF_SETTEXT(`You deposited ${TOSTRING_LOCALISED(int5, 1)} and skipped the rest!`, comp(653, 280));  // event_crafting:info_stats_required_text
            IF_SETTEXT("You've already skipped this ingredient!", comp(653, 282));  // event_crafting:info_stats_skip_price_text
        } else {
            int8 = script15125(int0, (int1 - int5));
            IF_SETTEXT(`You've deposited ${TOSTRING_LOCALISED(int5, 1)}/${TOSTRING_LOCALISED(int1, 1)}`, comp(653, 280));  // event_crafting:info_stats_required_text
            if ((int6 == 1)) {
                IF_SETTEXT("You've already completed this ingredient!", comp(653, 282));  // event_crafting:info_stats_skip_price_text
            } else {
                IF_SETTEXT(`You can skip the remainder of this ingredient for : ${TOSTRING_LOCALISED(int8, 1)} x ${OC_NAME(int7)}`, comp(653, 282));  // event_crafting:info_stats_skip_price_text
            };
        };
    } else {
        int8 = script15125(int0, (int1 - int5));
        IF_SETTEXT(`You've deposited ${TOSTRING_LOCALISED(int5, 1)}/${TOSTRING_LOCALISED(int1, 1)}`, comp(653, 280));  // event_crafting:info_stats_required_text
        if ((int6 == 1)) {
            IF_SETTEXT("You've already completed this ingredient!", comp(653, 282));  // event_crafting:info_stats_skip_price_text
        } else {
            IF_SETTEXT(`You can skip the remainder of this ingredient for : ${TOSTRING_LOCALISED(int8, 1)} x ${OC_NAME(int7)}`, comp(653, 282));  // event_crafting:info_stats_skip_price_text
        };
    };
    var int9 = 0;
    var string1 = "";
    if ((int0 == 995 as obj)) {
        int9 = 1;
        IF_SETGRAPHIC(11633 as graphic, comp(653, 285));  // event_crafting:info_stats_misc_icon
        string1 = "coin pouch";
    } else if ((int0 == 50474 as obj)) {
        int9 = 1;
        IF_SETGRAPHIC(11989 as graphic, comp(653, 285));  // event_crafting:info_stats_misc_icon
        string1 = "currency pouch";
    } else if ((script2551(int0) == 1)) {
        int9 = 1;
        IF_SETGRAPHIC(13208 as graphic, comp(653, 285));  // event_crafting:info_stats_misc_icon
        string1 = "metal bank";
    } else if ((enum_hasoutput(33, 14058 as cs2enum, int0) == 1)) {
        int9 = 1;
        IF_SETGRAPHIC(13220 as graphic, comp(653, 285));  // event_crafting:info_stats_misc_icon
        string1 = "material storage";
    };
    if ((int9 == 1)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED(int4, 1)} available in your ${string1}.`, comp(653, 284));  // event_crafting:info_stats_misc_text
    };
    IF_SETHIDE(script6430(int9), comp(653, 98));  // event_crafting:info_stats_misc
    return;
}