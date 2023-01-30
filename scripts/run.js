const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame')
  const gameContract = await gameContractFactory.deploy(
    ["Ironclad Huntress", "Clockwork Creator", "Stalwart Guardian"],       // Names
    ["https://cdn.discordapp.com/attachments/1069719273947279431/1069719300505612308/Ironclad_Huntress.png",
      "https://cdn.discordapp.com/attachments/1069719273947279431/1069719300140711966/Clockwork_Creator.png",
      "https://cdn.discordapp.com/attachments/1069719273947279431/1069719300941824020/StalwartGuardian.png"], // Images
    [100, 200, 300],                    // HP values
    [100, 25, 25],                      // Attack damage values
    [50, 100, 50]                        // steam value
  )
  await gameContract.deployed()
  console.log("Contract deployed to:", gameContract.address)


  let txn
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2)
  await txn.wait()

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1)
  console.log("Token URI:", returnedTokenUri)
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