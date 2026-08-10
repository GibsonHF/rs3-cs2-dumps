//
function script20954(): void {
    var int2 = -1;
    if ((script20129() == 1)) {
        int2 = dbrow_getfield(int0, 1388576, 0);
        stack(int2);
        stack(0);
        script20932();
        if (BRANCH_EQUALS(0)) {
            stack(string0);
            stack("<br>- ");
            script20933();
            var string0 = strconcat(``);
            var int1 = 0;
        };
    };
    stack(int1);
    stack(string0);
    return;
}