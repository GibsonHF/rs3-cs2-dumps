//
function script18127(int0: struct, int1: int, int2: component, int3: struct, int4: int): void {
    var int5 = struct_getparam(int3, 8238);
    var int4 = MIN(int4, int5);
    var int6 = MAX((int5 - int4), 0);
    var string0 = "";
    var string1 = "";
    var int7 = 0;
    if ((int6 == 0)) {
        if ((CC_FIND(int2, script16237(int1, 0, int0)) == 1)) {
            CC_SETOP(1, "Claim");
            CC_SETOPCURSOR(1, 46);
        };
        if ((CC_FIND(int2, script16237(int1, 4, int0)) == 1)) {
            CC_SETTEXT("Ready to claim!");
            CC_SETTEXTFONT(57 as fontmetrics);
        };
        if ((CC_FIND(int2, script16237(int1, 8, int0)) == 1)) {
            CC_SETHIDE(true);
        };
    } else {
        if ((CC_FIND(int2, script16237(int1, 0, int0)) == 1)) {
            CC_SETOP(1, "Preview");
            CC_SETOPCURSOR(1, 46);
        };
        if ((CC_FIND(int2, script16237(int1, 4, int0)) == 1)) {
            string0 = struct_getparam(int3, 8564);
            string0 = script2332(string0, "#", TOSTRING_LOCALISED(int6, 1));
            string1 = script4583(int6, script17844(int0, 2), script17844(int0, 1));
            string0 = script2332(string0, "%", string1);
            CC_SETTEXT(string0);
        };
    };
    if ((CC_FIND(int2, script16237(int1, 6, int0)) == 1)) {
        int7 = ((int4 * 100) / int5);
        CC_SETSIZE(((int7 * (170 - 4)) / 100), (22 - 4), 0, 0);
    };
    if ((CC_FIND(int2, script16237(int1, 7, int0)) == 1)) {
        CC_SETTEXT(`${TOSTRING_LOCALISED(int4, 1)}/${TOSTRING_LOCALISED(int5, 1)}`);
    };
    return;
}