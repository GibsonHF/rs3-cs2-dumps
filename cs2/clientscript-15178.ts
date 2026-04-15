//
function script15178(int0: obj, int1: int, int2: int, int3: int, int4: int, int5: int, int6: unknown_int, int7: obj, string0: string): void {
    if (((int0 == -1 as obj) || (int1 <= 0))) {
        return;
    };
    IF_SETTEXT(OC_NAME(int0), comp(653, 92));
    IF_SETOPBASE(OC_NAME(int0), comp(653, 102));
    IF_SETOPBASE(OC_NAME(int7), comp(653, 104));
    IF_SETHIDE(true, comp(653, 89));
    IF_SETHIDE(false, comp(653, 90));
    IF_SETOBJECT(int0, int1, comp(653, 277));
    IF_SETTEXT(string0, comp(653, 93));
    IF_SETTEXT(`${TOSTRING_LOCALISED(int2, 1)} available in your inventory.`, comp(653, 99));
    if ((item_getparam(int0, 59) == 1)) {
        IF_SETTEXT(`${OC_NAME(int0)} isn't bankable.`, comp(653, 278));
    } else {
        IF_SETTEXT(`${TOSTRING_LOCALISED(int3, 1)} available in your bank.`, comp(653, 278));
    };
    IF_SETOBJECT(int0, int5, comp(653, 281));
    IF_SETOBJECT_NONUM(int7, 0, comp(653, 283));
    var int8 = 0;
    if (((int6 == 1) && (int5 != int1))) {
        IF_SETTEXT(`You deposited ${TOSTRING_LOCALISED(int5, 1)} and skipped the rest!`, comp(653, 280));
        IF_SETTEXT("You've already skipped this ingredient!", comp(653, 282));
    } else {
        int8 = script15125(int0, (int1 - int5));
        IF_SETTEXT(`You've deposited ${TOSTRING_LOCALISED(int5, 1)}/${TOSTRING_LOCALISED(int1, 1)}`, comp(653, 280));
        if ((int6 == 1)) {
            IF_SETTEXT("You've already completed this ingredient!", comp(653, 282));
        } else {
            IF_SETTEXT(`You can skip the remainder of this ingredient for : ${TOSTRING_LOCALISED(int8, 1)} x ${OC_NAME(int7)}`, comp(653, 282));
        };
    };
    var int9 = false;
    var string1 = "";
    if ((int0 == 995 as obj)) {
        int9 = true;
        stack(11633);
        stack(42795293);
        IF_SETGRAPHIC();
        string1 = "coin pouch";
    } else if ((int0 == 50474 as obj)) {
        int9 = true;
        stack(11989);
        stack(42795293);
        IF_SETGRAPHIC();
        string1 = "currency pouch";
    } else if ((script2551(int0) == 1)) {
        int9 = true;
        stack(13208);
        stack(42795293);
        IF_SETGRAPHIC();
        string1 = "metal bank";
    } else if ((enum_hasoutput(33, 14058 as cs2enum, int0) == 1)) {
        int9 = true;
        stack(13220);
        stack(42795293);
        IF_SETGRAPHIC();
        string1 = "material storage";
    };
    if ((int9 == true)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED(int4, 1)} available in your ${string1}.`, comp(653, 284));
    };
    IF_SETHIDE(script6430(int9), comp(653, 98));
    return;
}