//
function script16345(int0: struct): string {
    if ((int0 == -1 as struct)) {
        return "null";
    };
    var int1 = struct_getparam(int0, 4921);
    if ((int1 == -1 as dbrow)) {
        script12478(`Attempted to get name of promo ${inttostring(enum_getreverseindex(73, 0, 12135 as cs2enum, int0, 0), 10)} which did not have a dbrow specified on trh_promo_info_dbrow`);
        return "";
    };
    if ((DB_GETROWTABLE(int1) != 156)) {
        script12478(`Attempted to get name of promo ${inttostring(enum_getreverseindex(73, 0, 12135 as cs2enum, int0, 0), 10)} but the dbrow on param trh_promo_info_dbrow was invalid`);
        return "";
    };
    return script16346(int1);
}