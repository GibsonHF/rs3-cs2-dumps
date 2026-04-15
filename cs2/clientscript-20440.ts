//
function script20440(int0: int): void {
    var int1 = script20424(int0);
    var string0 = "";
    var string1 = "";
    var int2 = -1 as obj;
    var int3 = -1 as obj;
    if ((script20447() == 1)) {
        script20426();
        script20441(-1, "You have earned all the capes you can this year.", 0, "null", -1 as obj, 53699 as obj);
        return;
    };
    if (((int1 == -1 as dbrow) || (script20427(int0) == 0))) {
        script20426();
        script20441(-1, "Choose a skill to focus on!", 0, "null", -1 as obj, 53699 as obj);
    } else {
        string0 = dbrow_getfield(int1, 1404928, 0);
        [int2, int3, string1] = script20428(int1);
        script20441(int0, string0, 1, string1, int2, int3);
    };
    return;
}