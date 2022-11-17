const SmartChain = require("komodo-rpc-js");
var newWallet;
const config = {
  rpchost: "localhost",
  rpcport: 12345,
  rpcuser: "wasiim",
  rpcpassword: "1234"
};

const komodo = new SmartChain({ config });
console.log(komodo.config); // Prints the config being used by the komodo instance
const komodoRPC = komodo.rpc();
// const sendTokensTrx = komodoRPC.tokentransfer("tokenid", "walletPubkey");
// sendTokensTrx
// .then( info => {
//   console.log(`sendTrx info ---->>>`, info)
// })
// .catch( error => {
//   console.log(`sendTrx errror --->>>`, error);
//   throw new Error(error);
// })

// komodoRPC
//   .getinfo()
//   .then(info => {
//     console.log(`info--->`,info);
//   })
//   .catch(error => {
//     console.log(error);
//     throw new Error(error);
//   });

// komodoRPC
//   .listunspent(6, 9999999, [
//     "RPS3xTZCzr6aQfoMw5Bu1rpQBF6iVCWsyu",
//     "RBtNBJjWKVKPFG4To5Yce9TWWmc2AenzfZ"
//   ])
//   .then(outs => {
//     console.log(`outputs--->`,outs);
//   })
//   .catch(error => console.log(error));

komodoRPC
.tokenlist()
.then( info =>{
  console.log(`tokenlist info --->>>`, info)
})

komodoRPC
.tokenbalance("b787f863a082a114a8057ff0d337d71dd7c2fc4d29a614b880c95b60dba87154")
.then( res => {
  console.log(`token balace res --->`, res)
})
.catch( error => {
  console.log(`token balance errror --->`, error);
  throw new Error(error);
})

komodoRPC
// .tokentransfer("6b376896a18ce8e907dfb42c1f808781d91a52143cd772bf1a5148f66f592132","03025278e44f749695eebe073510f9254acb7bd25b6d6d8b1585cd029a3117925d","13")
// .then( info => {
//   komodoRPC.sendrawtransaction( info?.hex).then( result => {
//     console.log(`raw result -->`, result);
//   })
//   console.log(`token tranfer --->`, info);
// })
// .catch( error => {
//   console.log(`error tranfer --->`, error);
//   throw new Error(error)
// })

komodoRPC
.tokeninfo("6b376896a18ce8e907dfb42c1f808781d91a52143cd772bf1a5148f66f592132")
.then( tkinfo => {
  console.log(`token-info --->`, tkinfo);
})
.catch(error =>{
  console.log(`tkinfo-error --->`, error);
  throw new Error(error);
})

// komodoRPC
// .tokencreate("FST","0.0000090","creating FST token from frontside")
// .then( creation => {
//   console.log(`token creation --->`,creation)
//   if(creation?.result === "success"){
//     komodoRPC.sendrawtransaction(creation?.hex).then( rawtrx => {
//       console.log(`token creation rwatrx--->`,rawtrx )
//     })
//     .catch( error => {
//       console.log(`error --->`, error);
//       throw new Error(error);
//     })
//   }
// })

komodoRPC
.getnewaddress()
.then( getwallet => {
  console.log(`get new address --->`, getwallet);
  newWallet = getwallet;
  //RFJenUkRbgF9KUM8Jqh1vGhM2SYuGHPA6X
})
.catch(error => {
  console.log(error);
  throw new Error(error);
})