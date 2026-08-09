//
function script18908(): void {
    var int0 = script18854();
    var int1 = script18855(int0);
    var int2 = DB_LISTALL(284);
    var int3 = 0;
    var int4 = 0;
    var int5 = -1;
    CC_DELETEALL(comp(1284, 29));
    varbitclient_55448 = 0;
    if ((IF_FIND(comp(1284, 29)) == 1)) {
        while ((int4 < int2)) {
            stack(1163264);
            stack(int4);
            DB_FIND(0);
            int5 = dbrow_findnext();
            if ((script18856(int4) == 0)) {
                int3 = script18909(int4, int5, int0, int1, int3);
            };
            int4 = (int4 + 1);
        };
    };
    return;
}