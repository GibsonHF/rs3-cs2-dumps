//
function script20760(int0: number): void {
    if ((int0 != 83)) {
        return;
    };
    if ((varbitclient_61228 == -1)) {
        return;
    };
    var int1 = script11651(varbitclient_61228);
    if ((int1 == -1 as dbrow)) {
        return;
    };
    if ((script12592(int1) == 0)) {
        return;
    };
    var int2 = dbrow_getfield(int1, 1515584, 0);
    if ((script7105(int2) == 0)) {
        return;
    };
    if ((script7108(int2) <= 0)) {
        return;
    };
    IF_TRIGGEROP(comp(1516, 23), -1, 1);
    return;
}