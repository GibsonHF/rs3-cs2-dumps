//[clientscript,kr_display_riddle]
function script171(): void {
    if ((varclient_40 == 0)) {
        IF_SETTEXT("Show riddle", 25559047);
        IF_SETOP(1, "Show", 25559047);
        IF_SETHIDE(0, 25559048);
        IF_SETHIDE(0, 25559049);
        IF_SETHIDE(0, 25559050);
        IF_SETHIDE(0, 25559051);
        IF_SETHIDE(0, 25559052);
        IF_SETHIDE(0, 25559053);
        IF_SETHIDE(0, 25559054);
        IF_SETHIDE(0, 25559055);
        IF_SETHIDE(1, 25559044);
        IF_SETHIDE(1, 25559046);
        varclient_40 = 1;
    } else {
        IF_SETTEXT("Hide riddle", 25559047);
        IF_SETOP(1, "Hide", 25559047);
        IF_SETTEXT("You seek the grail of old,<br>but no longer is it a goblet of gold.<br>Among these nine will you find what you seek,<br>but be careful and don't peek!<br>A wrong choice will expel you,<br>so consider carefully each clue.<br><br>Three boxes contain only air,<br>beware of three boxes, for danger lurks there.<br>Two hold only rubbish but would fool you with disguise,<br>only one box holds your prize.<br><br>Clues will give the information you need,<br><br>rubbish always sits to the right of danger, pay heed.<br>There is nothing helpful in boxes great in height,<br>and boxes on either end will not end your plight.<br>A tall or small box will only bring you anger,<br>but a square box will not put you in danger.", 25559058);
        IF_SETCOLOUR(0, 25559058);
        IF_SETHIDE(1, 25559048);
        IF_SETHIDE(1, 25559049);
        IF_SETHIDE(1, 25559050);
        IF_SETHIDE(1, 25559051);
        IF_SETHIDE(1, 25559052);
        IF_SETHIDE(1, 25559053);
        IF_SETHIDE(1, 25559054);
        IF_SETHIDE(1, 25559055);
        IF_SETHIDE(0, 25559044);
        IF_SETHIDE(0, 25559046);
        IF_SETSCROLLSIZE(190, 520, 25559059);
        script31(25559046, 25559059, 792, 789, 790, 791, 773, 788);
        varclient_40 = 0;
    };
    return;
}