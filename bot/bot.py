from aiogram import Bot, Dispatcher, types
from aiogram.utils import executor
from config import TOKEN, WEBAPP_URL

bot = Bot(TOKEN)
dp = Dispatcher(bot)

@dp.message_handler(commands=["start"])
async def start(message: types.Message):

    keyboard = types.InlineKeyboardMarkup()

    webapp = types.WebAppInfo(url=WEBAPP_URL)

    keyboard.add(
        types.InlineKeyboardButton(
            text="😈 Open Devil Case",
            web_app=webapp
        )
    )

    await message.answer(
        "Добро пожаловать в Devil Case",
        reply_markup=keyboard
    )

if __name__ == "__main__":
    executor.start_polling(dp)
