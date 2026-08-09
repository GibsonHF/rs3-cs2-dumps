//
function script17263(int0: number): void {
    if (((script13749() == 0) || (int0 == -1))) {
        return;
    };
    var string0 = dbrow_getfield(int0, 516096, 0);
    var int1 = 0;
    var int2 = DEEPLINK_COUNT();
    var int3 = -1;
    var string1 = "";
    while ((int1 < int2)) {
        int3 = DEEPLINK_GET(int1);
        if ((int3 != -1)) {
            if ((dbrow_getfield(int0, 516128, 0) == 1)) {
                MARKETING_SENDANALYTICSEVENT(`${string0}_string`);
            };
            if ((dbrow_getfield(int0, 516112, 0) == 1)) {
                MARKETING_SENDATTRIBUTIONEVENT(`${string0}_string`);
            };
        };
        int1 = (int1 + 1);
    };
    return;
}