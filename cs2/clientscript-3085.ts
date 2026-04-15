//
function script3085(int0: int): unknown_int {
    var int1 = 0;
    var int2 = 0;
    var string0 = "0";
    var int3 = 0;
    while ((int1 < int0)) {
        [int2, string0, int3] = NOTIFICATIONS_SENDGROUPEDLOCAL(-1, int1);
        if ((int2 == 1)) {
            return 1;
        };
        int1 = (int1 + 1);
    };
    return 0;
}