//
function script20931(): void {
    stack(int0);
    script15044();
    var int1 = [];
    if ((int1 == -1)) {
        unk11016(`Invalid locality ID : ${inttostring(int0, 10)}`);
        stack(0);
        return;
    };
    stack(dbrow_getfield(int1, 1564720, 0));
    return;
}