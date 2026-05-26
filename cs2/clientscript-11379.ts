//
function script11379(): void {
    var int0 = comp(1619, 4);
    var string0 = "";
    var int1 = 0;
    var int2 = 0;
    var int3 = script10495(7);
    var int4 = script10495(8);
    var int5 = script10495(2);
    var int6 = (IF_GETWIDTH(int0) / 2);
    IF_SETCOLOUR(int5, comp(1619, 5));
    CC_DELETEALL(int0);
    CC_DELETEALL(comp(1619, 3));
    while ((int1 < ENUM_GETOUTPUTCOUNT(10000 as cs2enum))) {
        int2 = enum_getvalue(0, 0, 9999 as cs2enum, int1);
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION((int6 * MODULO(int1, 2)), (20 * (int1 / 2)), 0, 0);
        CC_SETSIZE(int6, 20, 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 0);
        if ((TESTBIT(varbitplayer_27634, int2) == 1)) {
            CC_SETCOLOUR(65280);
            string0 = "You have found and added this fish to the aquarium.";
        } else if ((TESTBIT(varbitplayer_27603, int2) == 1)) {
            CC_SETCOLOUR(16777215);
            string0 = "You have found this fish, but it still needs to be added to your aquarium.";
        } else {
            CC_SETCOLOUR(7368816);
            string0 = "You still need to find this fish.";
        };
        script3537(string0);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXT(enum_getvalue(0, 36, 10000 as cs2enum, int2));
        int1 = (int1 + 1);
    };
    CC_CREATE(int0, 9, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, ((20 * ((int1 + MODULO(int1, 2)) / 2)) - 2), 0, 0);
    CC_SETCOLOUR(int4);
    CC_SETSIZE(1, 0, 1, 0);
    CC_CREATE(int0, 9, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, ((20 * ((int1 + MODULO(int1, 2)) / 2)) - 1), 0, 0);
    CC_SETCOLOUR(int3);
    CC_SETSIZE(1, 0, 1, 0);
    int1 = 0;
    while ((int1 < 4)) {
        CC_CREATE(comp(1619, 3), 4, int1);
        CC_SETPOSITION((int6 * MODULO(int1, 2)), (20 * (int1 / 2)), 0, 0);
        CC_SETSIZE(int6, 20, 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXTSHADOW(true);
        switch (int1) {
            case 0: {
                CC_SETTEXT("Found 1 prawn ball");
                if ((varbitplayer_27660 >= 1)) {
                    CC_SETCOLOUR(16777215);
                } else {
                    CC_SETCOLOUR(7368816);
                };
                break;
            }
            case 1: {
                CC_SETTEXT("Found 20 prawn balls");
                if ((varbitplayer_27660 >= 20)) {
                    CC_SETCOLOUR(16777215);
                } else {
                    CC_SETCOLOUR(7368816);
                };
                break;
            }
            case 2: {
                CC_SETTEXT("Found 100 prawn balls");
                if ((varbitplayer_27660 >= 100)) {
                    CC_SETCOLOUR(16777215);
                } else {
                    CC_SETCOLOUR(7368816);
                };
                break;
            }
            case 3: {
                CC_SETTEXT("Found 200 prawn balls");
                if ((varbitplayer_27660 >= 200)) {
                    CC_SETCOLOUR(16777215);
                } else {
                    CC_SETCOLOUR(7368816);
                };
                break;
            }
        };
        int1 = (int1 + 1);
    };
    CC_CREATE(comp(1619, 3), 4, IF_GETNEXTSUBID(comp(1619, 3)));
    CC_SETPOSITION(0, (20 * ((int1 + MODULO(int1, 2)) / 2)), 0, 0);
    CC_SETSIZE(0, 20, 1, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTSHADOW(true);
    if ((varbitplayer_27660 >= 200)) {
        CC_SETTEXT("Prawn balls found: 200+");
    } else {
        CC_SETTEXT(`Prawn balls found: ${inttostring(varbitplayer_27660, 10)}`);
    };
    return;
}