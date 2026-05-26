//
function script11576(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, int13: number, int14: number): void {
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
    IF_SETTEXT(string0, 107282455);
    IF_SETTEXT(string1, 107282471);
    IF_SETTEXT(string2, 107282473);
    if ((int4 > 4)) {
        IF_SETTEXT(`${inttostring((int4 / 4), 10)} mins`, 107282475);
    } else if ((int4 > 0)) {
        IF_SETTEXT("1 min", 107282475);
    } else if ((int4 == 0)) {
        IF_SETTEXT("Competition started", 107282475);
    } else {
        IF_SETTEXT("Competition finished", 107282475);
    };
    IF_SETTEXT(TOSTRING_LOCALISED(int13, 1), 107282491);
    if ((int14 == 1)) {
        IF_SETHIDE(0, 107282480);
    } else {
        IF_SETHIDE(1, 107282480);
    };
    if ((int0 == 0)) {
        IF_SETTEXT("Challenge Gem - Skilling Competition", 107282439);
        IF_SETTEXT("Skill", 107282454);
        IF_SETTEXT("Skill level range", 107282462);
        IF_SETTEXT(inttostring(int5, 10), 107282466);
        IF_SETTEXT(inttostring(int6, 10), 107282469);
        IF_SETPOSITION(32, 200, 0, 0, 107282478);
        IF_SETPOSITION(319, 200, 0, 0, 107282491);
        IF_SETHIDE(1, 107282456);
        IF_SETHIDE(1, 107282459);
        IF_SETHIDE(1, 107282476);
        IF_SETHIDE(1, 107282453);
    } else {
        IF_SETTEXT("Challenge Gem - Combat Competition", 107282439);
        IF_SETTEXT("Enemy combat level range", 107282454);
        IF_SETTEXT("Player combat level range", 107282462);
        IF_SETTEXT("-", 107282455);
        IF_SETTEXT(inttostring(int7, 10), 107282466);
        IF_SETTEXT(inttostring(int8, 10), 107282469);
        IF_SETTEXT(inttostring(int9, 10), 107282458);
        IF_SETTEXT(inttostring(int10, 10), 107282461);
        IF_SETPOSITION(32, 230, 0, 0, 107282478);
        IF_SETPOSITION(319, 230, 0, 0, 107282491);
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
        IF_SETHIDE(0, 107282456);
        IF_SETHIDE(0, 107282459);
        IF_SETHIDE(0, 107282476);
        IF_SETHIDE(0, 107282453);
    };
    IF_SETTEXT("Challenge gems allow players to compete against each other, either for fun or as staked competition. All challenge details are shown on this interface.<br><br>Upon entering, your stake will be placed in the prize pool and at the end of the competition the winner will be rewarded with the full prize pool.<br><br>Once the competition begins you can begin to gain points. Only activities done on this world will count towards your score.<br><br>At the end of the competition the winner is the person who has the highest score greater than 0; in the case of a draw the money is split evenly between those players (up to 10).<br><br>You must be logged in and on this world at the end of the competition to be considered for the win.<br><br>For skilling competitions, points are awarded for the base XP gained.<br>For combat competitions, points are awarded for the amount of damage dealt.", 107282449);
    return;
}