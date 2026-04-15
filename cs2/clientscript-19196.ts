//
function script19196(int0: struct): void {
    var int1 = -1 as dbrow;
    var int2 = -1 as stat;
    var string0 = "";
    var int3 = -1 as cursor;
    var int4 = comp(1288, 13);
    var int5 = comp(1288, 12);
    switch (int0) {
        case 50263: {
            int1 = script19150(int0);
            string0 = dbrow_getfield(int1, 1204512, 0);
            int3 = dbrow_getfield(int1, 1204528, 0);
            int2 = dbrow_getfield(int1, 1204240, 0);
            break;
        }
        case 2951: {
            int1 = script19150(int0);
            string0 = dbrow_getfield(int1, 1290544, 0);
            int3 = dbrow_getfield(int1, 1290560, 0);
            int2 = dbrow_getfield(int1, 1290256, 0);
            break;
        }
        default: {
            script12478(`Missed plugin point for promo ID ${inttostring(struct_getparam(int0, 8202), 10)}`);
            return;
        }
    };
    if ((STRING_LENGTH(string0) > 0)) {
        IF_SETTEXT(string0, int5);
        IF_SETOP(1, string0, int4);
    };
    if ((int3 != -1 as cursor)) {
        IF_SETOPCURSOR(1, int3, int4);
    };
    return;
}