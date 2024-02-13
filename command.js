const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with pong!",
  },
];
const TOKEN =
  "MTIwNjk4NzMxMTk5MzMyMzUyMA.G06TP9.mbA78BbJYI_9fbUjMTFsrUluhl8psGZG8K1bis";
const rest = new REST({ version: "10" }).setToken(TOKEN);

const CLIENT_ID = "1206987311993323520";

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
