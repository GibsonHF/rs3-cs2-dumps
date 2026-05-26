//
function script15178(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, string0: string): void {
    if (((int0 == -1) || (int1 <= 0))) {
        return;
    };
    IF_SETTEXT(OC_NAME(int0), 42795100);
    IF_SETOPBASE(OC_NAME(int0), 42795110);
    IF_SETOPBASE(OC_NAME(int7), 42795112);
    IF_SETHIDE(1, 42795097);
    IF_SETHIDE(0, 42795098);
    IF_SETOBJECT(int0, int1, 42795285);
    IF_SETTEXT(string0, 42795101);
    IF_SETTEXT(`${TOSTRING_LOCALISED(int2, 1)} available in your inventory.`, 42795107);
    if ((item_getparam(int0, 59) == 1)) {
        IF_SETTEXT(`${OC_NAME(int0)} isn't bankable.`, 42795286);
    } else {
        IF_SETTEXT(`${TOSTRING_LOCALISED(int3, 1)} available in your bank.`, 42795286);
    };
    IF_SETOBJECT(int0, int5, 42795289);
    IF_SETOBJECT_NONUM(int7, 0, 42795291);
    var int8 = 0;
    if (((int6 == 1) && (int5 != int1))) {
        IF_SETTEXT(`You deposited ${TOSTRING_LOCALISED(int5, 1)} and skipped the rest!`, 42795288);
        IF_SETTEXT("You've already skipped this ingredient!", 42795290);
    } else {
        int8 = script15125(int0, (int1 - int5));
        IF_SETTEXT(`You've deposited ${TOSTRING_LOCALISED(int5, 1)}/${TOSTRING_LOCALISED(int1, 1)}`, 42795288);
        if ((int6 == 1)) {
            IF_SETTEXT("You've already completed this ingredient!", 42795290);
        } else {
            IF_SETTEXT(`You can skip the remainder of this ingredient for : ${TOSTRING_LOCALISED(int8, 1)} x ${OC_NAME(int7)}`, 42795290);
        };
    };
    var int9 = 0;
    var string1 = "";
    if ((int0 == 995)) {
        int9 = 1;
        stack(11633);
        stack(42795293);
        IF_SETGRAPHIC();
        string1 = "coin pouch";
    } else if ((int0 == 50474)) {
        int9 = 1;
        stack(11989);
        stack(42795293);
        IF_SETGRAPHIC();
        string1 = "currency pouch";
    } else if ((script2551(int0) == 1)) {
        int9 = 1;
        stack(13208);
        stack(42795293);
        IF_SETGRAPHIC();
        string1 = "metal bank";
    } else if ((enum_hasoutput(33, 14058, int0) == 1)) {
        int9 = 1;
        stack(13220);
        stack(42795293);
        IF_SETGRAPHIC();
        string1 = "material storage";
    };
    if ((int9 == 1)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED(int4, 1)} available in your ${string1}.`, 42795292);
    };
    IF_SETHIDE(script6430(int9), 42795106);
    return;
}