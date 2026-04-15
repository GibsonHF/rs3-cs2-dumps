//
function script11576(int0: unknown_int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, int10: int, int11: unknown_int, int12: unknown_int, int13: int, int14: unknown_int): void {
    var int15 = 18543;
    var int16 = 18541;
    var string0 = enum_getvalue(0, 36, 10114 as cs2enum, int1);
    var string1 = "";
    if ((MAP_LANG() == 0)) {
        string1 = enum_getvalue(0, 36, 10117 as cs2enum, int2);
    } else if ((MAP_LANG() == 2)) {
        string1 = enum_getvalue(0, 36, 9897 as cs2enum, int2);
    } else {
        string1 = enum_getvalue(0, 36, 9898 as cs2enum, int2);
    };
    var string2 = enum_getvalue(0, 36, 10118 as cs2enum, int3);
    IF_SETTEXT(string0, comp(1637, 23));
    IF_SETTEXT(string1, comp(1637, 39));
    IF_SETTEXT(string2, comp(1637, 41));
    if ((int4 > 4)) {
        IF_SETTEXT(`${inttostring((int4 / 4), 10)} mins`, comp(1637, 43));
    } else if ((int4 > 0)) {
        IF_SETTEXT("1 min", comp(1637, 43));
    } else if ((int4 == 0)) {
        IF_SETTEXT("Competition started", comp(1637, 43));
    } else {
        IF_SETTEXT("Competition finished", comp(1637, 43));
    };
    IF_SETTEXT(TOSTRING_LOCALISED(int13, 1), comp(1637, 59));
    if ((int14 == 1)) {
        IF_SETHIDE(false, comp(1637, 48));
    } else {
        IF_SETHIDE(true, comp(1637, 48));
    };
    if ((int0 == 0)) {
        IF_SETTEXT("Challenge Gem - Skilling Competition", comp(1637, 7));
        IF_SETTEXT("Skill", comp(1637, 22));
        IF_SETTEXT("Skill level range", comp(1637, 30));
        IF_SETTEXT(inttostring(int5, 10), comp(1637, 34));
        IF_SETTEXT(inttostring(int6, 10), comp(1637, 37));
        IF_SETPOSITION(32, 200, 0, 0, comp(1637, 46));
        IF_SETPOSITION(319, 200, 0, 0, comp(1637, 59));
        IF_SETHIDE(true, comp(1637, 24));
        IF_SETHIDE(true, comp(1637, 27));
        IF_SETHIDE(true, comp(1637, 44));
        IF_SETHIDE(true, comp(1637, 21));
    } else {
        IF_SETTEXT("Challenge Gem - Combat Competition", comp(1637, 7));
        IF_SETTEXT("Enemy combat level range", comp(1637, 22));
        IF_SETTEXT("Player combat level range", comp(1637, 30));
        IF_SETTEXT("-", comp(1637, 23));
        IF_SETTEXT(inttostring(int7, 10), comp(1637, 34));
        IF_SETTEXT(inttostring(int8, 10), comp(1637, 37));
        IF_SETTEXT(inttostring(int9, 10), comp(1637, 26));
        IF_SETTEXT(inttostring(int10, 10), comp(1637, 29));
        IF_SETPOSITION(32, 230, 0, 0, comp(1637, 46));
        IF_SETPOSITION(319, 230, 0, 0, comp(1637, 59));
        if ((int11 == 1)) {
            stack(int15);
            stack(107282442);
            IF_SETGRAPHIC();
        } else {
            stack(int16);
            stack(107282442);
            IF_SETGRAPHIC();
        };
        if ((int12 == 1)) {
            stack(int15);
            stack(107282444);
            IF_SETGRAPHIC();
        } else {
            stack(int16);
            stack(107282444);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(false, comp(1637, 24));
        IF_SETHIDE(false, comp(1637, 27));
        IF_SETHIDE(false, comp(1637, 44));
        IF_SETHIDE(false, comp(1637, 21));
    };
    IF_SETTEXT("Challenge gems allow players to compete against each other, either for fun or as staked competition. All challenge details are shown on this interface.<br><br>Upon entering, your stake will be placed in the prize pool and at the end of the competition the winner will be rewarded with the full prize pool.<br><br>Once the competition begins you can begin to gain points. Only activities done on this world will count towards your score.<br><br>At the end of the competition the winner is the person who has the highest score greater than 0; in the case of a draw the money is split evenly between those players (up to 10).<br><br>You must be logged in and on this world at the end of the competition to be considered for the win.<br><br>For skilling competitions, points are awarded for the base XP gained.<br>For combat competitions, points are awarded for the amount of damage dealt.", comp(1637, 17));
    return;
}