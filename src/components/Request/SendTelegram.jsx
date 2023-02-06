export const sendTelegram = (data, setSuccess) => {
  let bot = {
    token: "6065086630:AAFN2wNm_ZFJUhOcotq52-xc5V-xSDr_Jw0",
    chatID: "-1001739892818",
    message: `<b>Ism Familya:</b> +${data.name} %0A<b>Nomer:</b> +${data.tel} %0A<b>Shaxar:</b> +${data.city}`,
  };

  fetch(
    `https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chatID}&text=${bot.message}&parse_mode=html`,
    {
      method: "GET",
    }
  ).then(
    (success) => {
      setSuccess(true);
    },
    (error) => {
      console.log(error);
    }
  );
};
