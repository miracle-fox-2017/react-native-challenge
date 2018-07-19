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

export const findCompare = input => {
  return dispatch => {
    console.log('MASUK', input)
    if(input !== '') {
      // https://price-api.datayuge.com/api/v1/compare/specs?api_key=bExRZJVNF5hZhqXljV4xdnV30pLcjZIFKEB&id=${localprops.product_id}`)
      Axios.get(`https://price-api.datayuge.com/api/v1/compare/search?product=${input}&api_key=bExRZJVNF5hZhqXljV4xdnV30pLcjZIFKEB`)
      .then(({data}) => {
        console.log(data.data)
        dispatch({
          type: 'GET_COMPARE',
          allcompare: data.data
        })
      })
      .catch(err => {
        console.log(err)
      })
    } else {
      alert('Please fill the blank')
    }
  }
}

export const getSpecs = specs => {
  return dispatch => {
    Axios.get(`https://price-api.datayuge.com/api/v1/compare/specs?api_key=bExRZJVNF5hZhqXljV4xdnV30pLcjZIFKEB&id=${specs.product_id}`)
    .then(({data}) => {
      console.log('SPESIFIKASI', data)
      dispatch({
        type: 'GET_SPECIFICATION',
        specification: data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}