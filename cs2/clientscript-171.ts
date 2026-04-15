//[clientscript,kr_display_riddle]
function script171(): void {
    if ((varclient_40 == 0)) {
        IF_SETTEXT("Show riddle", comp(390, 7));
        IF_SETOP(1, "Show", comp(390, 7));
        IF_SETHIDE(false, comp(390, 8));
        IF_SETHIDE(false, comp(390, 9));
        IF_SETHIDE(false, comp(390, 10));
        IF_SETHIDE(false, comp(390, 11));
        IF_SETHIDE(false, comp(390, 12));
        IF_SETHIDE(false, comp(390, 13));
        IF_SETHIDE(false, comp(390, 14));
        IF_SETHIDE(false, comp(390, 15));
        IF_SETHIDE(true, comp(390, 4));
        IF_SETHIDE(true, comp(390, 6));
        varclient_40 = 1;
    } else {
        IF_SETTEXT("Hide riddle", comp(390, 7));
        IF_SETOP(1, "Hide", comp(390, 7));
        IF_SETTEXT("You seek the grail of old,<br>but no longer is it a goblet of gold.<br>Among these nine will you find what you seek,<br>but be careful and don't peek!<br>A wrong choice will expel you,<br>so consider carefully each clue.<br><br>Three boxes contain only air,<br>beware of three boxes, for danger lurks there.<br>Two hold only rubbish but would fool you with disguise,<br>only one box holds your prize.<br><br>Clues will give the information you need,<br><br>rubbish always sits to the right of danger, pay heed.<br>There is nothing helpful in boxes great in height,<br>and boxes on either end will not end your plight.<br>A tall or small box will only bring you anger,<br>but a square box will not put you in danger.", comp(390, 18));
        IF_SETCOLOUR(0, comp(390, 18));
        IF_SETHIDE(true, comp(390, 8));
        IF_SETHIDE(true, comp(390, 9));
        IF_SETHIDE(true, comp(390, 10));
        IF_SETHIDE(true, comp(390, 11));
        IF_SETHIDE(true, comp(390, 12));
        IF_SETHIDE(true, comp(390, 13));
        IF_SETHIDE(true, comp(390, 14));
        IF_SETHIDE(true, comp(390, 15));
        IF_SETHIDE(false, comp(390, 4));
        IF_SETHIDE(false, comp(390, 6));
        IF_SETSCROLLSIZE(190, 520, comp(390, 19));
        script31(comp(390, 6), comp(390, 19), 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
        varclient_40 = 0;
    };
    return;
}