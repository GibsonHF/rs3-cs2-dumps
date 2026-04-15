//
function script12878(int0: struct): void {
    var int1 = (varbitplayer_34279 * struct_getparam(int0, 6144));
    var int2 = (struct_getparam(int0, 6143) * struct_getparam(int0, 6144));
    var string0 = "Inactive";
    var string1 = "You can use an event extender token to increase your gathering limit per day. These are available for purchase from the event store.";
    if ((varbitplayer_34281 > 0)) {
        int2 = (int2 * 2);
        string0 = "<col=00C800>Active";
        if ((varbitplayer_34281 == 1)) {
            string1 = "Your gathering limit extender will expire at the end of the day.";
        } else {
            string1 = `Your gathering limit extender will expire in ${inttostring(varbitplayer_34281, 10)} days.`;
        };
    };
    if ((CC_FIND(comp(1802, 64), 3) == 1)) {
        CC_SETTEXT(string0);
        if ((struct_getparam(int0, 6644) == 0)) {
            CC_SETOP(1, "Purchase");
            CC_SETOPCURSOR(1, 46);
            CC_SETONOP(callback(script13257));
            CC_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -2147483643));
        };
    };
    if ((CC_FIND(comp(1802, 64), 1) == 1)) {
        if ((struct_getparam(int0, 6644) == 0)) {
            CC_SETTEXT(`${TOSTRING_LOCALISED(int1, 1)}/${TOSTRING_LOCALISED(int2, 1)}`);
        } else {
            CC_SETTEXT("Limitless");
        };
    };
    return;
}