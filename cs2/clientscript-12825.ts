//
function script12825(): void {
    var int0 = 0;
    var int1 = 1;
    var int2 = ENUM_GETOUTPUTCOUNT(11785 as cs2enum);
    while ((int1 <= int2)) {
        if ((int1 != 5)) {
            int0 = (int0 + ENUM_GETOUTPUTCOUNT(enum_getvalue(0, 26, 11785 as cs2enum, int1)));
        };
        int1 = (int1 + 1);
    };
    var int3 = script12823(2, 1);
    IF_SETTEXT(`${inttostring(int3, 10)}/${inttostring(int0, 10)}`, comp(1798, 82));
    script12826(2, int0, int3);
    int1 = 1;
    int0 = 0;
    int0 = ENUM_GETOUTPUTCOUNT(11791 as cs2enum);
    int3 = script12823(2, 0);
    IF_SETTEXT(`${inttostring(int3, 10)}/${inttostring(int0, 10)}`, comp(1798, 93));
    script12826(1, int0, int3);
    int1 = 1;
    int0 = 0;
    int2 = ENUM_GETOUTPUTCOUNT(11783 as cs2enum);
    while ((int1 <= int2)) {
        int0 = (int0 + ENUM_GETOUTPUTCOUNT(enum_getvalue(0, 26, 11783 as cs2enum, int1)));
        int1 = (int1 + 1);
    };
    int3 = script12823(3, 0);
    IF_SETTEXT(`${inttostring(int3, 10)}/${inttostring(int0, 10)}`, comp(1798, 94));
    script12826(3, int0, int3);
    if ((script12824(2, 1) == 16)) {
        stack(28475);
        stack(117833800);
        IF_SETGRAPHIC();
    };
    if ((script12824(2, 2) == 16)) {
        stack(28483);
        stack(117833801);
        IF_SETGRAPHIC();
    };
    if ((script12824(2, 3) == 16)) {
        stack(28473);
        stack(117833802);
        IF_SETGRAPHIC();
    };
    if ((script12824(2, 4) == 16)) {
        stack(28479);
        stack(117833803);
        IF_SETGRAPHIC();
    };
    if ((script12824(2, 5) == 10)) {
        stack(28477);
        stack(117833804);
        IF_SETGRAPHIC();
    };
    if ((script12824(3, 1) == 10)) {
        stack(28481);
        stack(117833805);
        IF_SETGRAPHIC();
    };
    var int4 = 0;
    var int5 = 276;
    if ((varbitplayer_33182 > 0)) {
        IF_SETTEXT(`${inttostring(varbitplayer_33183, 10)}/${inttostring(varbitplayer_33184, 10)}`, comp(1798, 22));
        if ((varbitplayer_33183 != varbitplayer_33184)) {
            int4 = ((276 * 100) / varbitplayer_33184);
            int5 = ((int4 * varbitplayer_33183) / 100);
        };
        IF_SETSIZE(int5, 21, 0, 0, comp(1798, 20));
    } else {
        IF_SETHIDE(true, comp(1798, 11));
    };
    script12898();
    if ((varbitplayer_33205 != 127)) {
        script13255(varbitplayer_33205, comp(1798, 137));
        if ((varbitplayer_33208 <= 0)) {
            IF_SETHIDE(false, comp(1798, 143));
        };
    };
    if ((varbitplayer_33209 != 127)) {
        script13255(varbitplayer_33209, comp(1798, 138));
        if ((varbitplayer_33212 <= 0)) {
            IF_SETHIDE(false, comp(1798, 144));
        };
    };
    if ((varbitplayer_33213 != 127)) {
        script13255(varbitplayer_33213, comp(1798, 139));
        if ((varbitplayer_33216 <= 0)) {
            IF_SETHIDE(false, comp(1798, 145));
        };
    };
    if ((varbitplayer_33217 != 127)) {
        script13255(varbitplayer_33217, comp(1798, 140));
        if ((varbitplayer_33220 <= 0)) {
            IF_SETHIDE(false, comp(1798, 146));
        };
    };
    if ((varbitplayer_33955 != 127)) {
        script13255(varbitplayer_33955, comp(1798, 141));
        if ((varbitplayer_33958 <= 0)) {
            IF_SETHIDE(false, comp(1798, 147));
        };
    };
    if ((varbitplayer_33959 != 127)) {
        script13255(varbitplayer_33959, comp(1798, 142));
        if ((varbitplayer_33962 <= 0)) {
            IF_SETHIDE(false, comp(1798, 148));
        };
    };
    IF_SETTEXT("Waiko is an island built on trade, both with the east and the west.<br><br>We only accept two currencies here - hard work and chimes! Well, three if you count taijitu.<br><br>There are many ways for visitors to earn chimes, and there'll always be a willing buyer for your goods in Waiko market.<br><br>To get yourself a start, we'd recommend either chopping bamboo or fishing for tarpon right here on Waiko. They're not great for earning experience, but you should get a nice amount of chimes for gathering those resources. <br><br>A wider range of opportunities exist on other Arc islands, especially within the uncharted islands! Finding these rarer resources is where you'll gain some juicy experience.", comp(1798, 90));
    IF_SETTEXT("Speaking of the uncharted islands, once you've collected a few chimes, you should head to see Rosie in Waiko Market, who will sell you supplies for such expeditions. Or you could just take advantage of the handful of free supplies she gives out every day, and head straight out there.", comp(1798, 91));
    IF_SETTEXT("There's all sorts to discover out there, including something we call taijitu - they're a highly prized rare currency, which you might want to take to Boni in Waiko Market. She sells all sorts of useful stuff. We'll leave the rest of the discovery to you! <br><br>If you find yourself getting into the swing of making expeditions to the uncharted isles, you'll also probably want a flag so you can claim one for yourself - again, that's something you should talk to Boni about. <br><br>As for warriors from the west, you will also find much to fight in the uncharted islands, but true slayers should pay a visit to the acolytes of Seiryu on the island of Aminishi.<br><br>Finally, if you ever find yourself at a loss for what to do, find one of the many contract givers around Wushanko, like Sojobo in Waiko Market.<br><br>They'll give you something to focus on, and some nice rewards too in the form of chimes and experience.<br><br>You can even keep whatever you gather while completing them! <br><br>We hope that you enjoy your time in the east.<br><br><br>Please don't litter.", comp(1798, 92));
    return;
}