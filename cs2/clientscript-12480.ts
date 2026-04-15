//
function script12480(): void {
    stack(37008);
    stack(script12477());
    DB_FIND(0);
    dbrow_findnext();
    var int0 = stack();
    var string0 = "Today's case: Speak to Meg for information.";
    if ((int0 != -1)) {
        if ((script12475(dbrow_getfield(int0, 36864, 0)) == 1)) {
            string0 = "Today's case: Complete!";
        } else {
            string0 = `Today's case: ${dbrow_getfield(int0, 36896, 0)}`;
        };
    };
    IF_SETTEXT(string0, comp(1758, 8));
    return;
}