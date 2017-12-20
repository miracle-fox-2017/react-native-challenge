import Axios from 'axios'

export const getSuggest = () => {
  return dispatch => {
    let update = 'Iphone'
    let angka = Math.floor(Math.random() * 10) + 1;
    if(angka === 10){
      update = 'Iphone'
    } else if (angka === 9) {
      update = 'Vivo'
    } else if (angka === 8) {
      update = 'Asus'
    } else if (angka === 7) {
      update = 'Oppo'
    } else if (angka === 6) {
      update = 'Xiaomi'
    } else if (angka === 5) {
      update = 'Huawei'
    } else if (angka === 4) {
      update = 'OnePlus'
    } else if (angka === 3) {
      update = 'Lenovo'
    } else if (angka === 2) {
      update = 'Mito'
    } else if (angka === 1) {
      update = 'Nokia'
    }
    Axios.get(`https://price-api.datayuge.com/api/v1/compare/search/suggest?api_key=bExRZJVNF5hZhqXljV4xdnV30pLcjZIFKEB&product=${update}`)
    .then(({data}) => {
      console.log('masuk', data.keywords)
      data.keywords.suggest
      dispatch({
        type: 'GET_SUGGEST',
        listSuggest: data.keywords
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}