//
function script5271(int0: component, int1: coordgrid, int2: int, int3: int, string0: string): int {
    var string1 = "";
    if ((int1 == -1 as coordgrid)) {
        string1 = "Your coord";
    } else if ((int1 == pos(3,255,255,63,62))) {
        string1 = "Safe Clanwars";
    } else {
        string1 = script2055(int1);
    };
    var string2 = " - ";
    if ((IF_GETWIDTH(int0) < 260)) {
        string2 = "<br>";
    };
    var string3 = "max";
    if ((int2 >= 0)) {
        string3 = inttostring(int2, 10);
    };
    CC_CREATE(int0, 4, int3);
    CC_SETTEXT(`${string0}${string2}@ ${string1} - Max: ${string3}`);
    CC_SETTEXTSHADOW(true);
    CC_SETCOLOUR(13421772);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
    CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 13421772));
    CC_SETOP(1, "Spawn");
    CC_SETOP(2, "Pick spawn number");
    CC_SETOP(3, "Kill");
    CC_CREATE(int0, 3, (int3 + 1));
    CC_SETCOLOUR(16777215);
    CC_SETTRANS(226);
    CC_SETFILL(1);
    return (int3 + 2);
}