import { Alarm, ErrorLog, Group, GroupMember, LocationStatus, StatisticsHost, User } from "./models/index.js";

Alarm.sync();
ErrorLog.sync();
Group.sync();
GroupMember.sync();
LocationStatus.sync();
StatisticsHost.sync();
User.sync();

console.log(Group);
