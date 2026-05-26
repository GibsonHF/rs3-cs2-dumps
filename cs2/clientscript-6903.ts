//
function script6903(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    var string0 = "Friendly";
    var string1 = "Staked";
    var int7 = (MAX(STRINGWIDTH(string0, 26), STRINGWIDTH(string1, 26)) + 24);
    IF_SETSIZE(int7, 0, 0, 1, int0);
    IF_SETSIZE(int7, 0, 0, 1, int1);
    CC_CREATE(int0, 5, 0);
    CC_CREATE[1](int1, 5, 0);
    CC_SETSIZE(12, 12, 0, 0);
    CC_SETSIZE[1](12, 12, 0, 0);
    CC_SETPOSITION(4, 0, 0, 1);
    CC_SETPOSITION[1](4, 0, 0, 1);
    CC_CREATE(int0, 4, 1);
    CC_CREATE[1](int1, 4, 1);
    CC_SETSIZE(24, 0, 1, 1);
    CC_SETSIZE[1](24, 0, 1, 1);
    CC_SETPOSITION(4, 0, 2, 1);
    CC_SETPOSITION[1](4, 0, 2, 1);
    CC_SETTEXTFONT(26);
    CC_SETTEXTFONT[1](26);
    CC_SETTEXTSHADOW(1);
    CC_SETTEXTSHADOW[1](1);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETTEXTALIGN[1](0, 1, 0);
    CC_SETTEXT(string0);
    CC_SETTEXT[1](string1);
    IF_SETOP(1, "Select", int0);
    IF_SETOP(1, "Select", int1);
    script6905(0, int0, int1, int2, int3, int4, int5, int6);
    return;
}