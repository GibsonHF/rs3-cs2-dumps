//
function script1395(): void {
    if ((varbitplayer_12425 >= 30)) {
        IF_SETHIDE(true, comp(391, 143));  // misc_both_manage:miscb_if_rarewood_disable
        IF_SETHIDE(true, comp(391, 157));  // misc_both_manage:miscb_if_farm_disable
        script7794(25624620, 21361);
        script7794(25624624, 21361);
    } else {
        IF_SETHIDE(false, comp(391, 143));  // misc_both_manage:miscb_if_rarewood_disable
        IF_SETHIDE(false, comp(391, 157));  // misc_both_manage:miscb_if_farm_disable
        script7794(25624620, 21362);
        script7794(25624624, 21362);
    };
    script5770();
    IF_SETONVARTRANSMIT(callback(script1119, 2239, 1), comp(391, 20));  // misc_both_manage:miscb_if_coffers
    var int0 = script1118(varbitplayer_10069);
    if ((varbitplayer_10069 > 0)) {
        IF_SETCOLOUR(int0, comp(391, 96));  // misc_both_manage:miscb_if_fishing_bar1
    } else {
        IF_SETCOLOUR(0, comp(391, 96));  // misc_both_manage:miscb_if_fishing_bar1
    };
    if ((varbitplayer_10069 > 1)) {
        IF_SETCOLOUR(int0, comp(391, 97));  // misc_both_manage:miscb_if_fishing_bar2
    } else {
        IF_SETCOLOUR(0, comp(391, 97));  // misc_both_manage:miscb_if_fishing_bar2
    };
    if ((varbitplayer_10069 > 2)) {
        IF_SETCOLOUR(int0, comp(391, 98));  // misc_both_manage:miscb_if_fishing_bar3
    } else {
        IF_SETCOLOUR(0, comp(391, 98));  // misc_both_manage:miscb_if_fishing_bar3
    };
    if ((varbitplayer_10069 > 3)) {
        IF_SETCOLOUR(int0, comp(391, 100));  // misc_both_manage:miscb_if_fishing_bar4
    } else {
        IF_SETCOLOUR(0, comp(391, 100));  // misc_both_manage:miscb_if_fishing_bar4
    };
    if ((varbitplayer_10069 > 4)) {
        IF_SETCOLOUR(int0, comp(391, 101));  // misc_both_manage:miscb_if_fishing_bar5
    } else {
        IF_SETCOLOUR(0, comp(391, 101));  // misc_both_manage:miscb_if_fishing_bar5
    };
    if ((varbitplayer_10069 > 5)) {
        IF_SETCOLOUR(int0, comp(391, 102));  // misc_both_manage:miscb_if_fishing_bar6
    } else {
        IF_SETCOLOUR(0, comp(391, 102));  // misc_both_manage:miscb_if_fishing_bar6
    };
    if ((varbitplayer_10069 > 6)) {
        IF_SETCOLOUR(int0, comp(391, 103));  // misc_both_manage:miscb_if_fishing_bar7
    } else {
        IF_SETCOLOUR(0, comp(391, 103));  // misc_both_manage:miscb_if_fishing_bar7
    };
    if ((varbitplayer_10069 > 7)) {
        IF_SETCOLOUR(int0, comp(391, 104));  // misc_both_manage:miscb_if_fishing_bar8
    } else {
        IF_SETCOLOUR(0, comp(391, 104));  // misc_both_manage:miscb_if_fishing_bar8
    };
    if ((varbitplayer_10069 > 8)) {
        IF_SETCOLOUR(int0, comp(391, 105));  // misc_both_manage:miscb_if_fishing_bar9
    } else {
        IF_SETCOLOUR(0, comp(391, 105));  // misc_both_manage:miscb_if_fishing_bar9
    };
    if ((varbitplayer_10069 > 9)) {
        IF_SETCOLOUR(int0, comp(391, 106));  // misc_both_manage:miscb_if_fishing_bar10
    } else {
        IF_SETCOLOUR(0, comp(391, 106));  // misc_both_manage:miscb_if_fishing_bar10
    };
    int0 = script1118(varbitplayer_10070);
    if ((varbitplayer_10070 > 0)) {
        IF_SETCOLOUR(int0, comp(391, 56));  // misc_both_manage:miscb_if_mining_bar1
    } else {
        IF_SETCOLOUR(0, comp(391, 56));  // misc_both_manage:miscb_if_mining_bar1
    };
    if ((varbitplayer_10070 > 1)) {
        IF_SETCOLOUR(int0, comp(391, 57));  // misc_both_manage:miscb_if_mining_bar2
    } else {
        IF_SETCOLOUR(0, comp(391, 57));  // misc_both_manage:miscb_if_mining_bar2
    };
    if ((varbitplayer_10070 > 2)) {
        IF_SETCOLOUR(int0, comp(391, 58));  // misc_both_manage:miscb_if_mining_bar3
    } else {
        IF_SETCOLOUR(0, comp(391, 58));  // misc_both_manage:miscb_if_mining_bar3
    };
    if ((varbitplayer_10070 > 3)) {
        IF_SETCOLOUR(int0, comp(391, 59));  // misc_both_manage:miscb_if_mining_bar4
    } else {
        IF_SETCOLOUR(0, comp(391, 59));  // misc_both_manage:miscb_if_mining_bar4
    };
    if ((varbitplayer_10070 > 4)) {
        IF_SETCOLOUR(int0, comp(391, 60));  // misc_both_manage:miscb_if_mining_bar5
    } else {
        IF_SETCOLOUR(0, comp(391, 60));  // misc_both_manage:miscb_if_mining_bar5
    };
    if ((varbitplayer_10070 > 5)) {
        IF_SETCOLOUR(int0, comp(391, 61));  // misc_both_manage:miscb_if_mining_bar6
    } else {
        IF_SETCOLOUR(0, comp(391, 61));  // misc_both_manage:miscb_if_mining_bar6
    };
    if ((varbitplayer_10070 > 6)) {
        IF_SETCOLOUR(int0, comp(391, 62));  // misc_both_manage:miscb_if_mining_bar7
    } else {
        IF_SETCOLOUR(0, comp(391, 62));  // misc_both_manage:miscb_if_mining_bar7
    };
    if ((varbitplayer_10070 > 7)) {
        IF_SETCOLOUR(int0, comp(391, 63));  // misc_both_manage:miscb_if_mining_bar8
    } else {
        IF_SETCOLOUR(0, comp(391, 63));  // misc_both_manage:miscb_if_mining_bar8
    };
    if ((varbitplayer_10070 > 8)) {
        IF_SETCOLOUR(int0, comp(391, 64));  // misc_both_manage:miscb_if_mining_bar9
    } else {
        IF_SETCOLOUR(0, comp(391, 64));  // misc_both_manage:miscb_if_mining_bar9
    };
    if ((varbitplayer_10070 > 9)) {
        IF_SETCOLOUR(int0, comp(391, 65));  // misc_both_manage:miscb_if_mining_bar10
    } else {
        IF_SETCOLOUR(0, comp(391, 65));  // misc_both_manage:miscb_if_mining_bar10
    };
    int0 = script1118(varbitplayer_10068);
    if ((varbitplayer_10068 > 0)) {
        IF_SETCOLOUR(int0, comp(391, 84));  // misc_both_manage:miscb_if_herbs_bar1
    } else {
        IF_SETCOLOUR(0, comp(391, 84));  // misc_both_manage:miscb_if_herbs_bar1
    };
    if ((varbitplayer_10068 > 1)) {
        IF_SETCOLOUR(int0, comp(391, 85));  // misc_both_manage:miscb_if_herbs_bar2
    } else {
        IF_SETCOLOUR(0, comp(391, 85));  // misc_both_manage:miscb_if_herbs_bar2
    };
    if ((varbitplayer_10068 > 2)) {
        IF_SETCOLOUR(int0, comp(391, 86));  // misc_both_manage:miscb_if_herbs_bar3
    } else {
        IF_SETCOLOUR(0, comp(391, 86));  // misc_both_manage:miscb_if_herbs_bar3
    };
    if ((varbitplayer_10068 > 3)) {
        IF_SETCOLOUR(int0, comp(391, 87));  // misc_both_manage:miscb_if_herbs_bar4
    } else {
        IF_SETCOLOUR(0, comp(391, 87));  // misc_both_manage:miscb_if_herbs_bar4
    };
    if ((varbitplayer_10068 > 4)) {
        IF_SETCOLOUR(int0, comp(391, 88));  // misc_both_manage:miscb_if_herbs_bar5
    } else {
        IF_SETCOLOUR(0, comp(391, 88));  // misc_both_manage:miscb_if_herbs_bar5
    };
    if ((varbitplayer_10068 > 5)) {
        IF_SETCOLOUR(int0, comp(391, 89));  // misc_both_manage:miscb_if_herbs_bar6
    } else {
        IF_SETCOLOUR(0, comp(391, 89));  // misc_both_manage:miscb_if_herbs_bar6
    };
    if ((varbitplayer_10068 > 6)) {
        IF_SETCOLOUR(int0, comp(391, 90));  // misc_both_manage:miscb_if_herbs_bar7
    } else {
        IF_SETCOLOUR(0, comp(391, 90));  // misc_both_manage:miscb_if_herbs_bar7
    };
    if ((varbitplayer_10068 > 7)) {
        IF_SETCOLOUR(int0, comp(391, 91));  // misc_both_manage:miscb_if_herbs_bar8
    } else {
        IF_SETCOLOUR(0, comp(391, 91));  // misc_both_manage:miscb_if_herbs_bar8
    };
    if ((varbitplayer_10068 > 8)) {
        IF_SETCOLOUR(int0, comp(391, 92));  // misc_both_manage:miscb_if_herbs_bar9
    } else {
        IF_SETCOLOUR(0, comp(391, 92));  // misc_both_manage:miscb_if_herbs_bar9
    };
    if ((varbitplayer_10068 > 9)) {
        IF_SETCOLOUR(int0, comp(391, 93));  // misc_both_manage:miscb_if_herbs_bar10
    } else {
        IF_SETCOLOUR(0, comp(391, 93));  // misc_both_manage:miscb_if_herbs_bar10
    };
    int0 = script1118(varbitplayer_10067);
    if ((varbitplayer_10067 > 0)) {
        IF_SETCOLOUR(int0, comp(391, 71));  // misc_both_manage:miscb_if_wood_bar1
    } else {
        IF_SETCOLOUR(0, comp(391, 71));  // misc_both_manage:miscb_if_wood_bar1
    };
    if ((varbitplayer_10067 > 1)) {
        IF_SETCOLOUR(int0, comp(391, 72));  // misc_both_manage:miscb_if_wood_bar2
    } else {
        IF_SETCOLOUR(0, comp(391, 72));  // misc_both_manage:miscb_if_wood_bar2
    };
    if ((varbitplayer_10067 > 2)) {
        IF_SETCOLOUR(int0, comp(391, 73));  // misc_both_manage:miscb_if_wood_bar3
    } else {
        IF_SETCOLOUR(0, comp(391, 73));  // misc_both_manage:miscb_if_wood_bar3
    };
    if ((varbitplayer_10067 > 3)) {
        IF_SETCOLOUR(int0, comp(391, 74));  // misc_both_manage:miscb_if_wood_bar4
    } else {
        IF_SETCOLOUR(0, comp(391, 74));  // misc_both_manage:miscb_if_wood_bar4
    };
    if ((varbitplayer_10067 > 4)) {
        IF_SETCOLOUR(int0, comp(391, 75));  // misc_both_manage:miscb_if_wood_bar5
    } else {
        IF_SETCOLOUR(0, comp(391, 75));  // misc_both_manage:miscb_if_wood_bar5
    };
    if ((varbitplayer_10067 > 5)) {
        IF_SETCOLOUR(int0, comp(391, 76));  // misc_both_manage:miscb_if_wood_bar6
    } else {
        IF_SETCOLOUR(0, comp(391, 76));  // misc_both_manage:miscb_if_wood_bar6
    };
    if ((varbitplayer_10067 > 6)) {
        IF_SETCOLOUR(int0, comp(391, 77));  // misc_both_manage:miscb_if_wood_bar7
    } else {
        IF_SETCOLOUR(0, comp(391, 77));  // misc_both_manage:miscb_if_wood_bar7
    };
    if ((varbitplayer_10067 > 7)) {
        IF_SETCOLOUR(int0, comp(391, 78));  // misc_both_manage:miscb_if_wood_bar8
    } else {
        IF_SETCOLOUR(0, comp(391, 78));  // misc_both_manage:miscb_if_wood_bar8
    };
    if ((varbitplayer_10067 > 8)) {
        IF_SETCOLOUR(int0, comp(391, 79));  // misc_both_manage:miscb_if_wood_bar9
    } else {
        IF_SETCOLOUR(0, comp(391, 79));  // misc_both_manage:miscb_if_wood_bar9
    };
    if ((varbitplayer_10067 > 9)) {
        IF_SETCOLOUR(int0, comp(391, 80));  // misc_both_manage:miscb_if_wood_bar10
    } else {
        IF_SETCOLOUR(0, comp(391, 80));  // misc_both_manage:miscb_if_wood_bar10
    };
    int0 = script1118(varbitplayer_10085);
    if ((varbitplayer_10085 > 0)) {
        IF_SETCOLOUR(int0, comp(391, 127));  // misc_both_manage:miscb_if_rarewood_bar1
    } else {
        IF_SETCOLOUR(0, comp(391, 127));  // misc_both_manage:miscb_if_rarewood_bar1
    };
    if ((varbitplayer_10085 > 1)) {
        IF_SETCOLOUR(int0, comp(391, 128));  // misc_both_manage:miscb_if_rarewood_bar2
    } else {
        IF_SETCOLOUR(0, comp(391, 128));  // misc_both_manage:miscb_if_rarewood_bar2
    };
    if ((varbitplayer_10085 > 2)) {
        IF_SETCOLOUR(int0, comp(391, 129));  // misc_both_manage:miscb_if_rarewood_bar3
    } else {
        IF_SETCOLOUR(0, comp(391, 129));  // misc_both_manage:miscb_if_rarewood_bar3
    };
    if ((varbitplayer_10085 > 3)) {
        IF_SETCOLOUR(int0, comp(391, 130));  // misc_both_manage:miscb_if_rarewood_bar4
    } else {
        IF_SETCOLOUR(0, comp(391, 130));  // misc_both_manage:miscb_if_rarewood_bar4
    };
    if ((varbitplayer_10085 > 4)) {
        IF_SETCOLOUR(int0, comp(391, 131));  // misc_both_manage:miscb_if_rarewood_bar5
    } else {
        IF_SETCOLOUR(0, comp(391, 131));  // misc_both_manage:miscb_if_rarewood_bar5
    };
    if ((varbitplayer_10085 > 5)) {
        IF_SETCOLOUR(int0, comp(391, 132));  // misc_both_manage:miscb_if_rarewood_bar6
    } else {
        IF_SETCOLOUR(0, comp(391, 132));  // misc_both_manage:miscb_if_rarewood_bar6
    };
    if ((varbitplayer_10085 > 6)) {
        IF_SETCOLOUR(int0, comp(391, 133));  // misc_both_manage:miscb_if_rarewood_bar7
    } else {
        IF_SETCOLOUR(0, comp(391, 133));  // misc_both_manage:miscb_if_rarewood_bar7
    };
    if ((varbitplayer_10085 > 7)) {
        IF_SETCOLOUR(int0, comp(391, 134));  // misc_both_manage:miscb_if_rarewood_bar8
    } else {
        IF_SETCOLOUR(0, comp(391, 134));  // misc_both_manage:miscb_if_rarewood_bar8
    };
    if ((varbitplayer_10085 > 8)) {
        IF_SETCOLOUR(int0, comp(391, 135));  // misc_both_manage:miscb_if_rarewood_bar9
    } else {
        IF_SETCOLOUR(0, comp(391, 135));  // misc_both_manage:miscb_if_rarewood_bar9
    };
    if ((varbitplayer_10085 > 9)) {
        IF_SETCOLOUR(int0, comp(391, 136));  // misc_both_manage:miscb_if_rarewood_bar10
    } else {
        IF_SETCOLOUR(0, comp(391, 136));  // misc_both_manage:miscb_if_rarewood_bar10
    };
    int0 = script1118(varbitplayer_10086);
    if ((varbitplayer_10086 > 0)) {
        IF_SETCOLOUR(int0, comp(391, 147));  // misc_both_manage:miscb_if_farm_bar1
    } else {
        IF_SETCOLOUR(0, comp(391, 147));  // misc_both_manage:miscb_if_farm_bar1
    };
    if ((varbitplayer_10086 > 1)) {
        IF_SETCOLOUR(int0, comp(391, 148));  // misc_both_manage:miscb_if_farm_bar2
    } else {
        IF_SETCOLOUR(0, comp(391, 148));  // misc_both_manage:miscb_if_farm_bar2
    };
    if ((varbitplayer_10086 > 2)) {
        IF_SETCOLOUR(int0, comp(391, 149));  // misc_both_manage:miscb_if_farm_bar3
    } else {
        IF_SETCOLOUR(0, comp(391, 149));  // misc_both_manage:miscb_if_farm_bar3
    };
    if ((varbitplayer_10086 > 3)) {
        IF_SETCOLOUR(int0, comp(391, 150));  // misc_both_manage:miscb_if_farm_bar4
    } else {
        IF_SETCOLOUR(0, comp(391, 150));  // misc_both_manage:miscb_if_farm_bar4
    };
    if ((varbitplayer_10086 > 4)) {
        IF_SETCOLOUR(int0, comp(391, 151));  // misc_both_manage:miscb_if_farm_bar5
    } else {
        IF_SETCOLOUR(0, comp(391, 151));  // misc_both_manage:miscb_if_farm_bar5
    };
    if ((varbitplayer_10086 > 5)) {
        IF_SETCOLOUR(int0, comp(391, 152));  // misc_both_manage:miscb_if_farm_bar6
    } else {
        IF_SETCOLOUR(0, comp(391, 152));  // misc_both_manage:miscb_if_farm_bar6
    };
    if ((varbitplayer_10086 > 6)) {
        IF_SETCOLOUR(int0, comp(391, 153));  // misc_both_manage:miscb_if_farm_bar7
    } else {
        IF_SETCOLOUR(0, comp(391, 153));  // misc_both_manage:miscb_if_farm_bar7
    };
    if ((varbitplayer_10086 > 7)) {
        IF_SETCOLOUR(int0, comp(391, 154));  // misc_both_manage:miscb_if_farm_bar8
    } else {
        IF_SETCOLOUR(0, comp(391, 154));  // misc_both_manage:miscb_if_farm_bar8
    };
    if ((varbitplayer_10086 > 8)) {
        IF_SETCOLOUR(int0, comp(391, 155));  // misc_both_manage:miscb_if_farm_bar9
    } else {
        IF_SETCOLOUR(0, comp(391, 155));  // misc_both_manage:miscb_if_farm_bar9
    };
    if ((varbitplayer_10086 > 9)) {
        IF_SETCOLOUR(int0, comp(391, 156));  // misc_both_manage:miscb_if_farm_bar10
    } else {
        IF_SETCOLOUR(0, comp(391, 156));  // misc_both_manage:miscb_if_farm_bar10
    };
    if ((varplayer_2242 > 0)) {
        IF_SETCOLOUR(16777215, comp(391, 107));  // misc_both_manage:miscb_if_idle_bar1
    } else {
        IF_SETCOLOUR(0, comp(391, 107));  // misc_both_manage:miscb_if_idle_bar1
    };
    if ((varplayer_2242 > 1)) {
        IF_SETCOLOUR(16776174, comp(391, 108));  // misc_both_manage:miscb_if_idle_bar2
    } else {
        IF_SETCOLOUR(0, comp(391, 108));  // misc_both_manage:miscb_if_idle_bar2
    };
    if ((varplayer_2242 > 2)) {
        IF_SETCOLOUR(16775389, comp(391, 109));  // misc_both_manage:miscb_if_idle_bar3
    } else {
        IF_SETCOLOUR(0, comp(391, 109));  // misc_both_manage:miscb_if_idle_bar3
    };
    if ((varplayer_2242 > 3)) {
        IF_SETCOLOUR(16774349, comp(391, 110));  // misc_both_manage:miscb_if_idle_bar4
    } else {
        IF_SETCOLOUR(0, comp(391, 110));  // misc_both_manage:miscb_if_idle_bar4
    };
    if ((varplayer_2242 > 4)) {
        IF_SETCOLOUR(16773564, comp(391, 111));  // misc_both_manage:miscb_if_idle_bar5
    } else {
        IF_SETCOLOUR(0, comp(391, 111));  // misc_both_manage:miscb_if_idle_bar5
    };
    if ((varplayer_2242 > 5)) {
        IF_SETCOLOUR(16772523, comp(391, 112));  // misc_both_manage:miscb_if_idle_bar6
    } else {
        IF_SETCOLOUR(0, comp(391, 112));  // misc_both_manage:miscb_if_idle_bar6
    };
    if ((varplayer_2242 > 6)) {
        IF_SETCOLOUR(16771739, comp(391, 113));  // misc_both_manage:miscb_if_idle_bar7
    } else {
        IF_SETCOLOUR(0, comp(391, 113));  // misc_both_manage:miscb_if_idle_bar7
    };
    if ((varplayer_2242 > 7)) {
        IF_SETCOLOUR(16770698, comp(391, 114));  // misc_both_manage:miscb_if_idle_bar8
    } else {
        IF_SETCOLOUR(0, comp(391, 114));  // misc_both_manage:miscb_if_idle_bar8
    };
    if ((varplayer_2242 > 8)) {
        IF_SETCOLOUR(16769913, comp(391, 115));  // misc_both_manage:miscb_if_idle_bar9
    } else {
        IF_SETCOLOUR(0, comp(391, 115));  // misc_both_manage:miscb_if_idle_bar9
    };
    if ((varplayer_2242 > 9)) {
        IF_SETCOLOUR(16768873, comp(391, 116));  // misc_both_manage:miscb_if_idle_bar10
    } else {
        IF_SETCOLOUR(0, comp(391, 116));  // misc_both_manage:miscb_if_idle_bar10
    };
    if ((varplayer_2242 > 10)) {
        IF_SETCOLOUR(16768088, comp(391, 117));  // misc_both_manage:miscb_if_idle_bar11
    } else {
        IF_SETCOLOUR(0, comp(391, 117));  // misc_both_manage:miscb_if_idle_bar11
    };
    if ((varplayer_2242 > 11)) {
        IF_SETCOLOUR(16767047, comp(391, 118));  // misc_both_manage:miscb_if_idle_bar12
    } else {
        IF_SETCOLOUR(0, comp(391, 118));  // misc_both_manage:miscb_if_idle_bar12
    };
    if ((varplayer_2242 > 12)) {
        IF_SETCOLOUR(16766263, comp(391, 119));  // misc_both_manage:miscb_if_idle_bar13
    } else {
        IF_SETCOLOUR(0, comp(391, 119));  // misc_both_manage:miscb_if_idle_bar13
    };
    if ((varplayer_2242 > 13)) {
        IF_SETCOLOUR(16765222, comp(391, 120));  // misc_both_manage:miscb_if_idle_bar14
    } else {
        IF_SETCOLOUR(0, comp(391, 120));  // misc_both_manage:miscb_if_idle_bar14
    };
    if ((varplayer_2242 > 14)) {
        IF_SETCOLOUR(16763653, comp(391, 121));  // misc_both_manage:miscb_if_idle_bar15
    } else {
        IF_SETCOLOUR(0, comp(391, 121));  // misc_both_manage:miscb_if_idle_bar15
    };
    if ((varbitplayer_10088 == 1)) {
        IF_SETGRAPHIC(697 as graphic, comp(391, 158));  // misc_both_manage:miscb_if_herbs_chooseherb
        IF_SETGRAPHIC(699 as graphic, comp(391, 160));  // misc_both_manage:miscb_if_herbs_chooseflax
    } else {
        IF_SETGRAPHIC(699 as graphic, comp(391, 158));  // misc_both_manage:miscb_if_herbs_chooseherb
        IF_SETGRAPHIC(697 as graphic, comp(391, 160));  // misc_both_manage:miscb_if_herbs_chooseflax
    };
    if ((varbitplayer_10087 == 0)) {
        IF_SETGRAPHIC(699 as graphic, comp(391, 137));  // misc_both_manage:miscb_if_rarewood_choosemahogany
        IF_SETGRAPHIC(697 as graphic, comp(391, 139));  // misc_both_manage:miscb_if_rarewood_chooseteak
        IF_SETGRAPHIC(697 as graphic, comp(391, 141));  // misc_both_manage:miscb_if_rarewood_chooseboth
    } else if ((varbitplayer_10087 == 1)) {
        IF_SETGRAPHIC(697 as graphic, comp(391, 137));  // misc_both_manage:miscb_if_rarewood_choosemahogany
        IF_SETGRAPHIC(699 as graphic, comp(391, 139));  // misc_both_manage:miscb_if_rarewood_chooseteak
        IF_SETGRAPHIC(697 as graphic, comp(391, 141));  // misc_both_manage:miscb_if_rarewood_chooseboth
    } else {
        IF_SETGRAPHIC(697 as graphic, comp(391, 137));  // misc_both_manage:miscb_if_rarewood_choosemahogany
        IF_SETGRAPHIC(697 as graphic, comp(391, 139));  // misc_both_manage:miscb_if_rarewood_chooseteak
        IF_SETGRAPHIC(699 as graphic, comp(391, 141));  // misc_both_manage:miscb_if_rarewood_chooseboth
    };
    if ((varbitplayer_10060 == 0)) {
        IF_SETGRAPHIC(697 as graphic, comp(391, 123));  // misc_both_manage:miscb_if_fishing_cooked
    } else {
        IF_SETGRAPHIC(699 as graphic, comp(391, 123));  // misc_both_manage:miscb_if_fishing_cooked
    };
    script20654(25624586, 25624589);
    script20654(25624592, 25624594);
    script20654(25624603, 25624583);
    script20654(25624623, 25624625);
    return;
}