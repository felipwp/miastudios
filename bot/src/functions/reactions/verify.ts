import { Guild, GuildMember, Role } from "discord.js";
import { TERMS_OF_SERVICE_MESSAGE } from "../../assets/Messages";
import { MEMBER_ROLE_ID } from "../../assets/Roles";
import { FunctionResponse } from "../../types";

module.exports = {
  name: "Verify",
  description: "Adds a user to the member role",
  message: TERMS_OF_SERVICE_MESSAGE,
  run(member: GuildMember, guild: Guild, _reactionId: any): FunctionResponse {
    const role: Role = guild.roles.cache.find((x) => x.id === MEMBER_ROLE_ID);
    if (member.roles.cache.some((x) => x.id === MEMBER_ROLE_ID)) {
      return {
        status: false,
        message: ["User already verified."],
      };
    } else {
      member.roles.add(role);
      return {
        status: true,
        message: null,
      };
    }
  },
};
