const express = require('express');
const axios = require('axios');
const puppeteer = require('puppeteer');

const app = express()
app.get('*', async (req, res) => {
    const url = 'http://localhost:8081' + req.url;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: ['networkidle0']
    });
    const html = await page.content();
    res.send(html);
    await browser.close();
})
app.listen(8083, () => {
    console.log('ssr is start');
})