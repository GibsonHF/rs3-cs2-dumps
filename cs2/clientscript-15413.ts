//
function script15413(): void {
    var int0 = 1;
    var int1 = script12088(int0);
    var int2 = -1 as graphic;
    var int3 = 0;
    var int4 = 0;
    var int5 = 3;
    var int6 = 8;
    var int7 = 1;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    while ((int1 != -1 as dbrow)) {
        [int2, int10, int9] = dbrow_getfield(int1, 987200, 0);
        int3 = dbrow_getfield(int1, 987152, 0);
        int4 = dbrow_getfield(int1, 987168, 0);
        if ((int2 != -1 as graphic)) {
            if ((int3 > 0)) {
                if ((int3 <= int5)) {
                    stack(int2);
                    stack(49807376);
                    IF_SETGRAPHIC();
                };
                if ((int3 >= int6)) {
                    stack(int2);
                    stack(49807378);
                    IF_SETGRAPHIC();
                    script15415(49807382, int3, -1);
                };
            };
            if ((int4 > 0)) {
                if ((int4 <= int7)) {
                    stack(int2);
                    stack(49807384);
                    IF_SETGRAPHIC();
                };
                if ((int4 > int8)) {
                    stack(int2);
                    stack(49807386);
                    IF_SETGRAPHIC();
                    script15415(49807383, int4, -1);
                };
            };
        } else {
            script12478(`Missing bonus icon for bonus with ID: ${inttostring(int0, 10)}`);
        };
        int1 = script12088(++int0);
    };
    script11940();
    return;
}