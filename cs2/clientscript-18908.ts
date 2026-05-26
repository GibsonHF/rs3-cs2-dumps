//
function script18908(): void {
    var int0 = script18854();
    var int1 = script18855(int0);
    var int2 = DB_LISTALL(284);
    var int3 = 0;
    var int4 = 0;
    var int5 = -1;
    CC_DELETEALL(84148253);
    varbitclient_55448 = 0;
    if ((IF_FIND(84148253) == 1)) {
        while ((int4 < int2)) {
            stack(1163264);
            stack(int4);
            DB_FIND(0);
            dbrow_findnext();
            int5 = stack();
            if ((script18856(int4) == 0)) {
                int3 = script18909(int4, int5, int0, int1, int3);
            };
            int4 = (int4 + 1);
        };
    };
    return;
}