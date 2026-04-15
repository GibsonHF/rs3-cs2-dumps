//
function script18414(int0: int, int1: dbrow): unknown_int {
    if ((((int0 != -1) && (int1 != -1 as dbrow)) && (DB_GETFIELDCOUNT(int1, 1114112) >= int0))) {
        return 1;
    };
    script12478("The currently running buff_select_event has reached a day on which the current event's row on the buff_select_event_schedule dbtable doesn't have buffs to populate.");
    return 0;
}