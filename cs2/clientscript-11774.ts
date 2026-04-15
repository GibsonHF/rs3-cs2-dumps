//
function script11774(): void {
    var int0 = 16625 as cs2enum;
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(int0);
    var int3 = -1 as dbrow;
    var int4 = -1;
    var int5 = -1;
    var string0 = "";
    MES_TYPED(99, 0, "~~~ Printing Event Info ~~~");
    while ((int1 < int2)) {
        int3 = enum_getvalue(0, 74, int0, int1);
        if ((int3 != -1 as dbrow)) {
            string0 = `Event: ${dbrow_getfield(int3, 274432, 0)}`;
            [int4, int5] = script3526(int3);
            if ((int4 != -1)) {
                CC_LIST_GETENABLED(int4);
                stack(int4);
                if ((NOTIFICATIONS_ISLOCALSCHEDULED() == 1)) {
                    string0 = strconcat(string0, ` : Scheduled - ID: ${inttostring(int4, 10)} - Time: ${inttostring(int5, 10)}`);
                } else {
                    string0 = strconcat(string0, ` : NOT Scheduled (Means it has already fired but not been cleared) - ID: ${inttostring(int4, 10)}`);
                };
            } else {
                string0 = strconcat(string0, " : No ID, so NOT scheduled");
            };
            MES_TYPED(99, 0, string0);
        };
        int1 = (int1 + 1);
    };
    return;
}