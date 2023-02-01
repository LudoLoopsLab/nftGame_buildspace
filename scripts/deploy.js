const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame')
  const gameContract = await gameContractFactory.deploy(
    ["Ironclad Huntress", "Clockwork Creator", "Stalwart Guardian"],       // Names
    ["https://cdn.discordapp.com/attachments/1069719273947279431/1069719300505612308/Ironclad_Huntress.png",
      "https://cdn.discordapp.com/attachments/1069719273947279431/1069719300140711966/Clockwork_Creator.png",
      "https://cdn.discordapp.com/attachments/1069719273947279431/1069719300941824020/StalwartGuardian.png"], // Images
    [100, 200, 300],                    // HP values
    [100, 50, 25],                      // Attack damage values
    [100, 100, 100],                    // steam value
    "Steam-powered Oppressor", //boss Name
    "https://cdn.discordapp.com/attachments/1069719273947279431/1069797452175134750/Steam-Powered_Oppressor.png",
    1000,   // boss hp
    50      // bos attack damage
  )
  await gameContract.deployed()
  console.log("Contract deployed to:", gameContract.address)

}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()