const axios = require ('axios');
const cheerio = require ('cheerio');


const fetchItem = async () => {
    try {
       const response = await axios.get('https://www.amazon.com.tr/s?k=ti%C5%9F%C3%B6rt&pf_rd_i=12466553031&pf_rd_m=A1UNQM1SR2CHM&pf_rd_p=be665775-745d-43af-8e70-8679bd6fa552&pf_rd_r=B357RXK8WS5HBVW3T8TD&pf_rd_s=merchandised-search-6&pf_rd_t=101&ref=s9_acss_bw_cg_ae5b8be7_1a1_w')
        const html = response.data;
        const $ = cheerio.load(html);

        const datas = [];
        // Wrapper Class
        $('.a-section.a-spacing-small.puis-padding-left-micro.puis-padding-right-micro').each((index, el) => {
            const item = $(el)
        // Wrapper In Item Class
            const image = item.find("span.a-size-base-plus.a-color-base.a-text-normal").text();
            datas.push(image);
        })
        return datas; 
    } catch (err) {
        console.log(err);
    }
}

fetchItem().then(datas => console.log(datas));
