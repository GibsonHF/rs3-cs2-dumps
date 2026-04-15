//
function script14507(int0: dbrow): string {
    var string0 = "";
    var int1 = -1;
    var int2 = 0;
    var int3 = -1;
    if (((script14502(int0) == 2) && (script14511(int0) == true))) {
        string0 = script14509(int0);
    } else {
        string0 = script14508(int0);
    };
    if ((STRING_LENGTH(string0) > 0)) {
        return `Reward: ${string0}`;
    };
    return "";
}