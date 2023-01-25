import Binance from 'binance-api-node';

const start_bot = async () => {
  const client = Binance({
    // apiKey: localStorage.getItem("APIKEY"),
    // apiSecret: localStorage.getItem("APISECRET"),
    apiKey: "4nb1Evb6bNJctw4K4ZubaPHVJKlTdtZ8Qhx3PNRhZJu5LeNXCMczdmjnNxvbzGIN",
    apiSecret:
      "xImFiiEiWWZK1OoV2yaUqrYmBiu7Z9S4WPDgOGQFWyNjm0O4zwmANeHWA1foN6sh",
  });
  if (!client) {
    alert("There is no APIKEY and APISECRET in localStorage");
    return;
  }
  console.log(await client.time());
  console.log(await client.openOrders({ symbol: 'ETHBTC', recvWindow: '60000'}));
  return;
}

export default start_bot;
