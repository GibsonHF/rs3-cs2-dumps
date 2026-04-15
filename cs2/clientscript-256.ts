//
function script256(): void {
    var string0 = "";
    if (((((((((varclient_1111 == -1) || (varclient_1113 == -1)) || (varclient_1112 == -1)) || (varclient_1114 == -1)) || (varclient_1115 == -1)) || (varclient_1116 == -1)) || (varclient_1117 == -1)) || (varclient_1927 == -1))) {
        return;
    };
    var int0 = (IF_GETNEXTSUBID(comp(919, 36)) * (18 + 4));
    var int1 = ((IF_GETNEXTSUBID(comp(919, 36)) + 1) * (18 + 4));
    IF_SETSCROLLSIZE(0, int1, comp(919, 34));
    IF_SETSIZE(IF_GETWIDTH(comp(919, 27)), int1, 0, 0, comp(919, 27));
    CC_CREATE(comp(919, 27), 4, IF_GETNEXTSUBID(comp(919, 27)));
    if ((varclient_1927 >= 1)) {
        CC_SETCOLOUR(15849648);
    } else {
        CC_SETCOLOUR(10789991);
    };
    CC_SETSIZE(16384, 18, 2, 0);
    CC_SETPOSITION(0, int0, 0, 2);
    CC_SETTEXTFONT(66 as fontmetrics);
    CC_SETTEXT(script1668(varclient_1111));
    CC_SETTEXTALIGN(1, 1, 0);
    string0 = `${CC_GETTEXT()}: The type of fish`;
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    IF_SETSIZE(IF_GETWIDTH(60227620), int1, 0, 0, 60227620);
    CC_CREATE(60227620, 4, IF_GETNEXTSUBID(60227620));
    if ((varclient_1927 >= 1)) {
        CC_SETCOLOUR(15849648);
    } else {
        CC_SETCOLOUR(10789991);
    };
    CC_SETSIZE(16384, 18, 2, 0);
    CC_SETPOSITION(0, int0, 0, 2);
    CC_SETTEXTFONT(66 as fontmetrics);
    CC_SETTEXT(script276(varclient_1113));
    CC_SETTEXTALIGN(1, 1, 0);
    string0 = `${CC_GETTEXT()}: The habitat in which you caught the fish`;
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    IF_SETSIZE(IF_GETWIDTH(60227621), int1, 0, 0, 60227621);
    CC_CREATE(60227621, 4, IF_GETNEXTSUBID(60227621));
    if ((varclient_1927 >= 1)) {
        CC_SETCOLOUR(15849648);
    } else {
        CC_SETCOLOUR(10789991);
    };
    CC_SETSIZE(16384, 18, 2, 0);
    CC_SETPOSITION(0, int0, 0, 2);
    CC_SETTEXTFONT(66 as fontmetrics);
    CC_SETTEXT(inttostring(varclient_1112, 10));
    CC_SETTEXTALIGN(1, 1, 0);
    string0 = `${CC_GETTEXT()}: The weight of the fish`;
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    IF_SETSIZE(IF_GETWIDTH(60227622), int1, 0, 0, 60227622);
    CC_CREATE(60227622, 5, IF_GETNEXTSUBID(60227622));
    CC_SETSIZE(20, 20, 0, 0);
    CC_SETPOSITION(0, int0, 1, 2);
    var int2 = -1;
    switch (varclient_1114) {
        case 1: {
            int2 = 15658 as obj;
            string0 = "Worm";
            break;
        }
        case 2: {
            int2 = 15659 as obj;
            string0 = "Maggot";
            break;
        }
        case 3: {
            int2 = 15662 as obj;
            string0 = "Cricket";
            break;
        }
        case 4: {
            int2 = 15663 as obj;
            string0 = "Locust";
            break;
        }
        case 5: {
            int2 = 15661 as obj;
            string0 = "Crayfish";
            break;
        }
        case 6: {
            int2 = 15660 as obj;
            string0 = "Shrimp";
            break;
        }
        case 7: {
            int2 = 15664 as obj;
            string0 = "Green moth";
            break;
        }
        case 8: {
            int2 = 15665 as obj;
            string0 = "Grey moth";
            break;
        }
    };
    if ((varclient_1927 < 2)) {
        CC_SETOBJECT_NONUM(int2, 0);
        string0 = `${string0}: The bait you used to catch the fish`;
    } else {
        string0 = "You do not know which bait was used to catch this big fish";
    };
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    IF_SETSIZE(IF_GETWIDTH(60227623), int1, 0, 0, 60227623);
    CC_CREATE(60227623, 4, IF_GETNEXTSUBID(60227623));
    if ((varclient_1927 >= 1)) {
        CC_SETCOLOUR(15849648);
    } else {
        CC_SETCOLOUR(10789991);
    };
    CC_SETSIZE(16384, 18, 2, 0);
    CC_SETPOSITION(0, int0, 0, 2);
    CC_SETTEXTFONT(66 as fontmetrics);
    if ((varclient_1927 < 2)) {
        CC_SETTEXT(script278(varclient_1115));
        string0 = `${CC_GETTEXT()}: The hook you used to catch the fish`;
    } else {
        string0 = "You do not know which hook was used to catch this big fish";
    };
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    IF_SETSIZE(IF_GETWIDTH(60227624), int1, 0, 0, 60227624);
    CC_CREATE(60227624, 4, IF_GETNEXTSUBID(60227624));
    if ((varclient_1927 >= 1)) {
        CC_SETCOLOUR(15849648);
    } else {
        CC_SETCOLOUR(10789991);
    };
    CC_SETSIZE(16384, 18, 2, 0);
    CC_SETPOSITION(0, int0, 0, 2);
    CC_SETTEXTFONT(66 as fontmetrics);
    if ((varclient_1927 < 2)) {
        CC_SETTEXT(inttostring(varclient_1116, 10));
        string0 = `${CC_GETTEXT()}: The distance from the shore where you caught the fish`;
    } else {
        string0 = "You do not know which weights were used to catch this big fish";
    };
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    IF_SETSIZE(IF_GETWIDTH(60227625), int1, 0, 0, 60227625);
    CC_CREATE(60227625, 4, IF_GETNEXTSUBID(60227625));
    if ((varclient_1927 >= 1)) {
        CC_SETCOLOUR(15849648);
    } else {
        CC_SETCOLOUR(10789991);
    };
    CC_SETSIZE(16384, 18, 2, 0);
    CC_SETPOSITION(0, int0, 0, 2);
    CC_SETTEXTFONT(66 as fontmetrics);
    if ((varclient_1927 < 2)) {
        CC_SETTEXT(`${inttostring(varclient_1117, 10)}%`);
    };
    CC_SETTEXTALIGN(1, 1, 0);
    if ((varclient_1117 == 100)) {
        string0 = `${CC_GETTEXT()}: You are catching the highest-quality fish of this type at this habitat.`;
    } else {
        string0 = `${CC_GETTEXT()}: The quality of the fish you caught. Selecting a more suitable habitat, bait, hook and/or weights increases the rating of catches.`;
    };
    if ((varclient_1927 == 2)) {
        string0 = "You helped a contestant to catch this big fish";
    };
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    if ((IF_GETHEIGHT(60227614) == 215)) {
        script7791(comp(919, 35), comp(919, 34));
    };
    varclient_1111 = -1;
    varclient_1113 = -1;
    varclient_1112 = -1;
    varclient_1114 = -1;
    varclient_1115 = -1;
    varclient_1116 = -1;
    varclient_1117 = -1;
    varclient_1927 = -1;
    return;
}