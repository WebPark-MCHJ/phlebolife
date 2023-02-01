export const sendTelegram = (data) => {
  let bot = {
    token: "2066432931:AAGbNgv8wN_A-i1-3PeNlOg5Sz0KNHLW6D4",
    chatID: "-1001865653432",
    message: `<b>Ism Familya:</b> +${data.name} %0A<b>Nomer:</b> +${data.tel} %0A<b>Shaxar:</b> +${data.city}`,
  };

  fetch(
    `https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chatID}&text=${bot.message}&parse_mode=html`,
    {
      method: "GET",
    }
  ).then(
    (success) => {
      console.log("The msg has been sent successfully");
    },
    (error) => {
      console.log(error);
    }
  );
};
