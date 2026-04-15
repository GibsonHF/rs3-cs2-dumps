//
function script10880(int0: int, int1: int, int2: unknown_int, int3: unknown_int, string0: string): void {
    var int4 = script10495(3);
    var string1 = "";
    if ((int3 == 1)) {
        int4 = 16777215;
    };
    CC_CREATE(comp(1577, 5), 4, (int1 - 1));
    CC_SETSIZE(0, 25, 1, 0);
    CC_SETPOSITION(0, (26 * (int1 - 1)), 1, 0);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(int4);
    CC_SETTEXT(string0);
    CC_CREATE(comp(1577, 4), 4, (int1 - 1));
    CC_SETSIZE(0, 25, 1, 0);
    CC_SETPOSITION(0, (26 * (int1 - 1)), 1, 0);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(int4);
    CC_SETTEXT(TOSTRING_LOCALISED(int0, 1));
    CC_CREATE(comp(1577, 2), 4, (int1 - 1));
    CC_SETSIZE(0, 25, 1, 0);
    CC_SETPOSITION(0, (26 * (int1 - 1)), 1, 0);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(int4);
    CC_SETTEXT(TOSTRING_LOCALISED((int0 / 3), 1));
    CC_CREATE(comp(1577, 3), 5, (int1 - 1));
    CC_SETSIZE(25, 25, 0, 0);
    switch (int2) {
        case 0: {
            CC_SETGRAPHIC(197 as graphic);
            string1 = "Most of the damage done by this player was done with melee.";
            break;
        }
        case 1: {
            CC_SETGRAPHIC(200 as graphic);
            string1 = "Most of the damage done by this player was done with ranged.";
            break;
        }
        case 2: {
            CC_SETGRAPHIC(202 as graphic);
            string1 = "Most of the damage done by this player was done with magic.";
            break;
        }
        case 3: {
            CC_SETGRAPHIC(30934 as graphic);
            string1 = "Most of the damage done by this player was done with necromancy.";
            break;
        }
    };
    CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
    CC_SETPOSITION(0, (26 * (int1 - 1)), 1, 0);
    return;
}