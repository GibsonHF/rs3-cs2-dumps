//
function script21113(): void {
    var int2 = 20;
    var int3 = 80;
    var int4 = 20;
    var int5 = 80;
    script20986();
    if (BRANCH_EQUALS(0)) {
        var string0 = `${string0}<br>- ${script17720(int0, int2, (int2 + int3), 0, int1)}.`;
        stack(string0);
        stack("<br>- Deals an additional ");
        stack(int0);
        stack(0);
        stack(int4);
        stack((int4 + int5));
        stack(0);
        stack(int1);
        script21111();
        string0 = `.`;
    } else {
        int2 = 60;
        int3 = 20;
        int4 = 350;
        int5 = 100;
        string0 = `${string0}<br>- ${script17720(int0, int2, (int2 + int3), 0, int1)}.`;
        stack(string0);
        stack("<br>- Deals an additional ");
        stack(int0);
        stack(0);
        stack(int4);
        stack((int4 + int5));
        stack(0);
        stack(int1);
        script21112();
        string0 = `.`;
    };
    stack(string0);
    return;
}