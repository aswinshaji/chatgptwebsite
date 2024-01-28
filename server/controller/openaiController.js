const dotenv = require('dotenv');
dotenv.config({path: './config/.env'});
const OpenAIApi = require('openai');

const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY,
});
exports.summaryController = async (req, res) => {
    try {
        const { text } = req.body;
        const data = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: `Summarize this \n${text}`}],
            max_tokens: 500,
            temperature: 0.5,
        });
        if (data) {
            if (data.choices[0].message.content) {
                return res.status(200).json(data.choices[0].message.content);
            }
        }
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: err.message,
        });
    }
};

exports.paragraphController = async (req, res) => {
    try {
        const { text } = req.body;
        const data = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: `Write a detail paragraph about \n${text}`}],
            max_tokens: 500,
            temperature: 0.5,
        });
        if (data) {
            if (data.choices[0].message.content) {
                return res.status(200).json(data.choices[0].message.content);
            }
        }
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: err.message,
        });
    }
};

exports.chatController = async (req, res) => {
    try {
        const { text } = req.body;
        const data = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: `Answer question \n${text}`}],
            max_tokens: 300,
            temperature: 0.7,
        });
        if (data) {
            if (data.choices[0].message.content) {
                return res.status(200).json(data.choices[0].message.content);
            }
        }
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: err.message,
        });
    }
};

exports.jsconverterController = async (req, res) => {
    try {
        const { text } = req.body;
        const data = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: `Convert these instruction into Javascript code \n${text}`}],
            max_tokens: 400,
            temperature: 0.25,
        });
        if (data) {
            if (data.choices[0].message.content) {
                return res.status(200).json(data.choices[0].message.content);
            }
        }
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: err.message,
        });
    }
};

exports.scifiimageController = async (req, res) => {
    try {
        const { text } = req.body;
        const data = await openai.images.generate({
            prompt: `Generate a Sci-Fi image of \n${text}`,
            n:1,
            size:'512x512'
        });
        if (data) {
            if (data.data[0].url) {
                return res.status(200).json(data.data[0].url);
            }
        }
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: err.message,
        });
    }
};