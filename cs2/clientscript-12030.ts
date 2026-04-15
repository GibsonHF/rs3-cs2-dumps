//
function script12030(int0: component, int1: int): void {
    var int2 = script12023(int0);
    var int3 = script12024(int0);
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int4 = 0;
    [string0, string1] = IGNORE_GETNAME(int1);
    if ((strcmp(string1, "") != 0)) {
        int4 = 1;
    };
    if ((CC_FIND(int2, int1) == 1)) {
        CC_SETONTIMER(callback());
        CC_SETOPBASE(`<col=ffffff>${string0}`);
        if ((int4 == 1)) {
            string0 = `      ${string0}`;
            string2 = `Last known as:<br>${string1}`;
        } else {
            string2 = string0;
        };
        CC_SETCOLOUR(10787197);
        if ((script6431() == false)) {
            CC_SETTEXTFONT(26 as fontmetrics);
        } else {
            CC_SETTEXTFONT(32 as fontmetrics);
        };
        CC_SETTEXTSHADOW(true);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETTEXT(string0);
        if ((strcmp(IGNORE_GETNOTES(int1), "") != 0)) {
            CC_SETOP(1, "Edit Note");
            string2 = `${string2}<br>${IGNORE_GETNOTES(int1)}`;
        } else {
            CC_SETOP(1, "Add Note");
        };
        CC_SETOP(2, "Remove");
        IGNORE_GETNAME_UNFILTERED(130, -2147483644, int1);
        CC_SETONOP(callback());
        CC_SETONMOUSEREPEAT(callback(script3876, string2, -2147483645, -2147483643));
        cc_setparam(7540, 2);
        CC_SETPARAM_STRING(4277, string2);
        CC_SETHIDE(0);
    };
    if ((CC_FIND(int3, int1) == 1)) {
        CC_SETHIDE(false);
        CC_SETGRAPHIC(2313 as graphic);
        if ((int4 == 0)) {
            cc_setparam(5438, 0);
            CC_SETHIDE(true);
        } else {
            cc_setparam(5438, 1);
        };
    };
    return;
}