//
function script20301(int0: achievement): quest {
    var int1 = ACHIEVEMENT_SUBCAT(int0);
    if (((int1 == 4747 as category) || (int1 == 4748 as category))) {
        return unk10999(int0, 0);
    };
    return -1 as quest;
}