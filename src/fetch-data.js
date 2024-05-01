const axios = require('axios');
const cheerio = require('cheerio');

const fetchItems = async () => {
    try {
        const response = await axios.get('https://www.amazon.com.tr/s?k=ti%C5%9F%C3%B6rt&pf_rd_i=12466553031&pf_rd_m=A1UNQM1SR2CHM&pf_rd_p=be665775-745d-43af-8e70-8679bd6fa552&pf_rd_r=B357RXK8WS5HBVW3T8TD&pf_rd_s=merchandised-search-6&pf_rd_t=101&ref=s9_acss_bw_cg_ae5b8be7_1a1_w');
        const html = response.data;
        const $ = cheerio.load(html);

        const items = [];

        $('.s-result-item').each((index, el) => {
            const item = $(el);
            const title = item.find('.a-size-base-plus.a-color-base.a-text-normal').text().trim();
            const price = item.find('.a-price-whole').text().trim();
            const rating = item.find('.a-icon-alt').text().trim();
            const image = item.find('img').attr('src');

            if (title && price && rating && image) {
                items.push({
                    title,
                    price,
                    rating,
                    image
                });
            }
        });

        return items;
    } catch (error) {
        throw new Error("Veri alınamadı: " + error);
    }
};

module.exports = fetchItems;
