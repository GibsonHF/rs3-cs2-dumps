//
function script19516(): void {
    var int0 = 0;
    var string0 = "Withdraw";
    var string1 = script19536();
    while ((int0 < 200)) {
        if ((CC_FIND(86048843, int0) == 1)) {
            script19540(string0, string1, CC_GETINVOBJECT(), CC_GETINVCOUNT());
        };
        int0 = (int0 + 1);
    };
    return;
}