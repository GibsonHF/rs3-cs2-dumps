//
function script14460(): void {
    if ((PLAYERMEMBER() == true)) {
        script14466(6412 as cs2enum, 6413 as cs2enum, comp(654, 34));
    } else {
        script14466(6106 as cs2enum, 6413 as cs2enum, comp(654, 34));
    };
    script15079(2);
    CC_DELETEALL(comp(1253, 556));
    var int0 = -1;
    var int1 = script19062();
    while ((++int0 < int1)) {
        CC_CREATE(comp(1253, 556), 5, int0);
    };
    int0 = 0;
    while ((++int0 <= 12)) {
        script14465(int0);
    };
    IF_SETOPCURSOR(1, 201 as cursor, comp(654, 184));
    IF_SETTEXT("Fill the gems on the right by selecting prizes from the categories on the left. You are guaranteed to win one of these prizes!", comp(654, 130));
    return;
}